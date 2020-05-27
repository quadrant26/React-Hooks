import React, { useState, useEffect } from 'react'
function Example () {
    

    return (
        <div>
            <p>You click {count} times</p>
            <button onClick={ () => {setCount(count+1)}}>click me</button>
        </div>
    );
}
 
export default Example;