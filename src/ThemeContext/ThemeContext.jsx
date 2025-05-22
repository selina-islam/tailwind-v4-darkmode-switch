// Import the createContext function from React.
// This function allows us to create a context for managing global state.
import { createContext } from "react";

// Create a new context called ThemeContext.
// We pass an empty object as the default value.
// Later, we'll provide an actual value using ThemeContext.Provider.
const ThemeContext = createContext({});

// Export the ThemeContext so it can be imported and used in other files,
// such as ThemeProvider.jsx that need access to the theme.
export default ThemeContext;
