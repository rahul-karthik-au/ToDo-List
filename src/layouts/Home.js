import { useState } from "react";
import AddTaskModal from "../components/AddTaskModal";
import TaskList from "../components/TaskList";

function Header(){
    const [showModal,setShowmodal]=useState(false)
    return (
        <>
         <h2 className='heading'>ToDo List</h2>
         <button onClick={()=>setShowmodal(true)}>Creat Task</button>
         {showModal && <AddTaskModal onClose={()=>setShowmodal(false)}/>}
         <TaskList />
        </>
       
    )
}
export default Header;