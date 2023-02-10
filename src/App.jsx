
import './App.css'
import Side from './Components/Sidepanel/Side'
import Tasks from './Components/TaskList/Tasks'
import Myday from './Components/MyDay/Myday'
import { BrowserRouter as Router ,Route } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <Tasks/>
      <Side/>
      {/* <Router>
        <Side/>
        <Route path="/" component= {Myday}/>
        <Route path="/tasks" component = {Tasks} />
        </Router> */}
    </div>
  )
}

export default App
