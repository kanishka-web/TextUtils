import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ReactPropTypes } from 'react';



export default function TextForm(props) {

    const [text,setText]=useState('');
    const onChangeText=(event)=>{
        setText(event.target.value)
        props.showAlert("You are entering data to text","success")
    }
    const upperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("You uppercased the data","success")
    }
    const lowerCase=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("You lowercased the data","success")
  }
  const clear=()=>{
    setText("");
    props.showAlert("You cleared the data","waerning")
}
  return (
    <>
    <div className="form-floating my-3" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>
    <h1>{props.mainHead}</h1>
    <label htmlFor="floatingTextarea"></label>
  <textarea className="form-control"  value={text} onChange={onChangeText} id="floatingTextarea" placeholder='enter your text here' style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}/>
  <button type="button" class="btn btn-primary" onClick={upperCase} style={{marginRight:"5px",marginTop:"5px"}}>Convert to UpperCase</button>
  <button type="button" class="btn btn-primary" onClick={lowerCase} style={{marginRight:"5px",marginTop:"5px"}}>Convert to LowerCase</button>
  <button type="button" class="btn btn-primary" onClick={clear} style={{marginRight:"5px",marginTop:"5px"}}>Clear</button>

  <p>{text.length} characters, {text.split(" ").length} words.</p>
 <h4>Preview Your Text Here:</h4>
 <p>{text.length>=1?text:"Enter Text To Preview"}</p>

</div>
    </>
  )
}
