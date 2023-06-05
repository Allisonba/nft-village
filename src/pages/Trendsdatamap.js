import React, { useState } from 'react'
import {trendsdata} from "./Trendsdata"
import Marquee from "react-fast-marquee"

const Trendsdatamap = () => {
    const[trendsData, trendsDataFunc] = useState(trendsdata)

  return (
    <Marquee direction="left" behavior="scroll" pauseOnHover= "true" speed="30" className='trnds'>
        {trendsData.map((e)=>{
            const {id,profilepic,name,title,ratings} = e;
            return(
                <div key={id} className='trendsbox'>
                    <img src={profilepic} alt='profile'/>
                    <div className='box'>
                      <h2>{name}</h2>
                      <h3>{title}</h3>
                      <div>{ratings}</div>
                    </div>
                </div>
            )
        })}
    </Marquee>
  )
}

export default Trendsdatamap