
import './App.css'
import Side from './Components/Sidepanel/Side'
import Tasks from './Components/TaskList/Tasks'
import Myday from './Components/MyDay/Myday'
import { BrowserRouter as Route,Router } from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
      <Router>
        <Side/>
        <Route exact path="/"><Myday/></Route>
        <Route path="/tasks"><Tasks/></Route>
      </Router>
    </div>
  )
}

export default App
