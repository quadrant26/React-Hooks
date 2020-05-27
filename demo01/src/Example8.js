import React, { useState, useRef } from 'react';

function Example(){
    const inputEl = useRef(null)
    const onButtonClick = () => {
        inputEl.current.value = "Hello, World";
        console.log(inputEl)
    }

    const [text, setText] = useState('hello');

    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>在input上展示文字</button>
            <br />
            <br />
            <input type="text" value={text} onChange={ (e) => {setText(e.target.value)}}/>
        </div>
    );
}

export default Example;