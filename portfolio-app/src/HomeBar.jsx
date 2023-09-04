import { useState } from "react";
import SecondPage from "./SecondPage";

function HomeBar({showProjects, showHome, showContact}) {
    
    
    
    return(
        <div className="home-section">
            <button onClick={showHome}>
                <img src=".\image\home.png"></img>
            </button>

            <button onClick={showProjects}>
                <img src=".\image\coding.png"></img>
            </button>

            <button onClick={showContact}>
                <img src=".\image\email.png"></img>
            </button>
            
        </div>

        
    )
}

export default HomeBar;