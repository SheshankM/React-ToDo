
import { useState } from 'react'
import { render } from 'react-dom';
import TaskItem from '../TaskItem/TaskItem';
import './tasks.css'


function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [inputvalue, setinputvalue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputvalue == '') return;
    setTasks((prevtasks) => [...prevtasks, inputvalue]);
    setinputvalue('');
  }
  const handleChange = (e) => {
    setinputvalue(e.target.value);
  }
  const handleDelete= (id) =>{
    const newtasks = tasks.filter((task)=>{ task.id !== id});

  }
  return (
    <div className='tasks'>
      <div className='h2'><div>Tasks</div></div>
      <div className="tasksWrapper">
        <div className="tasksview">
          <ul className='tasklist'>
            {tasks.map((task) => (
              <TaskItem name={task} key = {task} handDele = {handleDelete}/>
            ))}
          </ul>
        </div>
        <form className="bottom" onSubmit={handleSubmit}>
          <input type="text" name="taskname" id="task" placeholder='enter task' value={inputvalue} onChange={handleChange} />
          <button className="submit" type='submit'>Add Task </button>
        </form>
      </div>
    </div>
  )
}

export default Tasks