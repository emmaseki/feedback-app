import React from 'react'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'

const FeedbackList = function({ feedback, handleDelete }){
    if(feedback.length === 0){
        return <p>No feedback Yet.</p>
    }

    //version without animation
    // return (
    //     <div className='feedback-list'>
    //         {feedback.map((item) => {
    //             return <FeedbackItem key={item.id} item={item} 
    //                         handleDelete = {handleDelete}/>
    //         })}
    //     </div>
    // )

    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                            <motion.div 
                                key={item.id}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity:0}}
                            >
                                    <FeedbackItem key={item.id} 
                                        item={item} 
                                        handleDelete = {handleDelete}/>
                            </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackList