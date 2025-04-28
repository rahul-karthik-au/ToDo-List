import React, { createContext, useReducer } from 'react';

export const TaskContext = createContext(null);

export function TaskContextProvider({children}){
    function reducer(state,action){
        switch(action.type){
            case 'add':
                return [...state,{id:action.payload.id,title:action.payload.title,status:action.payload.status,priority:action.payload.priority}]
            default:
                return state;
        }
    }
    const [state,dispatch]=useReducer(reducer,[]);
    return (
        <TaskContext.Provider value={{state,dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}


