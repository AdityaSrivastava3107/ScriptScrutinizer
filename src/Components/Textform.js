import React, {useState} from 'react'

export default function TextForm(props) {
    const HandleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const HandleUpClick = (event)=>{
        console.log("Button clicked");
        setText(text.toUpperCase());
    }
    const HandleLowClick = ()=>{
        setText(text.toLowerCase());
    }
    const HandleSpaceClick = ()=>{
        setText(text.split(" ").join(""));
    }
    const HandleClearClick = ()=>{
        setText("");
    }
  const [text,setText] = useState("")
  return (
    <><>
        <div className="container my-2" style={{color: props.mode==='dark' ? 'white':'black'}}>
            {/* <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">{props.heading1}</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div> */}
            <h1>{props.heading2}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark' ? '#2e2e2e':'white', color: props.mode==='dark' ? 'white':'black'}} id="myBox" value={text} onChange={HandleOnChange} rows="10"></textarea>
            </div>
            <button className="btn btn-outline-primary mx-2" onClick={HandleUpClick}>Convert to Upper</button>
            <button className="btn btn-outline-primary mx-2" onClick={HandleLowClick}>Convert to Lower</button>
            <button className="btn btn-outline-primary mx-2" onClick={HandleSpaceClick}>Remove Space</button>
            <button className="btn btn-outline-primary mx-2" onClick={HandleClearClick}>Clear Text</button>
        </div>
      </>
            <div className="container my-4" style={{color: props.mode==='dark' ? 'white':'black'}}>
                <h2>Word Counter</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>You can read it in {0.008*text.split(" ").length} minutes</p>
                <h4>Preview</h4>
                <p>{text.length>0? text: "Type in the above box for preview"}</p>
                {/* <button className="btn btn-outline-secondary mx-2" onClick={ModeChange}>{btn}</button> */}
          </div></>
  )
}
