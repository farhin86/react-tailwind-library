import { useState } from "react";
import TimerItem from "../TimerItem";
import TimerInput from "../TimerInput";

export default function Timer() {
  const [timerList, setTimerList] = useState<number[]>([]);

  function handleAddTimer(timer: number) {
    setTimerList([...timerList, timer]);
  }
  return (
    <div>
      <TimerInput handleAddTimer={handleAddTimer} />
      <h4 className="mt-5">List of created timers-</h4>
      <div className="">
        {timerList &&
          timerList.map((timer, id) => {
            return (
              <div key={id}>
                <TimerItem timer={timer} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
