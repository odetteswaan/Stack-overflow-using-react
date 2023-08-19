import React from 'react'
import { useParams,Link } from 'react-router-dom'
import arrowup from '../../assesst/arrow-up.png'
import arrowdown from '../../assesst/arrow-down.png'
import './Question.css'
import Avatar from '../../component/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
export default function QuestionDetails() {
  const { id } = useParams();
  var questionlist = [{
    _id: '1',
    upvotes: 3,
    downvotes:0,
    noOfAnswer: 2,
    questionTitle: 'what is a Function',
    questionBody: ' it meant to be',
    questionTags: ['java', 'Nodejs', 'React js', 'Mongoose', 'Express js'],
    userPosted: 'Akash',
    Time: 'jan 1',
    answer:[{
      answerBody:'Answer',
      userAnswered:'Rathour',
      answered:'2 jan',
      UserId:2
    }]
  },
  {
    _id: '2',
    upvotes: 3,
    downvotes:0,
    noOfAnswer: 0,
    questionTitle: 'What is a function',
    questionBody: 'It mean to be',
    questionTags: ['Javascript', 'python', 'R'],
    userPosted: 'Akash',
    Time: 'Jan 1',
    answer:[{
      answerBody:'Answer',
      userAnswered:'Rathour',
      answered:'3 jan',
      UserId:3
    }]
  },
  {
    _id: '3',
    upvotes: 3,
    downvotes:0,
    noOfAnswer: 0,
    questionTitle: 'What is a function',
    questionBody: 'It mean to be',
    questionTags: ['Javascript', 'python', 'R'],
    userPosted: 'Akash',
    Time: 'jan 1',
    answer:[{
      answerBody:'Answer',
      userAnswered:'Rathour',
      answered:'4 jan',
      UserId:4
    }]
  }
  ]
  return (
    <div className='question-details-page' >
      {
        questionlist === null ?
          <h1>Loading....</h1> :
          <>
            {
              questionlist.filter(question => question._id === id).map(question => (
                <div key={question._id}>
                  <section className='question-details-container' style={{marginTop:'100px'}} >
                    <h1 style={{marginTop:'8px'}}>{question.questionTitle}</h1><br/>
                    <div className='question-details-container-2' style={{margin:'0px'}}><br/><br/>
                    <h3>{question.questionBody}</h3>
                    <br/>
                      <div className='question-votes' style={{marginLeft:'0%',float:'left'}}>
                      <img src={arrowup}  alt="" width='18' className='vote-icon'/>
                      <h1>{question.upvotes-question.downvotes}</h1>
                      <img src={arrowdown} alt="" width='18' className='vote-icon'/>
                      </div>
                      <div style={{width:'100%'}}>
                      
                      <div className='question-details-tags'>
                      {
                        question.questionTags.map(tags =>(
                          <p key={tags}>{tags}</p>
                        ))
                      }
                      </div>
                      <div>
                      <button type='button' className='post-ans-btn'>Share</button>
                      <button type='button' className='post-ans-btn'>Delete</button>
                      <p>{question.Time}</p>
                      <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#00086d',textDecoration:'none'}}>
                      <div style={{marginLeft:'10px',marginRight:'10px',justifyContent:'space-around',display:'flex' ,float:'right'}}>
                      <Avatar backgroundColor='orange' px='10px' py='10px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                      </div>
                      <div style={{color:'#009dff',textDecoration:'none'}}>
                      {
                        question.userPosted
                      }
                      </div>
                      
                      </Link>

                      </div>
                      </div>
                    </div>
                  </section>
                  {
                    question.noOfAnswer!==0 && (
                      <section>
                      <h3>{question.noOfAnswer} Answer</h3>
                      <DisplayAnswer key={question._id} question={question}/>
                      </section>
                    )
                  }
                  <section className='post-ans-container'>
                  <h3>Your Answer</h3>
                  <form>
                  <textarea name="" id="" cols="100" rows="10"></textarea><br/>
                  <input type="submit" className='post-ans-btn' value="Post your answer"/><br/>
                  </form>
                  <p>
                  Browse other question tagged
                  {
                    question.questionTags.map(tag=>(
                      <Link to='/Tags' key={tag} className='ans-tags' style={{color:'#39739d',textDecoration:'none'}}>   {tag}    </Link>
                    )) 
                    
                  } or 
                  <Link to='/askquest' style={{textDecoration:'none',color:'#009dff'}}>   ask your own Question</Link>
                  </p>
                  </section>
                </div>
              ))
            }
          </>


      }
    </div>


  )

}