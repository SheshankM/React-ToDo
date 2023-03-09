
import { useState } from 'react'
import TaskItem from '../TaskItem/TaskItem';
import './myday.css'
import CompTaskItem from '../CompTaskItem/CompTaskItem'


function Myday() {

  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
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
  const handleDelete = (id) => {
    const newTasks = tasks.filter((task, index) => (index !== id));
    setTasks(newTasks);
    const newcompletedTasks = completedTasks.filter((task,index) => (index != id));
    setCompletedTasks(newcompletedTasks);
  }
  const handleCheck = (id, isChecked) => {
    if (!isChecked) {
      const newCompTask = tasks.splice(id,1);
      setCompletedTasks([...completedTasks, newCompTask]);
      setTasks(tasks);
    }
    else {
      const newCompTask = completedTasks.splice(id,1);
      setTasks([...tasks, newCompTask]);
      setCompletedTasks(completedTasks);
    }

  }
  return (
    <div className='tasks'>
      <div className='h2'><div>MyDay</div></div>
      <div className="tasksWrapper">
        <div className="tasksview">
          <ul className='tasklist'>
            {tasks.map((task, index) => (
              <TaskItem key={index.toString()} id={index} name={task} handleDelete={handleDelete} handleCheck={handleCheck} />
            ))}
            {completedTasks.length > 0 &&
              (
                <div className='completed-tasks'>
                  <div className='completed'>Completed</div>
                  {completedTasks.map((task, index) => (
                    <CompTaskItem key={index.toString()} id={index} name={task} handleDelete={handleDelete} handleCheck={handleCheck} />
                  ))}
                </div>
              )
            }
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