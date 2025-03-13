import { useState } from "react";

interface TimerInputType {
  handleAddTimer: (time: number) => void;
}
export default function TimerInput({ handleAddTimer }: TimerInputType) {
  const [hour, setHour] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [sec, setSec] = useState<number>(0);

  function handleSetTimers() {
    const timeInSec = hour * 3600 + min * 60 + sec;
    handleAddTimer(timeInSec);
  }

  return (
    <div>
      <h4 className="mb-5">Please insert the time for timer-</h4>
      <input
        className="border rounded p-2 m-1"
        placeholder="hr"
        value={hour}
        onChange={(e) => setHour(Number(e.target.value))}
      />
      <input
        className="border rounded p-2 m-1"
        placeholder="min"
        value={min}
        onChange={(e) => setMin(Number(e.target.value))}
      />
      <input
        className="border rounded p-2 m-1"
        placeholder="sec"
        value={sec}
        onChange={(e) => setSec(Number(e.target.value))}
      />
      <button
        className="border rounded p-2 bg-blue-400 text-white"
        onClick={() => handleSetTimers()}
      >
        Submit
      </button>
    </div>
  );
}
