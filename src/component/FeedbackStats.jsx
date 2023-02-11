import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


const FeedbackStats = function(){
    const {feedback} = useContext(FeedbackContext);
    //Calculate Average Rating
    let total = 0;
    let avg = 0;

    for(var i = 0; i < feedback.length; i++){
        total += feedback[i].rating;
    }

    avg = (total / feedback.length).toFixed(1);

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(avg) ? 0 : avg}</h4>
        </div>
    )
}

export default FeedbackStats