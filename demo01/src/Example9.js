import React, { useState, useEffect, useCallback } from 'react';

function Example(){
    
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    })

    const onResize = useCallback( () => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        })
    }, [])

    useEffect( () => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    })

    return (
        <div>
            <p>{size.width}</p>
            <p>{size.height}</p>
        </div>
    );
}

export default Example;