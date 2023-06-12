import React from 'react'
import {premiumnftsdata} from "./Premiumnftsdata"
import { useState } from 'react'

const Premiumnftsmap = () => {
    const [data, dataFunc] = useState(premiumnftsdata)
  return (
    <div className='freenftmap'>
        {
            data.map((e)=>{
                const {id,profile} = e
                return(
                        <div key={id} className='freenftindividual hovereffect'>
                            <img src={profile} alt='proflie'></img>
                        </div>
                )
            })
        }

    </div>
  )
}

export default Premiumnftsmap