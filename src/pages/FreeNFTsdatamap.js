import React, { useState } from 'react'
import {freeNFTsdata} from "./FreeNFTsdata"
import { faArrowDown, faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Trendsdatamap = () => {
    const[freetrendsData, freetrendsDataFunc] = useState(freeNFTsdata)

  return (

    <div className='freenftmap'>
        {freetrendsData.map((e)=>{
            const {id,profilepic,name,title,ratings} = e;
            return(
                <div key={id} className='freenftindividual'>
                   <img src={profilepic} alt='profile'/>
                    <div className='imageoverlay overlay2'>
                      <h2>{name}</h2>
                      <h3>{title}</h3>
                      <div className='ratings'>
                      <div className="ratingcont"><FontAwesomeIcon icon={faStar} className='fastar'></FontAwesomeIcon>{ratings}</div>
                      <div className='ratingsdownload'><FontAwesomeIcon icon={faArrowDown} className='fadown'></FontAwesomeIcon></div>
                      </div>
                    </div>
                </div>

                
            )
        })}
    </div>
  )
}

export default Trendsdatamap