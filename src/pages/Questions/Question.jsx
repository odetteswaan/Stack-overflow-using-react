import React from 'react'
import Leftsidebar from '../../component/sidebar/Leftsidebar'
import Rightsidebar from '../../component/sidebar/Rightsidebar'
import Homemainbar from '../../component/sidebar/Homemainbar'
export default function Question() {
  return (
    <div className='home-container-1'>
    <Leftsidebar/>
    <div className='home-container-2'>
    <Homemainbar/>
    <Rightsidebar />
    </div>
      
    </div>
  )
}