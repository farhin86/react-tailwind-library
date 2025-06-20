import { useEffect, useState } from "react";

export default function GridBox() {
  const [selectedBoxes, setSelectedBoxes] = useState<string[]>([]);
  const [neighbourGrids, setNeighbourGrids] = useState<string[]>([]);
  const gridSize = 4;
  const gridRow = [...Array(gridSize)];
  const gridCol = [...Array(gridSize)];

  function longestAlphaWord(arr: string[]) {
    let longestLen = 0;
    let longestAlphaWord = "";
    arr.forEach((str) => {
      let charCodeStart = 0;
      for (let i = 0; i < str.length; i++) {
        if (charCodeStart < str.charCodeAt(i)) {
          charCodeStart = str.charCodeAt(i);
        } else if (i + 1 >= longestLen) {
          longestAlphaWord = str;
          longestLen = i + 1;
        } else break;
      }
    });
    console.log(longestAlphaWord, longestLen);
  }

  // Given a list of words, find the longest isogram in that list.
  function findLongestIsogram(arr) {
    let longestWord = "";
    arr.forEach((word: string) => {
      let uniqueWord = {};
      for (let i = 0; i < word.length; i++) {
        let exist = uniqueWord[word[i]];
        if (!exist) {
          uniqueWord[word[i]] = 1;
          if (i === word.length - 1 && longestWord.length <= word.length) {
            longestWord = word;
          }
        }

        if (exist) break;
      }
    });
    console.log(longestWord);
  }

  function longestUniqueSubstring(str) {
    //abcabcbb //pwwkew
    //q,w,w=>
    let start = 0;
    let maxLength = 0;
    let maxSubString = "";
    const seen = {};

    for (let end = 0; end < str.length; end++) {
      const char = str[end];

      if (seen[char] !== undefined && seen[char] >= start) {
        start = seen[char] + 1;
      }

      seen[char] = end;

      if (end - start + 1 > maxLength) {
        maxLength = end - start + 1;
        maxSubString = str.slice(start, end + 1);
      }
    }

    console.log(str, "maxSubString", maxSubString);
  }

  function binarySearch(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === num) {
        return true;
      } else if (num > arr[mid]) {
        start = mid + 1;
      } else end = mid - 1;
    }
    return -1;
  }

  function flattenObject(
    obj: any,
    parentsKey: string = "",
    result: any = {}
  ): any {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const fullKey = parentsKey ? `${parentsKey}.${key}` : key;
        if (
          typeof obj[key] === "object" &&
          obj[key] !== null &&
          !Array.isArray(obj[key])
        ) {
          flattenObject(obj[key], fullKey, result); // val, fullkey, res
        } else {
          result[fullKey] = obj[key];
        }
      }
    }
    return result;
  }
  useEffect(() => {
    // const arr = ["floor", "apple", "blind", "flat"];
    // longestAlphaWord(arr);
    // let input = ["toothbrush", "belief", "bananas", "teamwork", "cherries"];
    // let input = ["hollow", "political", "bizarre", "palindromes", "righteous"];
    // findLongestIsogram(input); //"teamwork". "palindromes"
    // longestUniqueSubstring("abcabcbb");
    // const sortedNumbers = [1, 3, 5, 6, 8];
    // console.log(binarySearch(sortedNumbers, 6));
    const nested = {
      user: {
        name: "Alice",
        address: {
          city: "Wonderland",
          zip: 12345,
        },
      },
      active: true,
    };

    const flat = flattenObject(nested);
    console.log(flat);
  }, []);

  function handleSelect(
    rowIndex: number,
    colIndex: number,
    isSelected: boolean
  ) {
    if (!isSelected) {
      setSelectedBoxes([...selectedBoxes, `${rowIndex}-${colIndex}`]);
      getNeighbours(`${rowIndex}-${colIndex}`);
    }
  }

  function getNeighbours(selectedIndex: string) {
    //'1-2'
    let row = Number(selectedIndex.split("-")[0]);
    let col = Number(selectedIndex.split("-")[1]);
    const neighbourGrids = [
      `${row}-${col - 1}`,
      `${row}-${col + 1}`,
      `${row - 1}-${col}`,
      `${row + 1}-${col}`,
      `${row - 1}-${col - 1}`,
      `${row - 1}-${col + 1}`,
      `${row + 1}-${col - 1}`,
      `${row + 1}-${col + 1}`,
    ];
    setNeighbourGrids(neighbourGrids);
  }
  return (
    <div>
      <h2>
        Click on cells to select them. Once all cells are selected, they will be
        unselected one by one in the reverse order they were selected.
      </h2>
      {gridRow.map((_, rowIndex) => {
        return (
          <div className="flex gap-2" key={rowIndex}>
            {gridCol.map((_, colIndex) => {
              const isSelected =
                selectedBoxes.indexOf(`${rowIndex}-${colIndex}`) > -1;
              const isNeighbour =
                neighbourGrids.indexOf(`${rowIndex}-${colIndex}`) > -1;
              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  onClick={() => handleSelect(rowIndex, colIndex, isSelected)}
                  className={`w-20 h-20 border mb-3 cursor-pointer ${
                    isSelected
                      ? "bg-red-400"
                      : isNeighbour
                      ? "bg-blue-400"
                      : "bg-transparent"
                  }`}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
