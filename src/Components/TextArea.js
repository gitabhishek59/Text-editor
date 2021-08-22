import React, {useState} from 'react'

export default function TextArea(props) {
    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        // props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        // props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick = ()=>{
        let newText=" ";
        setText(newText);
        // props.showAlert("All text clear","success");
    }

    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        // props.showAlert("Text copied","success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        // props.showAlert("Removed extra space","success");
    }
    const [text,setText]=useState("");
    return (
        <>
        <div className="container">
            <h1 className="my-4" style={{color:' #ff8000'}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea id="val" className="form-control"style={{backgroundColor:'black' ? 'black':'white',color:'white'}} value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
            </div>
         <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to upperCase</button>
         <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
         <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
         <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
         <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-3">
           <h1 style={{color:' #ff8000'}}>Your text summary :)</h1>
           <p style={{color:'#336600'}}>{text.split(" ").length} words and {text.length} characters</p>
           <p style={{color:'#336600'}}>{0.008* text.split(" ").length} Minutes read</p>
            <h2 style={{color:' #ff8000'}}>Preview :)</h2>
            <p style={{color:'#336600'}}>{text.length>0?text:"Enter something in the textbox above to preview it here..."}</p>
        </div>
        </>
    )
}
