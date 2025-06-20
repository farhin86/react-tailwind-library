import { memo, useEffect, useState } from "react";
import { useAsync } from "../../utility/hooks/useAsync";

export default function Counter() {
  //   const [count, setCount] = useState({ count: 0 });
  //   const [data, error, isLoading, refetch] = useAsync(fetchFailed, 3);

  //   function increament() {
  //     // count.count = count.count +1;
  //     const newCount = { count: count.count + 1 };
  //     setCount(newCount);
  //     // refetch();
  //   }
  //   // console.log(count);

  //   function fetchSuccess() {
  //     return new Promise((resolve) => resolve(10));
  //   }

  //   function fetchFailed() {
  //     return new Promise((resolve, reject) => reject("Wrong User"));
  //   }

  //   console.log({ data }, { error }, isLoading);

  //   return <button onClick={() => increament()}>count {count.count}</button>;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function uniques(arr) {
    // let obj;
    // arr.forEach(element => {
    //     obj[element] = element;
    // });
    // return Object.values(obj);
    // return [...new Set(arr)];
    // [1, 2, 1, 3]

    let exitingValue = {};
    return arr.filter((val) => {
      const exists = exitingValue[val];
      if (!exists) {
        exitingValue[val] = 1;
      }
      return !exists;
    });
  }
  const handleClick = () => {
    setCount((prevCount) => prevCount + 3);
    setCount((prevCount) => prevCount + 2);
  };

  return <div onClick={handleClick}>{count}</div>;
}

export function List({ names }: { names: string[] }) {
  const filteredNames = useMemo(() => {
    let exitingValue = {};
    return names.filter((val) => {
      const exists = exitingValue[val];
      if (!exists) {
        exitingValue[val] = 1;
      }
      return !exists;
    });
  }, [names]);
  // [1, 2, 3]
  // [2, 3]

  return (
    <div>
      <ul>
        {filteredNames.map((name, index) => {
          //   return <Item name={name} key={index}/> ;
          return <li key={index}> {name} </li>;
        })}
      </ul>
    </div>
  );
}

const Item = memo(({ name }) => {
  return <li>{name}</li>;
});
