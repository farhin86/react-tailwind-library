import { useContext } from "react";
import { DispatchContext, SET_THEME, themes } from "./themeProvider";

export const ThemeButtons = () => {
  const dispatchThemeContext = useContext(DispatchContext);

  function onChangeTheme(themeName: keyof typeof themes) {
    dispatchThemeContext({ type: SET_THEME, payload: themeName });
  }
  return (
    <div className="flex justify-center items-center mt-4 gap-4 absolute top-60">
      <button
        className="border rounded p-4 bg-white"
        onClick={() => onChangeTheme("light")}
      >
        Light
      </button>
      <button
        className="border rounded p-4 bg-black text-white"
        onClick={() => onChangeTheme("dark")}
      >
        Dark
      </button>
      <button
        className="border rounded p-4 bg-red-500 text-white"
        onClick={() => onChangeTheme("red")}
      >
        Red
      </button>
      <button
        className="border rounded p-4 bg-blue-500 text-white"
        onClick={() => onChangeTheme("blue")}
      >
        Blue
      </button>
      <button
        className="border rounded p-4 bg-green-500 text-white"
        onClick={() => onChangeTheme("green")}
      >
        Green
      </button>
    </div>
  );
};
