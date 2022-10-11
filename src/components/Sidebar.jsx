import React, { useState, useRef, useEffect } from "react";
// import img1 from "../assets/images/Vector (1).svg"
import img2 from "../assets/images/Vector (2).svg"
import img3 from "../assets/images/Vector (3).svg"
import img4 from "../assets/images/Vector (4).svg"
import img5 from "../assets/images/Vector (5).svg"
import img6 from "../assets/images/Vector (6).svg"
import img7 from "../assets/images/initials.svg"
import img8 from "../assets/images/initials (1).svg"
import img9 from "../assets/images/initials (2).svg"
import img10 from "../assets/images/initials (3).svg"
import fcmb from "../assets/images/fcmb.svg"

import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
    MdOutlineKeyboardArrowRight
} from "react-icons/md"
import {IoMdArrowDropdown } from "react-icons/io"
import "../styles/sidebar.css"

function Sidebar() {
    const listRef = useRef()
    const [showList, setShowList] = useState(false)
    const [activeOne, setActiveOne] = useState(false)
    const [activeTwo, setActiveTwo] = useState(false)
    const [activeThree, setActiveThree] = useState(false)
    const [activeFour, setActiveFour] = useState(false)
    const [activeFive, setActiveFive] = useState(false)
    
const [listEle, setListEle] = useState([])

    const topElement = [{
        id: 1, uri: <MdOutlineKeyboardArrowUp
        fontSize={20}
        />   
    }, {
        id: 2, uri: <MdOutlineKeyboardArrowDown
        fontSize={20}
        />
    }]
    const centerElement = [
        {
            id : 1, uri: img2
        }, {
            id : 2, uri: img3
        },{
            id : 3, uri: img4
        },{
            id : 4, uri: img5
        },{
            id : 5, uri: img6
      }
  ]
    const bottomElement = [
        {
                id : 1, uri: img7
            }, {
                id : 2, uri: img8
            },{
                id : 3, uri: img9
            },{
                id : 4, uri: img10
        }
    ]
    
    const spanTop = topElement.map((i) => {
        return <span className="text" key={ i.id }>
            { i.uri }
       </span>
    })
    const spanCenter = centerElement.map((i) => {
        return <span className="text" key={ i.id }>
            <img src= { i.uri } alt="icon" />
       </span>
    })
    
    const spanBottom = bottomElement.map((i) => {
        return <span className="text" key={ i.id }>
           <img src= { i.uri } alt="icon" />
       </span>
    })
    

const list = [{
    id: 1, text: "project stats", state: "oneEle",
    class: activeOne ? "text active" : "text",
    onEnter: () => {
        console.log("just clicked one")
         setActiveOne(true)
    },
    onLeave: () => {
        setActiveOne(false) 
    }
        }, {
    id: 2, text: "planning", state: "twoEle",
    class: activeTwo ? "text active" : "text",
    onEnter: () => {
        console.log("just clicked two")
        setActiveTwo(true)
    },
    onLeave: () => {
        setActiveTwo(false) 
    }
  
        },{
    id: 3, text: "teamwork", state: "threeEle",
    class: activeThree ? "text active" : "text",
    onEnter: () => {
        setActiveThree(true)
    },
    onLeave: () => {
        setActiveThree(false) 
    }
   
        },{
    id: 4, text: "team health", state: "fourEle",
    class:  activeFour ? "text active" : "text",
    onEnter: () => {
        setActiveFour(true)
    },
    onLeave: () => {
        setActiveFour(false) 
    }
        },{
    id: 5, text: "investment", state: "fiveEle",
    class: activeFive ? "text active" : "text",
    onEnter: () => {
        setActiveFive(true)
    },
    onLeave: () => {
        setActiveFive(false) 
    }

   
    }]
    const others = [
        {
            id: 1,
            title: "Action Center",    
        },
        {
            id: 2,
            title: "Apps",
            
        },
        {
            id: 3,
            title: "Task",
            
        },
        {
            id: 4,
            title: "Code Review",
            
        },
        {
            id: 5,
            title: "Qa review",
            
        },
        {
            id: 6,
            title: "Notes",
            
        }
    ]
    
 
useEffect(() => {
    const data = list.map((i, j) => {
        return <span
        onMouseEnter={() => {
                i.onEnter()  
            }}
            onMouseLeave={
                () => {
                i.onLeave()
            }
        }
        key={i.id}
            className={i.class} >
       { i.text}
   </span>
    })
    setListEle([...data])
 
}, [activeOne, activeTwo, activeThree, activeFour, activeFive])

    const otherList = others.map((i) => {
        return <span className="others">
            { i.title }
        </span>
})
    return <div className="sidebar">
        <div className="sidebar__left">
            <div className="sidebar__left__top">
                { spanTop }
            </div>
            <div className="sidebar__left__center">
               
                { spanCenter }
                
            </div>
            <div className="sidebar__left__bottom">
                { spanBottom }
            </div>
            <span className="next">
                { <MdOutlineKeyboardArrowRight />}  
          </span>
        </div>
        <div className="sidebar__right">
            <div className="sidebar__right__top">
             
                    <span>
                    <MdOutlineKeyboardArrowLeft
                    fontSize={30}
                    />
                </span>
                <p>
                    <img
                        src={fcmb}
                        alt="icon" />
                    <span>
                        FCMB: Mobile
                    </span>
                </p>
            </div>
            <div className="sidebar__right__bottom">
                <span>
                    work flows
                </span>
                <h2>
                    Product dev
                   
                        <MdOutlineKeyboardArrowDown
                            fontSize={25}
                        />
                  
                </h2>
                <h2 onClick={() => {
                    setShowList(!showList)
                }}>
                     overview
                    <IoMdArrowDropdown
                        fontSize={45}
                        color="rgba(3, 41, 61, 0.05)"
                        className={ showList ? "" : "animate" }
                    />
                  
                </h2>
                <div className="sidebar__list">
                    {
                        showList &&  listEle
                   }
                </div>
                <div className="listEnt">
                    {
                    otherList
                    }
                </div>

            </div>
        </div>
  </div>;
}

export default Sidebar;
