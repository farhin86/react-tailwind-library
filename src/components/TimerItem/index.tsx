import { useEffect, useState } from "react";

interface TimerItemType {
  timer: number;
}

export default function TimerItem({ timer }: TimerItemType) {
  const [currTimer, setCurrTimer] = useState<number>(0);
  const [isTimerPaused, setTimerPaused] = useState<boolean>(false);
  const [isTimerStarted, setStartTimer] = useState<boolean>(false);
  const [isTimerStopped, setStopTimer] = useState<boolean>(false);

  function getTime(seconds: number) {
    let hr = Math.floor(seconds / 3600);
    let min = Math.floor((seconds % 3600) / 60);
    let sec = (seconds % 3600) % 60;
    return hr + ":" + min + ":" + sec;
  }

  useEffect(() => {
    setCurrTimer(timer);
  }, []);

  useEffect(() => {
    if (!isTimerPaused && isTimerStarted && !isTimerStopped) {
      const intervalId = setInterval(() => {
        setCurrTimer(currTimer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [currTimer, isTimerPaused, isTimerStarted, isTimerStopped]);

  function handlePause() {
    setTimerPaused(!isTimerPaused);
  }
  function handleStop() {
    setStopTimer(true);
  }
  function handleStart() {
    setStartTimer(true);
  }
  return (
    <div className="flex justify-center gap-5 items-center my-5">
      {getTime(currTimer)}
      <button
        className="border rounded p-2 bg-blue-400 text-white"
        onClick={handleStart}
      >
        Start
      </button>
      <button
        className="border rounded p-2 bg-blue-400 text-white"
        onClick={handlePause}
      >
        Pause
      </button>
      <button
        className="border rounded p-2 bg-blue-400 text-white"
        onClick={handleStop}
      >
        Stop
      </button>
      <button
        className="border rounded p-2 bg-blue-400 text-white"
        onClick={() => setCurrTimer(timer)}
      >
        Reset
      </button>
    </div>
  );
}
