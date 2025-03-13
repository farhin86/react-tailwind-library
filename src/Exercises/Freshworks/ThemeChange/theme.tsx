import { ThemeButtons } from "./themeButtons";
import ThemeProvider from "./themeProvider";
import ThemeSelection from "./themeSection";

export const Theme = () => {
  return (
    <ThemeProvider>
      <ThemeSelection />
      <ThemeButtons />
    </ThemeProvider>
  );
};
