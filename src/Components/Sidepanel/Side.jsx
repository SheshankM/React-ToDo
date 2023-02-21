import './side.css'
import { RiSunFill } from 'react-icons/ri';
import { IoMdStarOutline } from 'react-icons/io';
import { FaTasks, FaRegCalendarAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
function Side() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <h2 className='heading'>Todo List</h2>
        <ul className='list-names'>
          <NavLink to='/' className={(t)=>t.isActive?'active':''}><li><RiSunFill className='icon' /><span>My Day</span></li></NavLink>
          <NavLink to='important' className={(t)=>t.isActive?'active':''}><li><IoMdStarOutline className='icon star'/> Important</li></NavLink>
          <NavLink to='planned' className={(t)=>t.isActive?'active':''}><li><FaRegCalendarAlt className='icon'/>Planned</li></NavLink>
          <NavLink to='tasks' className={(t)=>t.isActive?'active':''}><li><FaTasks className='icon'/>Tasks</li></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Side