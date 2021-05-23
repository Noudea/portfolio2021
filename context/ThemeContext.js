import React from 'react';
import ThemeColors from '../theme/ThemeColors'

const ThemeContext = React.createContext({
    theme : ThemeColors.dark,
    setTheme : () => {},
    color : ThemeColors.colors.red,
    setColor : () => {},
    grid : false,
    setGrid : () => {}
})

export default ThemeContext