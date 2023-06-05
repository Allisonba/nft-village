import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faDownload, faBell} from '@fortawesome/free-solid-svg-icons';
import Notification from '../pages/Notification';
import a1 from "../a1.jpg"


const Navbar = () => {
  const [clicked, clickedFunc] = useState(false)
  const[secClicked, secClickedFunc] = useState(false)

  function clickedHandle(){
  return  clickedFunc(!clicked)
  }
  function secclickedHandle(){
  return  secClickedFunc(!secClicked)
  }

  return (
    <nav className='navbar'>
      <div>
       <NavLink to="/"  className='logo'> NFT <span>VILLAGE</span></NavLink>
      </div>
      
      <div className='icons'>

      <div className='icon-container'>
      <FontAwesomeIcon icon={faBell} className='icon bell' onClick={secclickedHandle}/><span className="bell-circle"></span>
      </div>


      <div className='icon-container'>
      <FontAwesomeIcon icon={faDownload} className='icon' />
      </div>


      <div className='icon-container bars'>
      <FontAwesomeIcon icon={clicked ? faTimes : faBars} className='icon' onClick={clickedHandle}/>
      </div>

      </div>

       <div className={`items ${secClicked && "active" }`}>
         <Notification/>
      </div>


      <div className={`items ${clicked && "active" }`}>
        <div className=' unordered'>
        <img src={a1} alt="sword"/>
        <ul className='unorderedlist'>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/trends">Trends</NavLink>
          </li>
          <li>
            <NavLink to="/freenft">Free NFTs</NavLink>
          </li>
          <li>
            <NavLink to="/premiumnft">Premium NFTs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
       </ul>
       </div>

      </div>


  
    </nav>
  )
}

export default Navbar