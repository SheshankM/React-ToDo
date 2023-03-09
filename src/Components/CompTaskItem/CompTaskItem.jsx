import React from 'react'
import { useState } from 'react';
import './comptaskitem.css'
function TaskItem({id,name,handleDelete,handleCheck}) {
  const [isChecked, setisChecked] = useState(true);
  const handleChange = () =>{
    setisChecked(!isChecked);
    handleCheck(id,isChecked);
  }
  return (
    <li className='taskitem' id={id}>
    <input type="checkbox" name="checkBox" className='check' checked={isChecked} onChange={handleChange} />
    <div className="taskname">{name}</div>
    <i className="fa-regular fa-trash-can delete-task" onClick={()=>(handleDelete(id))}></i>
  </li>
  )
}

export default TaskItem;