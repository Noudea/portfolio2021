import { useContext , useEffect } from "react";
import ThemeContext from "../../context/ThemeContext";
import ThemeColors from "../../theme/ThemeColors";

const ColorSwitcher = () => {
    const colors = ThemeColors.colors

    const {color,setColor} = useContext(ThemeContext)
    const mainColor = useContext(ThemeContext).color

    useEffect(() => {
        console.log("color",mainColor)
        console.log('orange',colors.orange)

        if(color == colors.orange) {
            console.log('ouiudsq')
        }
    },[])


    const setColorPink = () => {
        setColor(colors.pink)
        window.localStorage.setItem('mainColor',colors.pink)
    }

    const setColorDarkPink = () => {
        setColor(colors.darkPink)
        window.localStorage.setItem('mainColor',colors.darkPink)
    }

    const setColorPurple = () => {
        setColor(colors.purple)
        window.localStorage.setItem('mainColor',colors.purple)
    }

    const setColorDarkPurple = () => {
        setColor(colors.darkPurple)
        window.localStorage.setItem('mainColor',colors.darkPurple)
    }

    const setColorBlue = () => {
        setColor(colors.blue)
        window.localStorage.setItem('mainColor',colors.blue)
    }

    const setColorDarkBlue = () => {
        setColor(colors.darkBlue)
        window.localStorage.setItem('mainColor',colors.darkBlue)
    }

    const setColorGreen = () => {
        setColor(colors.green)
        window.localStorage.setItem('mainColor',colors.green)
    }

    const setColorYellow = () => {
        setColor(colors.yellow)
        window.localStorage.setItem('mainColor',colors.yellow)
    }

    const setColorRed = () => {
        setColor(colors.red)
        window.localStorage.setItem('mainColor',colors.red)
    }

    const setColorOrange = () => {
        setColor(colors.orange)
        window.localStorage.setItem('mainColor',colors.orange)
    }

  return (<>
    <p>Colors</p>
      <style jsx>{`

        .colorContainer {
            display:flex;
            justify-content:center;
            flex-wrap:wrap;
            max-width:70px;
        }

        .palette {
          width: 20px;
          height: 20px;
          border-radius: 3px;
          margin:5px;
          cursor : pointer;
          opacity : 0.5;
        }

        .purple {
          background-color: ${colors.purple};
          console.log(color)
        }
        .darkPurple {
            background-color: ${colors.darkPurple};  
            console.log(color)
        }
        .darkPink {
            background-color: ${colors.darkPink};   
        }
        .pink {
            background-color: ${colors.pink};   
        }
        .darkBlue {
            background-color: ${colors.darkBlue};   
        }
        .blue {
            background-color: ${colors.blue};   
        }
        .green {
            background-color: ${colors.green};   
        }
        .yellow {
            background-color: ${colors.yellow};   
        }
        .red {
            background-color: ${colors.red};   
        }
        .orange {
            background-color: ${colors.orange};   
        }

        .active {
            opacity : 1;
        }

      `}</style>
    <div className="colorContainer">
        <div onClick={setColorPink} className={color == colors.pink ? 'palette pink active' : 'palette pink'}></div>
        <div onClick={setColorDarkPink} className={color == colors.darkPink ? 'palette darkPink active' : 'palette darkPink'}></div>
        <div onClick={setColorPurple} className={color == colors.purple ? 'palette purple active' : 'palette purple'}></div>
        <div onClick={setColorDarkPurple} className={color == colors.darkPurple ? 'palette darkPurple active' : 'palette darkPurple'}></div>
        <div onClick={setColorBlue} className={color == colors.blue ? 'palette blue active' : 'palette blue'}></div>
        <div onClick={setColorDarkBlue} className={color == colors.darkBlue ? 'palette darkBlue active' : 'palette darkBlue'}></div>
        <div onClick={setColorGreen} className={color == colors.green ? 'palette green active' : 'palette green'}></div>
        <div onClick={setColorYellow} className={color == colors.yellow ? 'palette yellow active' : 'palette yellow'}></div>
        <div onClick={setColorRed} className={color == colors.red? 'palette red active' : 'palette red'}></div>
        <div onClick={setColorOrange} className={color == colors.orange ? 'palette orange active' : 'palette orange'}></div>
    </div>
  </>)
};

export default ColorSwitcher;
