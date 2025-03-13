import { useEffect, useState } from "react";

export default function DebounceSearch() {
  const [searchedVal, setSearchedVal] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const searchedId = setTimeout(() => {
      fetch(`https://api.postalpincode.in/pincode/${searchedVal}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data, data[0].Status);
          if (data[0].Status === "Success") {
            const place =
              data[0].PostOffice[0].Block + "-" + data[0].PostOffice[0].Name;
            setResult(place);
          }
        });
    }, 2000);

    return () => {
      console.log("Clear");
      return clearTimeout(searchedId);
    };
  }, [searchedVal]);

  return (
    <div>
      <input
        className="p-2 m-5 border rounded"
        placeholder="Search here"
        value={searchedVal}
        onChange={(e) => setSearchedVal(e.target.value)}
      />
      {result && <div>{result}</div>}
    </div>
  );
}
