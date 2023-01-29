
import { useState } from 'react'
import './tasks.css'


function Tasks() {
  const [tasks,setTasks] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.name;
    setTasks((prevtasks)=> [...prevtasks,input.value]);
    input.value = "";
  }
  return (
    <div className='tasks'>
      <h2>Tasks</h2>
      <div className="tasksWrapper">
        <div className="tasksview">
          <ul className='tasklist'>
            {tasks.map((name, index) => (
              <li className='taskitem' key={index}>
                <input type="checkbox" name="checkBox" className='check' />
                <div className="taskname">{name}</div>
                <i className="fa-regular fa-trash-can delete-task" ></i>
              </li>))}
          </ul>
        </div>
        <form className="bottom" onSubmit={handleSubmit}>
          <input type="text" name="name" id="task" placeholder='enter task' />
          <button className="submit" type='submit'>Add Task </button>
        </form>
      </div>
    </div>
  )
}

export default Tasks