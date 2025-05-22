// Import the useContext hook from React.
// useContext allows you to access values from a React Context.
import { useContext } from "react";

// Import the ThemeContext we created earlier.
import ThemeContext from "./ThemeContext";

// Define a custom hook called useTheme.
// This hook simply returns the current context value from ThemeContext.
// It allows components to easily access the theme state and setTheme function.
export const useTheme = () => useContext(ThemeContext);
