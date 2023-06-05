import React from 'react'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Trendsdatamap from './Trendsdatamap'

const Trends = () => {
  return (
    <section>
      <div className='trendsheader'>
        <div className='icon-container firecontainer'>
        <FontAwesomeIcon icon={faFire} className='fire '/>
         </div>
         <h1>POPULAR NFTS</h1>
      </div>

      <Trendsdatamap/>

    </section>
  )
}

export default Trends