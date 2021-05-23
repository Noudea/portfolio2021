import {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext';



const GridSwitcher = () => {
    
    
    const {grid,setGrid} = useContext(ThemeContext);
    const themeColors = useContext(ThemeContext).theme

    const setGridOnClick = () => {
        setGrid(true)
        console.log(themeColors)
    }

    const unSetGrid = () => {
        setGrid(false)
    }
    
    return(
        <>
        <style jsx>{`
            svg {
                cursor:pointer;
            }

            .switchContainer {
                display:flex;
                flex-direction: column;
            }
            @media screen and (min-width: 768px) {
            .switchContainer {
                flex-direction:row;
            }
        }
            
            `}</style>
            <p>GRID</p>
            <div className='switchContainer'>
                {/* <img onClick={setGridOnClick} src='/svg/columns.svg'></img>
                <img onClick={unSetGrid} src='/svg/square.svg'></img> */}
                <svg onClick={setGridOnClick}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={themeColors.inverted} strokeWidth="2" strokeLinecap ="round" strokeLinejoin ="round" className="feather feather-columns"><path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path></svg>
                <svg onClick={unSetGrid} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={themeColors.inverted} strokeWidth="2" strokeLinecap ="round" strokeLinejoin ="round" className="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
            </div>
        </>
    )
}


export default GridSwitcher