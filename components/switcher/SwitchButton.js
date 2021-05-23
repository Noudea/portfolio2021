import { useState , useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import ThemeColors from '../../theme/ThemeColors'

const SwitchButton = () => {

    const {theme,setTheme} = useContext(ThemeContext)
    const {color,setColor} = useContext(ThemeContext)
    
    const toggleSwitch = () => {
        const localStorage =  window.localStorage

        if(theme.name === 'dark') {
            setTheme(ThemeColors.light)
            localStorage.setItem('theme','light')
            console.log(theme)
        }
        if(theme.name === 'light') {
            setTheme(ThemeColors.dark)
            localStorage.setItem('theme','dark')
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
                box-shadow: 0px 0px 15px 2px rgba(97, 83, 255, 0);
                padding: 5px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 50px;
                width: 70px;
                height: 32px;
                background: ${color};
                transition-duration: 0.5s;
            }


            {/* .dark {
                transition-duration: 0.5s;
                position: absolute;
                background-color: white;
                border-radius: 50%;
                width: 24px;
                height: 24px;
            }        

            .light {
                background-color: white;
                border-radius: 50%;
                width: 24px;
                height: 24px;
                transition-duration: 0.5s;
                transform: translateX(36px);
                will-change: transform;
            } */}
            .switchButtonRound {
                position: absolute;
                background-color: white;
                border-radius: 50%;
                width: 24px;
                height: 24px;
                transition-duration: 0.5s;
            }
            .active {
                transition-duration: 0.5s;
                transform: translateX(36px);
                will-change: transform;
}
            }
            svg {
                fill:white;
                width:25px;
            }
            `}</style>

            {/* {theme.name === 'light' ? <img src='/svg/sun.svg'></img>  : null } */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="sun"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z"/><path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z"/><path d="M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z"/><path d="M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z"/><path d="M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"/><path d="M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z"/><path d="M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z"/><path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"/></g></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="moon"><rect width="24" height="24" opacity="0"/><path d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3z"/></g></g></svg>
            {/* <div className={theme.name === 'light' ? 'light' : 'dark'}>
            </div> */}
            <div className = {theme.name === 'light' ? 'switchButtonRound active' : 'switchButtonRound'}></div>
            {/* {theme.name === 'dark' ? <img src='/svg/moon.svg'></img> : null} */}
    </div>
    )
    
    
}


export default SwitchButton