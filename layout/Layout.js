import { useContext } from 'react'

import Background from "../components/background/Background"
import GridSwitcher from "../components/switcher/GridSwitcher"
import SwitchButton from "../components/switcher/SwitchButton"
import ThemeContext from "../context/ThemeContext"

const Layout = ({children}) => {

    const theme = useContext(ThemeContext).theme


    return(<>
    <style jsx>{`
        .toolContainer {
            position: fixed;
            width: 10vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            padding: 30px;
            left: 0px;
        }
        
        .arianeContainer {
            position: fixed;
            right: 0px;
            width: 10vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        
        `}</style>

        <style jsx global>{`
            body {
                background-color:${theme.main};
                animation-name: fade;
                animation-duration: 2s;
                animation-fill-mode: forwards;
                transition-duration: 0.5s;
            }
            h1,p {
                color:white;
            }
        `}</style>


    <Background></Background>
    <div className='toolContainer'>
        <GridSwitcher></GridSwitcher>
        <SwitchButton></SwitchButton>
    </div>
    <div className='arianeContainer'></div>
    <main>
        {children}
    </main>
    </>)

}

export default Layout