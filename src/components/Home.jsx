import React from 'react'
import Barchart from './Barchart'
import Cards from './Cards'
import DoughnutBar from './Doughnut'
import Progress from './Progress'
import Sidebar from './Sidebar'
import "../styles/home.css"

export default function Home() {
  return (
      <div className="home">
          <div className="home__left">
              <Sidebar />
          </div>
          <div className="home__right">
              <div className="home__wrapper">
                  <div className="home__header">
                      <h3>Project Starts</h3>
                      <div className="home__drop">
                     All time <select name="" id="">
                          <option value=""></option>
                          <option value="">list</option>
                      </select>
                     </div>
                  </div>
                  <div className="body">
                      <div className="body__doughnut">
                      <DoughnutBar />
                         </div>
                      <div className="body__barchart">
                      <Barchart />
                         </div>
     
                      <div className="body__card1">
                      <Cards header="Average PR Size"
        value1={968}
        value2={240}
        text1={"lines"}
        text2={"kb"}
        icon={true}
        text3={"Line Change"}
        text4={ "Size"}
                     icon__Text={ "24%" } />
                       </div>
                      <div className="body__card2">
                      <Cards header="Average Ticket Duration"
        value1={36}
        text1={"hours"}
        icon={false}
        text3={"Hours Worked"}
                     icon__Text={"79%"} /> 
                      </div>
                      <div className="body__progress">
                      <Progress />
                     </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
