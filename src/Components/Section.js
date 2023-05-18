import React from "react";

const Section = ({title, context,children}) => {
      return(
        <div className="section">
               <h1>{title}</h1>
               <p>{context}</p>
               {children}
        </div>
      )
}

export default Section