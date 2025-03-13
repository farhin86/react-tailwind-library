import { useRef, useState } from "react";
import Grid from "./Grid";

export default function GridLights() {
  const GridSize = 4;
  const GridRow = [...Array(GridSize)];
  const GridCol = [...Array(GridSize)];
  const [gridSequence, setGridSequence] = useState<string[]>([]);
  const delayRef = useRef<NodeJS.Timeout | null>(null);

  function selectGrid(row: number, col: number) {
    const gridNumber = `${row}.${col}`;
    const newSeq = [...gridSequence, gridNumber];
    setGridSequence(newSeq);
    if (newSeq.length === Math.pow(GridSize, 2)) {
      delayRef.current = setInterval(() => {
        deSelect();
      }, 600);
    }
  }

  function deSelect() {
    setGridSequence((prevState) => {
      if (prevState.length === 0) {
        clearInterval(delayRef.current);
        return prevState;
      } else {
        const deSelect = prevState.slice(0, -1);
        console.log(deSelect, prevState);
        return deSelect;
      }
    });
  }

  return (
    <div className="mt-10">
      <h2>
        Click on cells to select them. Once all cells are selected, they will be
        unselected one by one in the reverse order they were selected.
      </h2>
      <div className="mt-5">
        {GridRow.map((row, rowIndex) => {
          return (
            <div
              key={rowIndex}
              className="flex no-wrap w-full gap-3 justify-center"
            >
              {GridCol.map((col, colIndex) => {
                const isSelect =
                  gridSequence.indexOf(`${rowIndex}.${colIndex}`) > -1;
                return (
                  <div key={`${rowIndex}.${colIndex}`} className="mb-3">
                    <Grid
                      onClick={() => selectGrid(rowIndex, colIndex)}
                      selected={isSelect}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
