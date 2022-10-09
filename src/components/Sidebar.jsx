import React from "react";
import img1 from "../assets/images/Vector (1).svg"
import img2 from "../assets/images/Vector (2).svg"
import img3 from "../assets/images/Vector (3).svg"
import img4 from "../assets/images/Vector (4).svg"
import img5 from "../assets/images/Vector (5).svg"
import "../styles/sidebar.css"

const imageArray = [{
    id : 1, uri: img1
}, {
    id : 2, uri: img2
},{
    id : 3, uri: img3
},{
    id : 4, uri: img4
},{
    id : 5, uri: img5
}]

const elementImage = imageArray.map((i) => {
  return  <div className="sidebar__pic" key={i.id}>
        <img src={ i.uri} alt="icon" />
    </div>
})
function Sidebar() {
    return <div className="sidebar">
        { elementImage }
  </div>;
}

export default Sidebar;
