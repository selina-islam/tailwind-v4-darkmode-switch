# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
#   t a i l w i n d - v 4 - d a r k m o d e - s w i t c h 

React Dark Mode Toggler
A simple React app demonstrating a dark mode toggler using React Context API and Tailwind CSS with persistent theme preference in localStorage.

Features
Toggle between light and dark themes.

Theme preference saved in localStorage to persist on page reload.

Uses React Context to share theme state globally.

Tailwind CSS dark class-based dark mode support.

Clean and reusable code with custom hooks.

Getting Started
Prerequisites
Node.js and npm installed

Basic knowledge of React and Tailwind CSS

Usage
Click the toggle button to switch between light and dark mode.

The app remembers your theme preference across page reloads.

Project Structure
bash
Copy
Edit
/src
  /ThemeContext
    - ThemeContext.js       # React context creation
    - ThemeProvider.jsx     # Context provider with theme state & localStorage sync
    - UseTheme.js           # Custom hook to consume theme context
  - App.jsx                 # Main component with toggle button
  - index.jsx               # App entry point wrapping with ThemeProvider
index.css                   # Tailwind CSS imports and custom styles
tailwind.config.js          # Tailwind config enabling dark mode
Technologies Used
React 18

Tailwind CSS

React Context API

LocalStorage API

How it Works
The ThemeProvider initializes theme state by checking localStorage.

When the user toggles the theme, it updates the state and saves the new preference.

The useEffect hook toggles the dark class on the HTML element, enabling Tailwind’s dark mode styles.

Any component can access theme and setTheme by using the useTheme custom hook.
 
 
