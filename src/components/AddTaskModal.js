import React, { useContext, useState } from 'react'
import {v4 as uuid} from 'uuid'
import { TaskContext } from '../context/TaskContext'

function AddTaskModal({onClose}) {
  const {state,dispatch}=useContext(TaskContext);
  console.log(state)
  const [title,setTitle]=useState("")
  const [status,setStatus]=useState("Not Started")
  const [priority,setPriority]=useState("None")
  function handleClick(){
    onClose()
    dispatch({type:'add',payload:{id:uuid(),title:title,status:status,priority:priority}})
  }
  return (<>
            <div className='task-modal'>
              <div className='modal'>
                <div className='modal-header'>
                  <div className='modal-heading'>Create Task</div>
                  <button className='modal-btn' onClick={onClose}> X</button>
                </div>
                <input type='text' id='task-title' placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Status:</label>
                <select id="task-status" value={status} onChange={(e) => {setStatus(e.target.value); }}>
                    <option>Not Started</option>
                    <option>In Process</option>
                    <option>Completed</option>
                </select>
                <label>Priority</label>
                <select id="task-priority" value={priority} onChange={(e) => {setPriority(e.target.value); }}>
                    <option>None</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Urgent</option>
                </select>
                <button onClick={()=>handleClick()}> Create</button>
              </div>
            </div>   
          </>
  )
}

export default AddTaskModal;