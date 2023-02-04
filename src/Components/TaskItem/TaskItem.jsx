import React from 'react'
import './taskitem.css'
function TaskItem({id,name,handleDelete}) {
 
  return (
    <li className='taskitem' id={id}>
    <input type="checkbox" name="checkBox" className='check'  />
    <div className="taskname">{name}</div>
    <i className="fa-regular fa-trash-can delete-task" onClick={()=>(handleDelete(id))}></i>
  </li>
  )
}

export default TaskItem