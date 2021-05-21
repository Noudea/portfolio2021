import { useContext , useState, useEffect } from 'react'
import ThemeContext from "../context/ThemeContext"
import ThemeColors from '../theme/ThemeColors'

const ThemeProvider = ({children}) => {

    // const context = useContext(ThemeContext)
    const [theme,setTheme] = useState(ThemeColors.dark)
    const [colors,setColors] = useState(false)
    const [grid,setGrid] = useState(false)


    useEffect(() => {
        
        

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