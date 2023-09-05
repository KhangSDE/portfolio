import { useState } from "react";
import Editor from "@monaco-editor/react"

function ThirdPage() {
    
    const showPDF = () => {
        window.open("./dateien/Lebenslauf_Khang_IT.pdf");
    }

    const editorValue = `const vorname = "Duy Khang";
    const nachname = "Nguyen";
    
    let name = () => {
      const result = vorname +  " " +nachname;
      console.log(result)
    }
    name();
    
    const hobbys = (hobbyEins, hobbyZwei) => {
      const result = "Ich mag " + hobbyEins + " und " + hobbyZwei;
      console.log(result)
    }
    
    hobbys("Programmieren", "Fitness")`


    return(
        <div className="third-container">
            <div className="information">
                <p>Hi,<br /> ich bin Duy Khang Nguyen und mein großer Traum ist es, Webentwickler zu werden. Ich habe dieses Jahr mein Abitur abgeschlossen und bin derzeit auf der Suche nach einer Stelle als Frontend React Developer 😊👨‍💻❄. </p>

                <p>Ein wenig über mich: Ich wurde in Berlin geboren und habe vietnamesische Wurzeln. In meiner Freizeit spiele ich gerne Gitarre und betreibe Krafttraining 🏋️‍♂️✨.</p>
            </div>

            <div className="resume">
                <button onClick={showPDF}>
                    Lebenslauf
                </button>
            </div>

            <div className="links">
                <div className="github">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                    <p>https://github.com/KhangSDE</p>
                </div>
                
                <div className="email">
                    <img src=".\image\email.png" />
                    <p>duykhang2924@gmail.com</p>
                </div>

                <div className="telefon">
                    <img src=".\image\call.png" />
                    <p>0176 61597455</p>
                </div>
            </div>

            <div className="facts">
                <div className="fact-header">
                    <p>Editor</p>
                </div>
                <div className="editor-container">
                <Editor 
                    height = "100%"
                    width= "100%"
                    theme = "vs-dark"
                    defaultLanguage = "javascript"
                    defaultValue={editorValue}
                    
                    />
                </div>
            
                </div>

        </div>
    )
}

export default ThirdPage;