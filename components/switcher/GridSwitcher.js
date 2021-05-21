import {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext';



const GridSwitcher = () => {
    
    
    const {grid,setGrid} = useContext(ThemeContext);
    const {colors,setColors} = useContext(ThemeContext);

    const setGridOnClick = () => {
        setGrid(true)
    }

    const unSetGrid = () => {
        setGrid(false)
    }
    
    return(
        <>
        <style jsx>{`
            img {
                cursor:pointer;
            }

            .switchContainer {
                display:flex;
            }
            
            `}</style>
            <p>GRID</p>
            <div className='switchContainer'>
                <img onClick={setGridOnClick} src='/svg/columns.svg'></img>
                <img onClick={unSetGrid} src='/svg/square.svg'></img>
            </div>
        </>
    )
}


export default GridSwitcher