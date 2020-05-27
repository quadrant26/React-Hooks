import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index (){
    useEffect( () => {
        console.log(`useEffect => Index`)
        return () => {
            console.log("Index 你离开了");
        }
    }, [])
    return <h2>Index</h2>
}

function List (){
    useEffect( () => {
        console.log(`useEffect => List`)
    })
    return <h2>List</h2>
}

function Example () {
    const [count, setCount] = useState(0)

    useEffect( () => {
        console.log(`useEffect => You cliced ${count} times`)
        return () => {
            console.log("=================")
        }
    }, [count])

    return (
        <div>
            <p>You click {count} times</p>
            <button onClick={ () => {setCount(count+1)}}>click me</button>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>

                <Route path="/" exact component={Index}></Route>
                <Route path="/list/" exact component={List}></Route>
            </Router>
        </div>
    );
}
 
export default Example;