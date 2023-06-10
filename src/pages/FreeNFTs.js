import React from 'react'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FreeNFTsdatamap from "./FreeNFTsdatamap"

const FreeNFTs = () => {
  return (
    <section>
            <div className='trendsheader'>
        <div className='icon-container firecontainer'>
        <FontAwesomeIcon icon={faInfinity} className='fire '/>
         </div>
         <h1>FREE NFTS</h1>
      </div>

      <FreeNFTsdatamap/>


    </section>
  )
}

export default FreeNFTs