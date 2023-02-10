import React from 'react'
import PropTypes from 'prop-types'

const FeedbackStats = function({ feedback }){
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

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
};

export default FeedbackStats