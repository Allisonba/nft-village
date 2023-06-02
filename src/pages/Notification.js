import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimesCircle} from '@fortawesome/free-solid-svg-icons';


const Notification = () => {
  return (
    <div className="notificationContainer">
      <div className='notificationdropdown'>

      <div className="message">
      <FontAwesomeIcon icon={faCheck}/>
        <p>Congratulations, You Just Made A Purchase</p>

      </div>
      <div className="message">
        <FontAwesomeIcon icon={faTimesCircle}/>
        <p>Your Card Declined</p>

      </div>
      <div className="message">
        <p>Allison Is Cooking</p>

      </div>
      <div className="message">
        <p>Don't Miss The Lastest News From Us</p>

      </div>
      <div className="message">
        <p>Subscribe To Get More Updates Now, Click Here</p>
      </div>
      
    </div>
    </div>
  )
}

export default Notification