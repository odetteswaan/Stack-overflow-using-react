import React from 'react'
import {  useLocation ,useNavigate} from 'react-router-dom'
import Questionlist from './Questionlist';
import './Homemainbar.css'

export default function Homemainbar() {
    var questionlist = [{
            id: 1,
            votes: 3,
            noOfAnswer: 2,
            questionTitle: 'what is a Function',
            questionBody: ' it meant to be',
            questionTags: ['java', 'Nodejs', 'React js', 'Mongoose','Express js'],
            userPosted: 'Akash',
            Time: 'jan 1'
        },
        {
            id: 2,
            votes: 0,
            noOfAnswer: 0,
            questionTitle: 'What is a function',
            questionBody: 'It mean to be',
            questionTags: ['Javascript', 'python', 'R'],
            userPosted: 'Akash',
            Time: 'Jan 1'
        },
        {
            id: 3,
            votes: 1,
            noOfAnswer: 0,
            questionTitle: 'What is a function',
            questionBody: 'It mean to be',
            questionTags: ['Javascript', 'python', 'R'],
            userPosted: 'Akash',
            Time: 'jan 1'
        }
      ]
      const location=useLocation();
      const user=1;
      const navigate=useNavigate();
     
      const authen=()=>{
        if(user===null){
          alert("Login or signup to ask question")
        navigate("/Auth")
        }
        else{
          navigate('/askquest')
        }
        
      }
    return ( 
      
      <div className = 'main-bar' style={{margin:'60px'}} >
        <div className = 'main-bar-header' >
        {
          location.pathname==='/'?<h1>Top Question</h1>:<h1>All Question</h1>
        }
        <button  className = 'link' onClick={authen}>Ask Question</button>
        </div>
        <div>
        {
          questionlist==null?<h1>Loading</h1>:
          <>
          <p>{questionlist.length} Question</p>
          <Questionlist questionlist={questionlist}/>
          </>
        }
        </div>

        </div>
    )
}