import './side.css'
import { RiSunFill } from 'react-icons/ri';
import { IoMdStarOutline } from 'react-icons/io';
import { FaTasks, FaRegCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Side() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <h2 className='heading'>Todo List</h2>
        <ul>
          <Link to='/'><li><RiSunFill className='sun-icon' /><span>My Day</span></li></Link>
          <li><IoMdStarOutline /> Important</li>
          <li><FaRegCalendarAlt />Planned</li>
          <Link to='tasks'><li><FaTasks />Tasks</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Side