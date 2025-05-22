// Import StrictMode from React for highlighting potential problems in development
import { StrictMode } from "react";

// Import the React 18 createRoot API to create a root for rendering
import { createRoot } from "react-dom/client";

// Import your global CSS file with Tailwind directives
import "./index.css";

// Import the main App component
import App from "./App.jsx";

// Import the ThemeProvider component to wrap the app and provide theme context
import ThemeProvider from "./ThemeContext/ThemeProvider.jsx";

// Find the root DOM node with id="root" and create a React root
const root = createRoot(document.getElementById("root"));

// Render the app wrapped with ThemeProvider and StrictMode
root.render(
  <ThemeProvider>
    {/* Provide theme context (dark/light mode) to the whole app */}
    <StrictMode>
      {/* Helps detect potential issues during development */}
      <App /> {/* Main app component */}
    </StrictMode>
  </ThemeProvider>
);
