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
                    position: absolute;
                    z-index: -1;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    width: calc(100% - (150px * 2));
                    height: 100%;
                    left: 150px;
                }

                `}</style>
            <Line active={grid}/>
            <Line active={grid}/>
            <Line active={grid}/>
            <Line active={grid}/>
            <Line active={grid}/>
    </div>)
}

export default Grid