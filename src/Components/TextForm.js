import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked")
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Uppercase function has been invoked","success")
    }
    const handleLowClick=()=>{
        console.log("Lowercase was clicked")
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Lowercase function has been invoked","success")
    }
    const handleClearAll=()=>{
        console.log("Clear was clicked")
        let newText=""
        setText(newText)
        props.showAlert("Clear All function has been invoked","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text,setText]=useState("")

  return (
  <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className="heading">{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control"value={text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white'}}></textarea>
</div>

    <button className="btn btn-primary mx-5 my-3"onClick={handleUpClick}>Convert To UpperCase</button>
    <button className="btn btn-primary mx-5 my-3" onClick={handleLowClick}>Convert To LowerCase</button>
    <button className="btn btn-primary mx-5 my-3" onClick={handleClearAll}>Clear</button>
    </div>

    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{text.split(' ').length *0.008} Mins taken to read</p>

        <h2><u>Preview</u></h2>
        <p>{text.length>0?text:"Enter something in the above box to preview"} </p>
    </div>
  </>
  )
}
