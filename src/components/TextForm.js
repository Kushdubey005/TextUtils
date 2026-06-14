import React, { useState } from "react";



export default function TextForm(props) {
    const handleUpClick=()=>{
        let NewText=text.toUpperCase();
        setText(NewText);
        props.showAlert(":Converted To UpperCase","success");
    }
    const handleLoClick=()=>{
        let NewText=text.toLowerCase();
        setText(NewText);
        props.showAlert(":Converted To LowerCase","success");
    }
    const handleClClick=()=>{
        if(text.length===0){
            alert("nothing to clear");
            return 0;
        }
        
        let NewText='';
        setText(NewText);
        props.showAlert(":All Texts Are Cleared","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);

    }
const[text,setText]=useState('Enter text here...');
  return (
    <>
    <div className="container"  style={{color:props.mode==='light'?'black':'white'}}>
      <h1>
        {props.heading}
      </h1>
     <div className="my-4">
     <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
     <div className="buttn">
        <button className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-3 my-1 " onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-3 my-1 " onClick={handleClClick}>Clear</button>
     </div>
     </div>
    </div>
    <div className="container">
        <h2 style={{color:props.mode==='light'?'black':'white'}}>Your Words Summary</h2>
        <p  style={{color:props.mode==='light'?'black':'white'}}>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
    </div>
    </>
  )
}
