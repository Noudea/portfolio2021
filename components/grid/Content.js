const Content = () => {
    return(
        <>
            <style jsx>{`
                .container {
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
        </>
    )
}

export default Content