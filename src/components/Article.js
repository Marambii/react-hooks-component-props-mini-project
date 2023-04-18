import React from 'react'

function Article(props) {
    let coffeeCups = '';
    let bentoBoxes = '';

     // Determine number of coffee cups or bento boxes to display
  if (props.minutes < 30) {
    for (let i = 0; i < Math.ceil(props.minutes / 5); i++) {
      coffeeCups += '☕️';
    }
  } else {
    for (let i = 0; i < Math.ceil(props.minutes / 10); i++) {
      bentoBoxes += '🍱';
    }
  }
  return (
    <div>
        <article>
            <h3>{props.title}</h3>
            <small>{props.date || 'January 1,1970'}</small>
            <p>{props.preview}</p>
            <p>{coffeeCups || bentoBoxes}{props.minutes} min read</p>

        </article>
    </div>
  )
}

export default Article