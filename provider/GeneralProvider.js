import { useState, useEffect , useContext } from 'react'

import ThemeContext from "../context/ThemeContext"
import ThemeProvider from "./ThemeProvider"


const GeneralProvider = ({children}) => {

    return(
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default GeneralProvider