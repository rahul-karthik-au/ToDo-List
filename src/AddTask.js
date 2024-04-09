import { useState,useReducer,useEffect } from "react";
import ShowTask from "./ShowTask";
let id=1;

function reducer(state,action){
    if(action.type ==="add"){
        return [...state,{id:id++,task:action.payload.task,isCompleted:false}]
    }
    else if(action.type === "update"){
        return state.map((t)=>{if (t.id === action.payload.id){
            return {...t,isCompleted:true}
        }
    return t})
    }
    else if( action.type === "delete"){
        return state.filter((t)=>t.id !== action.payload.id)
    }
    else{
        return state;
    }
}

function AddTask() {
    const LocalTodos = localStorage.getItem("todoList");
    const intialTask=(typeof (LocalTodos) === 'string') ?
    JSON.parse(LocalTodos) : [];
    const [opt,setOpt]=useState("all");

    const [state,dispatch]=useReducer(reducer,intialTask)

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(state));
      }, [state]);
    
    //console.log(state);

    return (
        <>
            <main>
                <input className="input-box" type="text" id="task"></input>
                <button className="btn" onClick={()=>{dispatch({type:"add",payload:{task:document.getElementById("task").value}})
                    document.getElementById("task").value=""}}>
                    add
                </button>
                <select id="opt" value={opt} onChange={(e) => { 
                    setOpt(e.target.value); }}>
                    <option>all</option>
                    <option>pending</option>
                    <option>completed</option>
                </select>
            </main>
        <   ShowTask task={state} opt={opt} dispatch={dispatch} />
        </>

    )
}


export default AddTask;
