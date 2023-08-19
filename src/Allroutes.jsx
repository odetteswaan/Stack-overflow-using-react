import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Auth from './pages/Auth'
import About from './About'
import Home from './pages/home/Home'
import Question from './pages/Questions/Question'
import AskQuestion from './pages/Questions/AskQuestion'
import Displayquestion from './pages/Questions/Displayquestion'

export default function Allroutes() {
  return (
    <div>
    <Routes>
    <Route path='/Auth' element={<Auth/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/Question' element={<Question/>}/>
    <Route path='/askquest' element={<AskQuestion/>}/>
    <Route path='/Question/:id' element={<Displayquestion/>}/>

  
    </Routes>
      
    </div>
  )
}
