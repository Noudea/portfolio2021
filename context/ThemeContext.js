import React from 'react';
import ThemeColors from '../theme/ThemeColors'

const ThemeContext = React.createContext({
    theme : ThemeColors.dark,
    setTheme : () => {},
    colors : 'test',
    setColors : () => {}
})

export default ThemeContext