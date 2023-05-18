import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Section from "./Components/Section";

let obj = [
       {title:"skill1",context:"The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link"},
       {title:"skill1",context:"The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link"},
       {title:"skill1",context:"The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link"},
       {title:"skill1",context:"The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link"}
];
const App = () => {
     return(
        <div>
            <Header/>
            <About/>
            {
                obj.map((data,index)=>{
                return(
                  <Section
                  title={data.title}
                  context={data.context}> 
                  {index!=obj.length-1?<hr/>:""}
                  </Section>
                    )                 
                })     
            }
        </div>
     )
}
export default App