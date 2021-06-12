import { useContext , useState , useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import ThemeContext from "../../context/ThemeContext";
import ThemeColors from "../../theme/ThemeColors";

const ColorSwitcherV2 = () => {

        const colors = ThemeColors.colors
        const {color,setColor} = useContext(ThemeContext)
        const [pickedColor,setPickedColor] = useState(color.red)

        const pickColor = (event) => {
            setColor(event)
            window.localStorage.setItem('mainColor',event)
        }

    return(<div className='colorSwitcherContainer'>
        <style jsx>{`
            :global(.react-colorful) {
                width:50px !important;
            }
            `}</style>
            <div className='react-colorful'></div>
    <HexColorPicker color={color} onChange={pickColor} />
    </div>)
}

export default ColorSwitcherV2