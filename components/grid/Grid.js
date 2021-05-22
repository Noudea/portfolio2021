import { useState , useContext, useEffect } from 'react'
import ThemeContext from '../../context/ThemeContext'
import Line from "./Line"

const Grid = () => {


    const grid = useContext(ThemeContext).grid

    // useEffect(() => {

    // }, [grid])


    return(<div className='gridContainer'>
            <style jsx>{`
                .gridContainer {
                    position: fixed;
                    z-index: -1;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    width: 80vw;
                    height: 100vh;
                }

                `}</style>
            <Line active={true}/>
            <Line active={grid}/>
            <Line active={grid}/>
            <Line active={grid}/>
            <Line active={grid}/>
            <Line active={grid}/>
            <Line active={true}/>
    </div>)
}

export default Grid