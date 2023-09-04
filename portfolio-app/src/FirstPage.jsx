import { useState } from "react";


function FirstPage() {
    
    
    return(
    <div className="page">
        <div className="header">
            <p>Hi,<br /> ich bin <span>Khang</span> <span className="title-beruf">(frontend react developer)</span></p>
        </div>
        
        <div className="skill-title">
            <p>Programmierkenntnisse</p>
        
        </div>
        
        <div className="skill-container">
            
            <div className="language-container">
                <div className="language">
                    <p>HTML</p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/640px-HTML5_Badge.svg.png" />
                </div>
                <div className="language two">
                <p>CSS</p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" />
                </div>
                <div className="language three">
                <p>JavaScript</p>
                    <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" />
                </div>
                <div className="language four">
                <p>React</p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/862px-React-icon.svg.png" />
                </div>
                
            </div>
        </div>
    </div>

    )
}

export default FirstPage;