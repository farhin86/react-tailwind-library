interface CounterProps {
  count: number;
  itemCounter: (name: string) => void;
}

export default function Counter({ count, itemCounter }: CounterProps) {
  return (
    <div className="bg-blue-400 text-white flex py-2 px-4 gap-3 rounded">
      <div className="cursor-pointer" onClick={() => itemCounter("DES")}>
        -
      </div>
      {count}
      <div className="cursor-pointer" onClick={() => itemCounter("INC")}>
        +
      </div>
    </div>
  );
}
