import './side.css'
import {RiSunFill} from 'react-icons/ri';
import {IoMdStarOutline} from 'react-icons/io';
import {FaTasks,FaRegCalendarAlt} from 'react-icons/fa';

function Side() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
          <h2 className='heading'>Todo List</h2>
          <ul>
            <li><RiSunFill className='sun-icon'/><span>My Day</span></li>
            <li><IoMdStarOutline/> Important</li>
            <li><FaRegCalendarAlt/>Planned</li>
            <li><FaTasks/>Tasks</li>
          </ul>
      </div>
    </div>
  )
}

export default Side