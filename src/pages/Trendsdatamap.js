import React, { useState } from 'react'
import {trendsdata} from "./Trendsdata"
import { faArrowDown, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Marquee from "react-fast-marquee"

const Trendsdatamap = () => {
    const[trendsData, trendsDataFunc] = useState(trendsdata)

  return (
    // <Marquee direction="left" behavior="scroll" pauseOnHover= "true" speed="30">

    <div className='trendsdatamap'>
        {trendsData.map((e)=>{
            const {id,profilepic,name,title,ratings} = e;
            return(
                <div key={id} className='individual'>
                   <img src={profilepic} alt='profile'/>
                    <div className='imageoverlay'>
                      <h2>{name}</h2>
                      <h3>{title}</h3>
                      <div className='ratings'>
                      <div className='ratingcont'><FontAwesomeIcon icon={faStar} className='fastar'></FontAwesomeIcon>{ratings}</div>
                      <div className='ratingsdownload'><FontAwesomeIcon icon={faArrowDown} className='fadown'></FontAwesomeIcon></div>
                      </div>
                    </div>
                </div>

                
            )
        })}
    </div>
    // </Marquee>
  )
}

export default Trendsdatamap