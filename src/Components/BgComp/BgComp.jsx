import './bgcomp.css'
import { HiDotsVertical } from 'react-icons/hi'
import { useState } from 'react'
import wallpapers from '../Wallpapers/Wallpapers'

function BgComp({applyWallpaper}) {
  const [showWall, setShowWall] = useState(false);
  return (
    <div className='bgcomp'>
      <div className='icon' onClick={() => setShowWall(!showWall)}><HiDotsVertical /></div>
      
      {showWall && (
         <div className="bgWall-collection">
          {wallpapers.map((wallpaper, index) => (<img key={index} src={wallpaper.img} alt='img' className='bgWallpaper' onClick={()=>applyWallpaper(index)}/>))}
        </div>
      )}

    </div>
  )
}

export default BgComp