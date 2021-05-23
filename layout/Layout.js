import { useContext , useEffect } from 'react'

import Background from "../components/background/Background"
import ColorSwitcher from '../components/switcher/ColorSwitcher'
import GridSwitcher from "../components/switcher/GridSwitcher"
import SwitchButton from "../components/switcher/SwitchButton"
import ThemeContext from "../context/ThemeContext"

import AOS from "aos";

import "aos/dist/aos.css";


const Layout = ({children}) => {

    const themeColors = useContext(ThemeContext).theme
    const color = useContext(ThemeContext).color

        useEffect(() => {
            AOS.init({
            easing: "ease",
            once: false,
            duration : 800
            });
        }, []);


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

        
        @media screen and (min-width: 768px) {
            .toolContainer {
                padding: 30px;
            }
        }
        
        
        `}</style>

        <style jsx global>{`
            body {
                background-color:${themeColors.main};
                animation-name: fade;
                animation-duration: 2s;
                animation-fill-mode: forwards;
                transition-duration: 0.5s;
            }
            h1,h2,h3,p {
                color:${themeColors.inverted};
            }
            span {
                color:${color};
                transition-duration: 0.5s;
            }
        `}</style>


    <Background></Background>
    <div className='toolContainer'>
        <ColorSwitcher></ColorSwitcher>
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