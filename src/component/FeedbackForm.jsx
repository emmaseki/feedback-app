import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({handleAdd}) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = function(e){
    if(text === ''){
      setBtnDisabled(true);
      setMessage('');
    }else if(text !== '' && text.trim().length <= 10){
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters.');
    }else{
      setBtnDisabled(false);
      setMessage('');
    } 

    setText(e.target.value);
  }

  const handleRating = function(rating){
    setRating(rating);
    console.log(rating);
  }

  const handleSubmit = function(e){
    e.preventDefault();
    if(text.trim().length > 10){
      const newFeedback = {
        text: text,
        rating: rating
      }

      handleAdd(newFeedback);
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={handleRating}/>
        <div className="input-group">
          <input type="text" 
                 placeholder='Write a review' 
                 onChange={handleTextChange}
                 value={text}/>
          <Button type='submit' version='secondary' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm