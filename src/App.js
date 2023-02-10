import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";


function App(){
    const [feedback, setFeedback] = useState(FeedbackData);

    function deleteFeedback(id){
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => {
                return item.id !== id
            }));
        }
    }

    function addFeedback(newFeedback){
        //add generated id by uuid
        newFeedback.id = uuidv4();
        //use a spread operator to add newFeedback into an existing obj
        setFeedback([newFeedback, ...feedback]);
    }

    return (
        <>
            <Header text="Feedback UI"/>
            <div className="container">
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList 
                    feedback={feedback}
                    handleDelete={deleteFeedback}   
                />
            </div>
        </>
    )
}

export default App;