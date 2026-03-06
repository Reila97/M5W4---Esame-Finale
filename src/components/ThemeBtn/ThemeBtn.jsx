import { Button } from "react-bootstrap"
import { useTheme } from "../../context/ThemeContext.jsx"

const ThemeBtn =() => {
    const {theme, toggleTheme} =useTheme()
  return (
    <>
      <Button 
      onClick={toggleTheme} 
      style={{ cursor: 'pointer' }}>
      Change Theme {theme === 'light' ? 'Dark 🌙' : 'Light ☀️'}
    </Button>
    </>
  )
}

export default ThemeBtn
