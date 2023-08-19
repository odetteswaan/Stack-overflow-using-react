import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../component/Avatar/Avatar'
//import QuestionDetails from './QuestionDetails'

export default function DisplayAnswer({ question }) {
  return (
    <div>
      {
        question.answer.map(ans => (
          <div className='display-ans' key={ans._id}>
            <p>{ans.answerBody}</p>
            <div className='question-action-user'>
              <button type='button' className='post-ans-btn'>Share</button>
              <button type='button' className='post-ans-btn'>Delete</button>
            </div>
            <div>
              <p>answered on  {ans.answered}</p>
            </div>
            <div>
            <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#00086d',textDecoration:'none'}}>
                      <div style={{marginLeft:'10px',marginRight:'10px',justifyContent:'space-around',display:'flex' }}>
                      <Avatar backgroundColor='green' px='10px' py='10px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                      </div>
                      <div style={{color:'#009dff',textDecoration:'none'}}>
                    {
                        ans.userAnswered

                      }
                      </div>
                      
                      </Link>
            </div>
            <hr/>
          </div>
        ))
      }
    </div>

  )
}
