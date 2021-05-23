import { useContext , useState, useEffect } from 'react'
import ThemeContext from "../context/ThemeContext"
import ThemeColors from '../theme/ThemeColors'

const ThemeProvider = ({children}) => {

    // const context = useContext(ThemeContext)
    const [theme,setTheme] = useState(ThemeColors.dark)
    const [color,setColor] = useState(ThemeColors.colors.red)
    const [grid,setGrid] = useState(true)


    useEffect(async() => {

        const localStorage =  window.localStorage

        if(!localStorage.getItem('theme')) {
            localStorage.setItem('theme',theme.name)
        }

        if(localStorage.getItem('theme')) {
            setTheme(ThemeColors[localStorage.getItem('theme')])
        }

        if(!localStorage.getItem('mainColor')) {
            localStorage.setItem('mainColor',color)
        }

        if(localStorage.getItem('mainColor')) {
            setColor(localStorage.getItem('mainColor'))
        }
    }, [])
    
    const context = {
        theme,
        setTheme,
        color,
        setColor,
        grid,
        setGrid
    }


    return(
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeProvider