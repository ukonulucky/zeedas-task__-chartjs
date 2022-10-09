import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import { GrCircleAlert } from "react-icons/gr"
import "../styles/card.css"
function Cards({ header, value1, value2,
    text1, text2,
    text3, text4,
    icon, icon__Text }) {
  return (
      <div className="card">
          <span>
              {header}
              <GrCircleAlert />

          </span>
          <div className="cards__container">
          <div className="cards__wrapper">
                  <div className="cards__content">
                      <h2>{value1}</h2> <small>{ text1}</small>
                  </div>
                  <span>{ text3 }</span>
              </div>
              {
                  value2 && text2 ? <div className="cards__wrapper">
                      <div className="cards__content">
                          <h2>{value2}</h2> <small>{text2}</small>
                      </div>
                      <span>{ text4 }</span>
                  </div> : ""
              }
          </div>
          
              {icon ? <div className="icon">
              <AiOutlineArrowUp />  <small>{icon__Text}</small>
        
          </div> : <div className={ "icon2"}>
                     <AiOutlineArrowDown /> <small>{icon__Text}</small>
              </div>
              } 
        
      </div>
  )
}

export default Cards