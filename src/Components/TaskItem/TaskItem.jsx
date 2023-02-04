import React from 'react'
import './taskitem.css'
function TaskItem({task,handleDelete}) {
  
 
  return (
    <li className='taskitem' id={task}>
    <input type="checkbox" name="checkBox" className='check'  />
    <div className="taskname">{task}</div>
    <i className="fa-regular fa-trash-can delete-task" onClick={()=>handleDelete(task)} ></i>
  </li>
  )
}

export default TaskItem