import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md"


const AccordionItem = ({ item }) => {
    const [isAnswerShown, setIsAnswerShown] = useState(false)

    const answerShowHandler = (e) => {
        setIsAnswerShown(prevValue => prevValue = !prevValue)
    }
    
    return (
        <>
            <div className="accr-item-top">
                <div className="accr-item-top-left">
                    <span className='accr-id'>{item.id}</span>
                    <p className="accr-question">{item.title}</p>
                </div>
                <MdOutlineKeyboardArrowDown className='icon' onClick={e => answerShowHandler(e)} />
            </div>
            <div className="accr-item-bottom">
                <div className="accr-response">
                    <p>{isAnswerShown ? item.info : ''}</p>
                </div>
            </div>
        </>
    )
}

export default AccordionItem