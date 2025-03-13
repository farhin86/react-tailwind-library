import { createContext, ReactNode, useReducer } from "react";

type initialStateProps = typeof themes.light;
type dispatchContextType = (data: actionType) => void;
type ThemeProviderProps = {
  children: ReactNode;
};
type actionType = {
  type: string;
  payload: keyof typeof themes;
};
export const themes = {
  light: { background: "#f9f9f9", color: "#000" },
  dark: { background: "#333", color: "#fff" },
  red: { background: "#d8126d", color: "#fff" },
  blue: { background: "#007BFF", color: "#fff" },
  green: { background: "#28a745", color: "#fff" },
};

const initialState: initialStateProps = themes.light;
export const SET_THEME = "SET_THEME";
export const ThemeContext = createContext<initialStateProps | null>(null);
export const DispatchContext = createContext<dispatchContextType | null>(null);

function ThemeReducer(state: initialStateProps, action: actionType) {
  switch (action.type) {
    case SET_THEME: {
      return themes[action.payload];
    }
    default:
      return state;
  }
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, dispatch] = useReducer(ThemeReducer, initialState);
  return (
    <ThemeContext.Provider value={theme}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </ThemeContext.Provider>
  );
}
