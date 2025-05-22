// Importing the light mode icon from react-icons
import { CiLight } from "react-icons/ci";

// Importing the ThemeProvider (assumed used in higher component or index.js)
import ThemeProvider from "./ThemeContext/ThemeProvider";

// Importing the custom hook to access theme context
import { useTheme } from "./ThemeContext/UseTheme";

// Importing the dark mode icon from react-icons
import { IoMoonSharp } from "react-icons/io5";

function App() {
  // Destructuring the theme state and setTheme function from the custom hook
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* Main container, centered both vertically and horizontally */}
      <div className="flex flex-col justify-center items-center h-screen dark:bg-black bg-white">
        {/* Page title, text color changes based on theme */}
        <h1 className="text-4xl font-bold py-6 dark:text-white">
          Dark Mode Toggler
        </h1>

        {/* Button to toggle the theme between light and dark */}
        <button
          onClick={() => setTheme(!theme)} // Toggle the theme value (true/false)
          className="bg-blue-600 p-4 rounded-md text-white font-semibold cursor-pointer"
        >
          {/* Show light icon when in dark mode, show moon icon when in light mode */}
          {theme ? (
            <CiLight className="text-2xl" />
          ) : (
            <IoMoonSharp className="text-2xl text-black" />
          )}
        </button>
      </div>
    </>
  );
}

export default App;
