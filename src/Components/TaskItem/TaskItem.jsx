import React from 'react'
import './taskitem.css'
function TaskItem(props) {
  const key = props.id;
  const deleteTask =()=>{
    props.handleDelete(key);
  }
 
  return (
    <li className='taskitem' id={key}>
    <input type="checkbox" name="checkBox" className='check'  />
    <div className="taskname">{props.name}</div>
    <i className="fa-regular fa-trash-can delete-task" onClick={deleteTask}></i>
  </li>
  )
}

export default TaskItem