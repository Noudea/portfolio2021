import { useContext , useState, useEffect } from 'react'
import ThemeContext from "../context/ThemeContext"
import ThemeColors from '../theme/ThemeColors'

const ThemeProvider = ({children}) => {

    // const context = useContext(ThemeContext)
    const [theme,setTheme] = useState(ThemeColors.dark)
    const [colors,setColors] = useState(ThemeColors.colors)
    const [grid,setGrid] = useState(true)


    useEffect(() => {

        const localStorage =  window.localStorage

        if(!localStorage.getItem('theme')) {
            localStorage.setItem('theme',theme.name)
        }

        if(localStorage.getItem('theme')) {
            setTheme(ThemeColors[localStorage.getItem('theme')])
        }

        console.log(window.localStorage.getItem('theme'))


    }, [])
    
    const context = {
        theme,
        setTheme,
        colors,
        setColors,
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