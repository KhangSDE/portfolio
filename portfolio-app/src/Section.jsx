import FirstPage from "./FirstPage";
import HomeBar from "./HomeBar";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import React, { useState } from "react";
import { useEffect } from "react";

function Section() {
    const [project, setProject]  = useState(false);
    
    const showProjects = () => {
        if(!project) {
            setProject(true)
            setHome(false)
            setContact(false)
        }
 
    }
    const [home, setHome] = useState(true);
    const showHome = () => {
        if(home) {
            setHome(true)
            setProject(false)
            setContact(false)
        }
        if(!home) {
            setHome(true)
            setProject(false)
            setContact(false)
        }
    }
    
    const [contact, setContact] = useState(false);
    
    const showContact = () => {
        if(!contact) {
            setContact(true)
            setHome(false)
            setProject(false)
        }
    }

    const [currentTime, setCurrentTime] = useState("");

    const showTime = () => {
        const date = new Date() ;
        const hour = date.getHours();
        const minutes = date.getMinutes();

        let formattedHour = hour.toString().padStart(2, "0");
        let formattedMinutes = minutes.toString().padStart(2, "0");

        const formattedTime = `${formattedHour}:${formattedMinutes}`;
        setCurrentTime(formattedTime);
        
        
        
    }

    useEffect(() => {
        showTime();
        const interval = setInterval(showTime, 1000 * 60);
        return () => clearInterval(interval);
    }, []);


    return(
        <section className="container-first-page">

          <div className="ios-logo">
            <img src="https://icons.veryicon.com/png/o/miscellaneous/alan-ui/ios-wifi-2.png" />
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-low-battery-5-474981.png?f=webp" />
            <p>{currentTime}</p>
          </div>

            
            <HomeBar showProjects={showProjects} showHome={showHome} showContact={showContact} />
            {project && <SecondPage />}
            {contact && <ThirdPage />}
            
            {!home ? null : <FirstPage />}
        </section>
    )
}

export default Section;