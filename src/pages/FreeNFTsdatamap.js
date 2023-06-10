import React, { useState } from 'react'
import {freeNFTsdata} from "./FreeNFTsdata"

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
                      <div>{ratings}</div>
                      <div className='download'>X</div>
                      </div>
                    </div>
                </div>

                
            )
        })}
    </div>
  )
}

export default Trendsdatamap