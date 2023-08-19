import React from 'react'
//import './AskQuestion.css'
import './ask.css'

export default function AskQuestion() {
  return (
    <div className='ask-question'>
    <div className='ask-ques-container'>
    <h1>Ask question</h1>
    <form>
    <div className='ask-form-container'>
    <label htmlFor='ask-ques-title'>
    <h4>Title</h4>
    <p>Be specific and imagine you are asking a question to another person</p>
    <input type='text' className='ask-question-title' placeholder='e.g. Is there an R function for finding the index of the vector'/>
    </label>
    <label htmlFor='ask-ques-body'>
    <h4>Body</h4>
    <p>Include all the Information someone who need to answer your question</p>
    <textarea className='ask-question-body'/>
    
    </label>
    <label htmlFor='ask-ques-tags'>
    <h4>Tags</h4>
    <p>Add upto 5 tags what you question is About </p>
    <input type='text' className='ask-question-tags' placeholder='e.g. XML typescript Wordpress' />
    </label>
    </div>
    <input type='submit' value='review your question' className='review-btn'/>
    </form>
    </div>
    
    </div>
  )
}
