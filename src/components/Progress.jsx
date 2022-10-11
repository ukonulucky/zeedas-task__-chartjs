import React from 'react'
import { GrCircleAlert } from 'react-icons/gr'
import "../styles/Progress.css"

function Progress() {
    
    const progressArray = [{
        id: 1, 
        n1 : 25
    }, 
   {
   id: 2,
   n1: 15
        },
   {
    id: 3,
    n1:40 
        },
   {
            id: 4,
            n1:20
   }
    
    ]
    const progressEle = progressArray.map(i => {
        return (
            <span key={ i.id } style={{
                width: `${i.n1 * 4.5}px`
            }}></span>
        )
    })
  return (
      <div className='progress'>
             <span>
            Work Break Down
              <GrCircleAlert />
          </span>
          <div className="progress__wrapper">
          <div className="cards__content">
                      <h2>968</h2> <small>lines</small>
              </div>
              <div className="cards__content">
                      <h2>54</h2> <small>tickets</small>
              </div>
              <div className="cards__content">
                      <h2>4</h2> <small>total weeks coverd</small>
                  </div>
          </div>
          <div className="progress__wrapper2">
              { progressEle }
          </div>
          <div className="label">
              <div className="label__left">
                  <p>
                      <span className="green"></span>
                      { progressArray[0].n1}% New Work
                  </p>
                 
                  <p>
                      <span className="pink"></span> 
                      { progressArray[3].n1}% Bugs
                  </p>
          
              </div>
              <div className="label__right">
                  <p>
                      <span className="black"></span> 
                      { progressArray[2].n1}% Refactor
                  </p>
             
                  <p>
                  <span className="blue"></span>
                  { progressArray[1].n1}% ReWork
                  </p>
             </div>
              
          </div>

    </div>
  )
}

export default Progress