import React from 'react'
import Premiumnftsmap from './Premiumnftsmap'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const PremiumNFTS = () => {
  return (
    <div>
            <div className='trendsheader'>
        <div className='icon-container firecontainer'>
        <FontAwesomeIcon icon={faInfinity} className='fire '/>
         </div>
         <h1>PREMIUM NFTS</h1>
      </div>

      <Premiumnftsmap/>
      
      <div className="navbutt">
    <button className='butt'><Link to="/" className='linkk'>Check</Link> </button>
     </div>

    </div>
  )
}

export default PremiumNFTS