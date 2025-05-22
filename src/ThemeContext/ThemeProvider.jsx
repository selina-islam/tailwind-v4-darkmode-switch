// Import React, and hooks useState and useEffect for state and side effects
import React, { useEffect, useState } from "react";

// Import the ThemeContext we created to provide and consume theme-related data
import ThemeContext from "./ThemeContext";

// ThemeProvider component wraps its children and provides theme context values
export const ThemeProvider = ({ children }) => {
  // Initialize 'theme' state by checking localStorage:
  // If stored theme is 'dark', set state to true; otherwise false.
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark");

  // Side effect that runs whenever 'theme' changes
  // It updates the <html> element’s class and syncs localStorage accordingly
  useEffect(() => {
    if (theme) {
      // Add 'dark' class to enable dark mode styles via Tailwind
      document.documentElement.classList.add("dark");
      // Store the current theme in localStorage for persistence
      localStorage.setItem("theme", "dark");
    } else {
      // Remove 'dark' class to switch back to light mode styles
      document.documentElement.classList.remove("dark");
      // Update localStorage to reflect light mode
      localStorage.setItem("theme", "light");
    }
  }, [theme]); // Runs whenever 'theme' state changes

  // Provide the current theme and a function to update it to all child components
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export the ThemeProvider for use in your root component (e.g., index.jsx or App.jsx)
export default ThemeProvider;
