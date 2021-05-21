import { useState , useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import ThemeColors from '../../theme/ThemeColors'

const SwitchButton = () => {

    const [active,setActive] = useState(false)
    const {theme,setTheme} = useContext(ThemeContext)
    
    const toggleSwitch = () => {
        if(theme.name === 'dark') {
            setTheme(ThemeColors.light)
            console.log(theme)
        }
        if(theme.name === 'light') {
            setTheme(ThemeColors.dark)
            console.log(theme)
        }
    }
    
    return(
    <div className='switchButtonContainer' onClick={toggleSwitch}>
        <style jsx>{`
            .switchButtonContainer {
                position: relative;
                margin-top: 25px;
                cursor: pointer;
                box-shadow: 0px 0px 15px 2px rgba(50, 68, 228, 0);
                padding: 5px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 50px;
                width: 70px;
                height: 32px;
                background: red;
                transition-duration: 0.5s;
            }
            .switchButtonRound {
                transition-duration: 0.5s;
                position: absolute;
                background-color: white;
                border-radius: 50%;
                width: 24px;
                height: 24px;
            }        

            .active {
                transition-duration: 0.5s;
                transform: translateX(36px);
                will-change: transform;
            }
            `}</style>

            <div className='switchButtonRound active'>
                
            </div>
    </div>
    )
    
    
}


export default SwitchButton