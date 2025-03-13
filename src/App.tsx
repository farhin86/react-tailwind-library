import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Timer from "./components/Timer";
import { Weather } from "./Pages/weather";
import { Shopping } from "./Pages/shopping";
import DebounceSearch from "./Exercises/Freshworks/debouncingSearch";
import { Theme } from "./Exercises/Freshworks/ThemeChange/theme";
import FormValidation from "./Exercises/Freshworks/FormValidation";
import RoleBasedDashboaed from "./Exercises/Freshworks/RoleBasedDashboard";
import LargeDataTable from "./Exercises/Freshworks/WindowingLargeData";
import GridLights from "./Exercises/MiniChallenges/GridLights";
import Comments from "./Exercises/MiniChallenges/Comment";
import NestedCheckbox from "./Exercises/MiniChallenges/NestedCheckbox";
import OtpValidation from "./Exercises/MiniChallenges/OTP";
// import { Theme } from "./Exercises/Freshworks/globalTheme/theme";
// import "./App.css";

function App() {
  // const [formKey, setFormKey] = useState(1);
  // function onSubmit() {
  //   setFormKey((formKey) => formKey + 1);
  // }
  return (
    <>
      {/* <div className="flex flex-col items-center gap-10"> */}
      {/* <Timer /> */}
      {/* <Weather /> */}
      {/* <Shopping /> */}
      {/* <DebounceSearch /> */}
      {/* <Theme /> */}
      {/* <FormValidation key={formKey} onSubmit={onSubmit} /> */}
      {/* <RoleBasedDashboaed /> */}
      {/* <LargeDataTable /> */}
      {/* <GridLights /> */}
      {/* </div> */}
      <div>
        {/* <Comments /> */}
        {/* <NestedCheckbox /> */}
        <OtpValidation />
      </div>
    </>
  );
}

export default App;
