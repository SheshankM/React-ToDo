
import './App.css'
import Side from './Components/Sidepanel/Side'
import Tasks from './Components/TaskList/Tasks';
import Myday from './Components/MyDay/Myday'
import {Routes ,Route } from 'react-router-dom';
import Planned from './Components/Planned/Planned';
import Important from './Components/Important/Important';
import BgComp from './Components/BgComp/BgComp';
import { useRef } from 'react';
function App() {
  const container = useRef(0);
  const applyWallpaper = (id)=>{
    
    let wallId = Number(id)+1;
    container.current.style.backgroundImage = `url(src/Components/BgComp/images/wall${wallId}.png`;
    console.log(`wallpaper ${wallId}`)
  }
  return (
    <div className="App" ref={container}>
      <Side/>
      <Routes>
        <Route path="/" element= {<Myday/>}/>
        <Route path="tasks" element = {<Tasks/>} />
        <Route path="important" element = {<Important/>} />
        <Route path="planned" element = {<Planned/>} />
      </Routes>
      <BgComp  applyWallpaper = {applyWallpaper}/>
    </div>
  )
}

export default App
