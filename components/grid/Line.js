const Line = (props) => {
    return(<div className='line'>
        <style jsx>{`
            .line {
                width: 1px;
                height: 100%;
                background: black;
                transform: ${ props.active ? 'scale3d(1, 1, 1)' : 'scale3d(1, 0, 1)'};
                transition: transform 2s;
                transform-origin: top;
            }
            `}</style>
    </div>)
}

export default Line