import { useState } from "react";

const entries = [
  { id: "1", label: "Chevrolet Camaro", group: "Sedan" },
  { id: "2", label: "BMW Z4", group: "Sedan" },
  { id: "3", label: "Lamborghini Urus", group: "SUV" },
  { id: "4", label: "Maruti Ritz", group: "Hatchback" },
  { id: "5", label: "Honda City", group: "Sedan" },
  { id: "6", label: "Nissan Terrano", group: "SUV" },
  { id: "7", label: "Honda CRV", group: "SUV" },
  { id: "8", label: "Audi A8", group: "Sedan" },
  { id: "9", label: "Skoda Kodiaq", group: "SUV" },
  { id: "10", label: "Hyundai Verna", group: "Sedan" },
];

interface Entry {
  [key: string]: string;
}
interface DataTableProps {
  entries: Entry[];
}
export default function Table() {
  return <DataTable entries={entries} />;
}
export const DataTable: React.FC<DataTableProps> = ({ entries }) => {
  const [columnData, setColumnss] = useState(Object.keys(entries[0]));
  const [entryId, setentryId] = useState("");
  const [columnName, setcolumnName] = useState("");
  const [columnVal, setcolumnVal] = useState("");
  const headers = Array.from(
    new Set(entries.flatMap((entry) => Object.keys(entry)))
  );
  function addColumn() {
    if (entryId && columnName && columnVal) {
      let newEntry = entries.map;
      console.log("entry");
    }
  }
  return (
    <div className="m-10">
      <div>
        <input
          value={entryId}
          onChange={(e) => setentryId(e.target.value)}
          className="border p-2 m-2"
          placeholder="Enter entry id"
        />
        <input
          value={columnName}
          onChange={(e) => setcolumnName(e.target.value)}
          className="border p-2 m-2"
          placeholder="Enter Columns"
        />
        <input
          value={columnVal}
          onChange={(e) => setcolumnVal(e.target.value)}
          className="border p-2 m-2"
          placeholder="Enter value"
        />
        <button className="border p-2" onClick={addColumn}>
          Add
        </button>
      </div>
      <table className="w-2/3">
        <thead className="flex justify-between mb-5 border">
          {columnData.map((col, colIndex) => {
            return <th>{col}</th>;
          })}
        </thead>
        <tbody>
          {entries.map((row, rowId) => {
            return (
              <tr className="flex justify-between mb-5">
                <td>{row.id}</td>
                <td>{row.label}</td>
                <td>{row.group}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
