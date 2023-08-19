import React from 'react'
import {Link } from 'react-router-dom'
const style={
    margin:'30px',
    textAlign:'center'
}
const s={
    textDecoration:'none',
}

export default function Question({question}) {
  return (
    <div className='display-question-container'>
    <div className='display-vote-ans' style={style} >
    <p>{question.votes}</p>
    <p>votes</p>
</div>
<div className='display-vote-ans' style={style}>
    <p>{question.noOfAnswer}</p>
    <p>answer</p>
</div>
<div className='display-vote-details'>
    <Link to={`/Question/${question.id}`} className='question-title-link' style={s}>{question.questionTitle}</Link>

<div className='display-tag-time'>
<div className='display-tags'>
{
    question.questionTags.map((tag)=>(
<p key={tag} style={{margin:'3px'}}>{tag}</p>
    ))
}
</div>
<p className='display-time' style={{left:'200px'}}>
asked {question.Time}  {question.userPosted}</p>
</div>
</div>
      
    </div>
  )
}
