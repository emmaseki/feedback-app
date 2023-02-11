import {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const[feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 7
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    }); 

    //Add feedback
    function addFeedback(newFeedback){
        //add generated id by uuid
        newFeedback.id = uuidv4();
        //use a spread operator to add newFeedback into an existing obj
        setFeedback([newFeedback, ...feedback]);
    }

    //Delete feedback
    function deleteFeedback(id){
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => {
                return item.id !== id
            }));
        }
    }

    //set item to be updated
    function editFeedback(item){
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //update feedback item
    function updateFeedback(id, updItem){
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }

    return  <FeedbackContext.Provider 
                value={{
                    feedback,
                    feedbackEdit,
                    deleteFeedback,
                    addFeedback,
                    editFeedback,
                    updateFeedback,          
                }}>
                {children}
            </FeedbackContext.Provider>
}

export default FeedbackContext;