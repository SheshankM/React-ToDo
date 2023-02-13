
import './App.css'
import Side from './Components/Sidepanel/Side'
import Tasks from './Components/TaskList/Tasks';
import Myday from './Components/MyDay/Myday'
import {Routes ,Route } from 'react-router-dom';
import Planned from './Components/Planned/Planned';
import Important from './Components/Important/Important';
function App() {
  
  return (
    <div className="App">
      <Side/>
      <Routes>
        <Route path="/" element= {<Myday/>}/>
        <Route path="tasks" element = {<Tasks/>} />
        <Route path="important" element = {<Important/>} />
        <Route path="planned" element = {<Planned/>} />
      </Routes>
    </div>
  )
}

export default App
