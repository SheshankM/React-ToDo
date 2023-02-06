
import { useState } from 'react'
import TaskItem from '../TaskItem/TaskItem';
import './myday.css'


function Myday() {
  
  const [tasks, setTasks] = useState([]);
  const [inputvalue, setinputvalue] = useState('');
  const handleChange = (e) => {
    setinputvalue(e.target.value);
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputvalue == '') return;
    setTasks((prevtasks) => [...prevtasks, inputvalue]);
    setinputvalue('');
  }
  const handleDelete= (id) =>{
    const newTasks = tasks.filter((task,index)=>( index !== id));
    setTasks(newTasks);
  }
  return (
    <div className='tasks'>
      <div className='h2'><div>Tasks</div></div>
      <div className="tasksWrapper">
        <div className="tasksview">
          <ul className='tasklist'>
            {tasks.map((task,index) => (
              <TaskItem key={index.toString()} id={index} name= {task} handleDelete = {handleDelete}/>
            ))}
          </ul>
        </div>
        <form className="bottom" onSubmit={handleSubmit}>
          <input type="text" name="taskname" id="task" placeholder='Add task in list My Day' value={inputvalue} onChange={handleChange} />
          <button className="submit" type='submit'>Add Task</button>
        </form>
      </div>
    </div>
  )
}

export default Myday