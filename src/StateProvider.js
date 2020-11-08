import React, {  createContext, useContext , useReducer} from 'react';

export const context = createContext();

export const StateProvider = ({children, initialState , reducer}) =>(
    <context.Provider value = {useReducer(reducer , initialState)}>
        {children}
    </context.Provider>
)

export const StateValue = () => useContext(context);