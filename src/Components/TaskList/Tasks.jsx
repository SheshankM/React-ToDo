
// import { useReducer } from 'react'
import './tasks.css'


// const initialState = [];
// const reducer = (state,action)=>{
//   switch(action){
//     case 'addTask':
//     case 'deleteTask':
//   }
// }
function Tasks() {

  // const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <div className='tasks'>
      <h2>Tasks</h2>
      <div className="tasksWrapper">
        <div className="tasksview">
        <ul>  
          <li>task 1</li>
          <li>task 2</li>
          <li>task 3</li>
        </ul>
        </div>
        <div className="bottom">
          <input type="text" name="taskname" id="task" placeholder='enter task'/>
          <button className="submit">Add Task</button>
        </div> 
      </div>
    </div>
  )
}

export default Tasks