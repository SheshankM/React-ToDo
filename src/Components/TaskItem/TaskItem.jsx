import React from 'react'
import './taskitem.css'
function TaskItem(props) {
  
  const handleDelete = ()=>{
    e.preventDefault();
    props.handleDelete({id});
  }
  return (
    
    <li className='taskitem' id={props.key}>
    <input type="checkbox" name="checkBox" className='check'  />
    <div className="taskname">{props.name}</div>
    <i className="fa-regular fa-trash-can delete-task" onClick={handleDelete} ></i>
  </li>
  )
}

export default TaskItem