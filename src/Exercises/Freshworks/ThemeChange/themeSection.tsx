import { useContext } from "react";
import { ThemeContext } from "./themeProvider";

export default function ThemeSelection() {
  const themeContext = useContext(ThemeContext);
  console.log("ThemeSelection", themeContext);
  return (
    <div
      className="w-full min-h-screen p-10"
      style={{
        backgroundColor: themeContext?.background,
        color: themeContext?.color,
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold">Theme Changer</h1>
        <p className="mt-6 text-xl">
          Click the buttons below to change the theme of the page!
        </p>
      </div>
    </div>
  );
}
