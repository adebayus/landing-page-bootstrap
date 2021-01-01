import React from 'react'
import { createContext, useReducer } from 'react';

const initialState = {
    isShow : true,
    isClicked : false,
    newsPanel : false,
    closed : false,
}

console.log(initialState)

let Reducer = (state,action) => {
    switch (action.type) {
        case "close":
            console.log("inside")
            return{
                ...state,
                isShow : false,
                isClicked : true,
            }
        case "showpanel":
            console.log("inside showPanel")
            return{
                ...state,
                newsPanel : true
            }
        case "closepanel":
            console.log("closePanel")
            return{
                ...state,
                closed : true
            }
        default:
            return{
                ...state
            }
    }
}
const stateContext = createContext(initialState)

function StateProvider(props) {
    const [state, dispatch] = useReducer(Reducer, initialState)
    return(
        <stateContext.Provider value={{state, dispatch}} >
            {props.children}
        </stateContext.Provider >
    )
}

export {stateContext, StateProvider }
