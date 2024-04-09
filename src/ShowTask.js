function ShowTask(props){
    let todo=props.task;
    if(props.opt === "pending"){
        todo=todo.filter((t)=>t.isCompleted === false)
    }
    else if(props.opt === "completed"){
        todo=todo.filter((t)=>t.isCompleted === true)
    }
    console.log(todo)
    return (
        <div className="taskBox">
            {todo.map(t => <div className="taskBar" key={t.id}><p key={t.id}>{t.task}</p><div><button className="btn" onClick={()=>props.dispatch({type:"update", payload:{id:t.id}})} disabled={t.isCompleted}>completed</button><button className="btn" onClick={()=>props.dispatch({type:"delete", payload:{id:t.id}})}>remove</button></div></div>)}
        </div>
    )
}
export default ShowTask;
