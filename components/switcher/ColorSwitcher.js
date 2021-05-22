import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import ThemeColors from "../../theme/ThemeColors";

const ColorSwitcher = () => {
    const colors = ThemeColors.colors

  return (
    <div className="colorContainer">
      <style jsx>{`

        .colorContainer {
            display:flex;
            justify-content:center;
            flex-wrap:wrap;
            width:5vw;
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
        }
        .darkPurple {
            background-color: ${colors.darkPurple};  
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


      `}</style>
      <div className="palette pink"></div>
      <div className="palette darkPink"></div>
      <div className="palette purple"></div>
      <div className="palette darkPurple"></div>
      <div className="palette blue"></div>
      <div className="palette darkBlue"></div>
      <div className="palette green"></div>
      <div className="palette yellow"></div>
      <div className="palette red"></div>
      <div className="palette orange"></div>
    </div>
  );
};

export default ColorSwitcher;
