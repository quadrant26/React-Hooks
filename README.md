# React-Hooks
React Hooks

## 创建项目

1. 初始化项目

    `create-react-app demo01`

2. 介绍

    useState是react自带的一个hook函数，它的作用是用来声明状态变量。

    ``` javascript
        import React, { useState } from 'react'

        function Example (){
            const [count, setCount] = useState(0);
            return (
                <div>
                    <p>You clicked {count} times</p>
                    <button onClick={ () => {
                        setCount(count+1)
                    }}>click me</button>
                </div>
            )
        }
    ```

3. 生命周期函数 useEffect

    引入

    `import React, { useState , useEffect } from 'react';`

    ``` javascript
        useEffect(()=>{
          console.log(`useEffect=>You clicked ${count} times`)
        })
    ```

    a. React首次渲染和之后的每次渲染都会调用一遍useEffect函数，而之前我们要用两个生命周期函数分别表示首次渲染(componentDidMonut)和更新导致的重新渲染(componentDidUpdate)。

    b. useEffect中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的，而componentDidMonut和componentDidUpdate中的代码都是同步执行的。

    componentWillUnmount

    ```javascript
        useEffect(()=>{
          console.log(`useEffect=>You clicked ${count} times`)
        }, [])

        useEffect( () => {
            console.log(`useEffect => You cliced ${count} times`)
            return () => {
                console.log("=================")
            }
        }, [count])

    ```


4. useContext

    ```javascript
        // 1. 引入 
        import React, { useState, createContext, useContext } from 'react'
        // 2. 创建组件
        const CountContext = createContext()
        // 4. 接收上下文对象
        function Counter(){
            const count = useContext(CountContext)  //一句话就可以得到count
            return (<h2>{count}</h2>)
        }

        // 3. 传值
        return (
            <div>
                // 传值
                <CountContext.Provider value={count}>
                </CountContext.Provider>
            </div>
        )
    ```

5. useReducer

    `useReducer( ()=>{}, args)`

    ```javascript
        // 引入reducer
        import React, { useReducer } from 'react';

        const [count, dispatch] = useReducer( (state, action) => {
            switch(action){
                case 'add':
                    return state+1;
                case 'sub':
                    return state-1;
                default:
                    return state
            }
        }， 0)

        return (
            <div>
            <h2>现在的分数是{count}</h2>
            <button onClick={()=>dispatch('add')}>Increment</button>
            <button onClick={()=>dispatch('sub')}>Decrement</button>
            </div>
        );
    ```

6. useMemo

    `const actionRed = useMemo( () => changRed(name), [name]);`

7. useRef

    ```javascript
        import React, { useRef, useState } from 'react';

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

                    <input type="text" value={text} onChange={ (e) => {setText(e.target.value)}}/>
                </div>
            );
        }
    ```