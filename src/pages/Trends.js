import React from 'react'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Trends = () => {
  return (
    <section>
      <div className='trendsheader'>
        <FontAwesomeIcon icon={faFire} className='fire icon-container'/>
         <h1>POPULAR NFTS</h1>
      </div>

    </section>
  )
}

export default Trends