import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskList() {
    const {state}=useContext(TaskContext)
  return (
    <>
    <div>
        {state.map(task=><div key={task.id}><p>{task.title}</p><p>{task.status}</p><p>{task.priority}</p></div>)}
    </div>
    </>
  )
}

export default TaskList