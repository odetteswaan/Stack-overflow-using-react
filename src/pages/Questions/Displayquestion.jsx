import React from 'react'
import Leftsidebar from '../../component/sidebar/Leftsidebar'
import Rightsidebar from '../../component/sidebar/Rightsidebar'
import QuestionDetails from './QuestionDetails'
export default function Displayquestion() {
  return (
    <div className='home-container-1'>
    <Leftsidebar/>
    <div className='home-container-2'>
    <QuestionDetails/>
    <Rightsidebar />
    </div>
      
    </div>
  )
}
