import React from 'react'
import Question from './Question'

export default function Questionlist({questionlist}) {
  return (
    <>
    {
      questionlist.map((question) =>(
        <Question question={question} key={question.id}/>
      ))
    }
    </>
  )
}
