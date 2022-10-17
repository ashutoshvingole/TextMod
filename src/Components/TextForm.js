import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () =>{
        console.log("LowerCase was Clicked" + text);
        let lowText = text.toLowerCase();
        setText(lowText)
    }
    const handleonchange = (event) => {
        console.log("handleOnChange ");
        setText(event.target.value)
    }
    const handleClearClick = (event) => {
        let newText = ("")
        setText(newText)
    }
    const [text, setText] = useState("enter text here");
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="15"></textarea>
        </div>
        <button className= "btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className= "btn btn-primary mx-1" onClick={handleLowClick} >Convert to Lowercase</button>
        <button className= "btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>

    </div>
    <div className='container'>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
