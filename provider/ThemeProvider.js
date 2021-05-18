import { useContext } from 'react'
import ThemeContext from "../context/ThemeContext"

const ThemeProvider = ({children}) => {

    const context = useContext(ThemeContext)



    return(
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeProvider