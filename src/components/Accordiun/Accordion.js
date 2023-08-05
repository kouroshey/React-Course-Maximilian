import React, { useState } from 'react'
import './Accordion.css'
import AccordionItem from './AccordionItem'

const Accordiun = () => {
  const [questions, setQuestion] = useState([
    {
      id: 1,
      title: "Is this a good product?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
      id: 2,
      title: "How much does it cost?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
      id: 3,
      title: "When can I get it?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    }
  ])
  
  return (
    <>
      <div className="accr-wrapper">
        <div className="accr-ccontainer">
          <div className="accr-content">
            <h1 className="accr-heading">This is my accordion</h1>
            {questions.map(item => (
              <>
                <div className="accr-item">
                  <AccordionItem item={item} />
                </div>
              </>

            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default Accordiun