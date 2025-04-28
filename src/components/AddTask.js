import { useContext, useState } from "react";
import ShowTask from "../ShowTask";
import AddTaskModal from "./AddTaskModal";
import  { TaskContext } from "../context/TaskContext";
// let id=1;

// function reducer(state,action){
//     if(action.type ==="add"){
//         return [...state,{id:id++,task:action.payload.task,isCompleted:false}]
//     }
//     else if(action.type === "update"){
//         return state.map((t)=>{if (t.id === action.payload.id){
//             return {...t,isCompleted:true}
//         }
//     return t})
//     }
//     else if( action.type === "delete"){
//         return state.filter((t)=>t.id !== action.payload.id)
//     }
//     else{
//         return state;
//     }
// }

function AddTask() {
    // const LocalTodos = localStorage.getItem("todoList");
    // const intialTask=(typeof (LocalTodos) === 'string') ?
    // JSON.parse(LocalTodos) : [];
    const [opt,setOpt]=useState("all");

    // const [state,dispatch]=useReducer(reducer,intialTask)

    // useEffect(() => {
    //     localStorage.setItem("todoList", JSON.stringify(state));
    //   }, [state]);
    const {state,dispatch}=useContext(TaskContext);
    console.log(state.task);
    const [showModal,setShowmodal]=useState(false);
    function handleModel(){
        console.log(showModal)
        setShowmodal(!showModal)
        console.log(showModal)
    }

    return (
        <>
        <div className={`${showModal ? "blurred":""}`}>
        <main>
                <input className="input-box" type="text" id="task"></input>
                <button className="btn" onClick={()=>{handleModel()}}>
                    add
                </button>
                {showModal && <AddTaskModal  onClose={()=>handleModel()}/>}
                <select id="opt" value={opt} onChange={(e) => { 
                    setOpt(e.target.value); }}>
                    <option>all</option>
                    <option>pending</option>
                    <option>completed</option>
                </select>
            </main>
            <ShowTask />
        </div>
            
        </>

    )
}


export default AddTask;
