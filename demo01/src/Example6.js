import React, { useReducer  } from 'react'

function Example () {
    const [count, dispatch] = useReducer( (state, action) => {
        switch(action){
            case 'add':
                return state+1;
            case 'sub':
                return state-1;
            default:
                return state
        }
    })

    return (
        <div>
           <h2>现在的分数是{count}</h2>
           <button onClick={()=>dispatch('add')}>Increment</button>
           <button onClick={()=>dispatch('sub')}>Decrement</button>
        </div>
    );
}
 
export default Example;