import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'

const Line = (props) => {

    const theme = useContext(ThemeContext).theme

    return(<div className='line'>
        <style jsx>{`
            .line {
                width: 1px;
                height: 100%;
                background-color: ${theme.gridLines};
                transform: ${ props.active ? 'scale3d(1, 1, 1)' : 'scale3d(1, 0, 1)'};
                transition: transform 3s;
                transform-origin: top;
            }
            `}</style>
    </div>)
}

export default Line