import './side.css'
import { RiSunFill } from 'react-icons/ri';
import { IoMdStarOutline } from 'react-icons/io';
import { FaTasks, FaRegCalendarAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
function Side() {
  const linkStyles =({isActive})=>{
    return {
      textDecoration: 'none',
      backgroundColor: isActive?'#6a6a6a':'none'
    }
  } 
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <h2 className='heading'>Todo List</h2>
        <ul className='list-names'>
          <NavLink to='/' style={linkStyles}><li><RiSunFill className='icon' /><span>My Day</span></li></NavLink>
          <NavLink to='important' style={linkStyles}><li><IoMdStarOutline className='icon'/> Important</li></NavLink>
          <NavLink to='planned' style={linkStyles}><li><FaRegCalendarAlt className='icon'/>Planned</li></NavLink>
          <NavLink to='tasks' style={linkStyles}><li><FaTasks className='icon'/>Tasks</li></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Side