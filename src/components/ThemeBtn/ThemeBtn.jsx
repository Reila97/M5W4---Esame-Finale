import { Button } from "react-bootstrap"
import { useTheme } from "../../context/ThemeContext.jsx"
import "./ThemeBtn.css"

const ThemeBtn =() => {
    const {theme, toggleTheme} =useTheme()
  return (
    <>
      <Button 
      className="ThemeBtn m-3"
      onClick={toggleTheme} 
      style={{ cursor: 'pointer' }}>

      Change Theme {theme === 'light' ? 'Dark 🌙' : 'Light ☀️'}
      
    </Button>
    </>
  )
}

export default ThemeBtn
