
import './App.css'
import Side from './Components/Sidepanel/Side'
import Tasks from './Components/TaskList/Tasks';
// import Planned from './Components/Planned/Planned';
import Myday from './Components/MyDay/Myday'
import {Routes ,Route } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <Side/>
      <Routes>
        <Route path="/" element= {<Myday/>}/>
        <Route path="tasks" element = {<Tasks/>} />
      </Routes>
    </div>
  )
}

export default App
