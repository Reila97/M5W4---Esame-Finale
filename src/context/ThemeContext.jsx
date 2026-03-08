import  { createContext, useState, useContext, useEffect } from 'react';


const ThemeContext = createContext();
//creo il contesto

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  console.log(theme)

  useEffect(() => {
   document.body.classList.remove('light', 'dark');
  document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]); //applica classe theme al body

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);