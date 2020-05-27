import React, { useState, useMemo  } from 'react'

function ChildComponent({name, children}){
    function changRed(name){
        console.log('red is coming')
        return name+', coming';
    }

    const actionRed = changRed(name);
    // const actionRed = useMemo( () => changRed(name), [name]);
    return (
        <>
            <div>{actionRed}</div>
            <div>{children}</div>
        </>
    )
}

function Example () {
    const [red, setRed] = useState('red waitting')
    const [blue, setBlue] = useState('blue waitting')

    return (
        <div>
           <button onClick={ () => {setRed(new Date().getTime())}}>red</button>
           <button onClick={ () => {setBlue(new Date().getTime() + ', blue coming')}}>blue</button>
            <ChildComponent name={red}>{blue}</ChildComponent>
        </div>
    );
}
 
export default Example;