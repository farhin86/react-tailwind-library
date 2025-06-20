import { Profiler, useState } from "react";
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
import TypeAhead from "./Exercises/MiniChallenges/TypeAhead";
import Home from "./Exercises/MiniChallenges/Modal/index";
import Counter from "./Exercises/Practice/counter";
import FlashCards from "./Exercises/MiniChallenges/FlashCards";
import {
  ToastProvider,
  ToastTrigger,
  ToastTriggerSuccess,
} from "./Exercises/MiniChallenges/Toast/appToastContext/index";
import PasswordStrength from "./Exercises/MiniChallenges/Password";
import RouteBasedUser from "./Exercises/Practice/RouteBased";
import GridBox from "./Exercises/Practice/GridBox";
import TodoList from "./Exercises/Practice/TodoList";
import Table from "./Exercises/Practice/Table";
import ContactForm from "./Exercises/Practice/ContactForm";
import CursorMove from "./Exercises/Practice/CursorMove";
// import { Theme } from "./Exercises/Freshworks/globalTheme/theme";
// import "./App.css";

function App() {
  // const [formKey, setFormKey] = useState(1);
  // function onSubmit() {
  //   setFormKey((formKey) => formKey + 1);
  // }
  // function onrender(data, a, b , c,d){
  //   console.log(data, a,b,c,d);
  // }
  return (
    <>
      {/* <div className="flex flex-col items-center gap-10"> */}
      {/* <Timer /> */}
      {/* <Weather /> */}
      {/* <Shopping /> */}
      {/* <DebounceSearch /> */}
      {/* Counter */}
      {/* <Theme /> */}
      {/* <FormValidation key={formKey} onSubmit={onSubmit} /> */}
      {/* <RoleBasedDashboaed /> */}
      {/* <LargeDataTable /> */}
      {/* <GridLights /> */}
      {/* </div> */}
      <div>
        {/* <Comments /> */}
        {/* <NestedCheckbox /> */}
        {/* <OtpValidation /> */}
        {/* <TypeAhead /> */}
        {/* <Profiler id="typeahead" onRender={onrender}>
          <TypeAhead />
        </Profiler> */}
        {/* <Home /> Modal */}
        {/* Practice  */}
        {/* <Counter /> */}
        {/* <FlashCards /> */}
        {/* <ToastProvider /> */}
        {/* <ToastTriggerSuccess /> */}
        {/* <PasswordStrength /> */}
        {/* <RouteBasedUser /> */}
        {/* <GridBox /> */}
        {/* <TodoList /> */}
        {/* <Table /> */}
        <ContactForm />
        {/* <CursorMove /> */}
        App
      </div>
    </>
  );
}

export default App;
