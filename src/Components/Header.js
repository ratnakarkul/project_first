import React from "react";
import "../Style.css"


const Header = () => {
    return(
           <nav className="navbar">
            <h1>Ratnakar Kulkarni</h1>
            <div className="links">
                <a href="#">Home</a>
                <a href="#">about</a>
                <a href="#">more_info</a>
                <hr/>
            </div>
           </nav>
    )
}



export default Header