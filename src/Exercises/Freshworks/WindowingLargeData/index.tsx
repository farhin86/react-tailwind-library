import { useMemo } from "react";
import { Table, Column, AutoSizer } from "react-virtualized";
import "react-virtualized/styles.css";

const generateData = (rows: number) =>
  Array.from({ length: rows }, (_, index) => ({
    id: index + 1,
    name: `Name ${index + 1}`,
    age: Math.floor(Math.random() * 50) + 20,
    email: `user${index + 1}@example.com`,
  }));

const LargeDataTable: React.FC = () => {
  const data = useMemo(() => generateData(100000), []);

  return (
    <div className="w-full bg-white text-center h-screen pt-5">
      <h2>Large data table with React Virtualized</h2>
      <div className="h-3/4 mt-5">
        <AutoSizer>
          {({ height, width }) => (
            <Table
              width={width}
              height={height - 50} // Account for the header height
              headerHeight={50}
              rowHeight={40}
              rowCount={data.length}
              rowGetter={({ index }) => data[index]} // Get row data dynamically
            >
              <Column label="ID" dataKey="id" width={width * 0.2} />
              <Column label="Name" dataKey="name" width={width * 0.3} />
              <Column label="Age" dataKey="age" width={width * 0.2} />
              <Column label="Email" dataKey="email" width={width * 0.3} />
            </Table>
          )}
        </AutoSizer>
      </div>
      <div>Here we have used react windowing technique</div>
    </div>
  );
};
export default LargeDataTable;
