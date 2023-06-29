//react function based component  that is rfc
import React, {useState  } from 'react'



export default function Textform(props) {
  
  //React hook that initializes a state variable named text with an initial value of 'Enter your text here '
const [text, setText] = useState('Enter your text here ');
// if i want to update the text 
// text="new text " this is wrong way to update the txt use setText instead
// setText("new text using setText");

    //create upper case function
    const handleUppClick=()=>{
      // use + text to show text value in console 
        // console.log("clicked for upper case"+ text);
        // other wise make it simple 
        console.log("clicked  for upper case")
        //text value get updated 
        let newText = text.toUpperCase();
        setText(newText);
    }

     //  function to clear console 
     const clear = ()=>{
      console.log("request accepted");
      let newText = " ";
      setText(newText);
    }
    
    //create a function to lower the text
    const handlelowClick=()=>
    {
     console.log("clicked for lower case");
     //update the existing text into lower case
    let newText = text.toLowerCase();
    setText(newText);
    }
    
    //create function on change
    //jitni bar text from ke ander text add krnge utni bar on change event trigger hoga
    // It captures the value entered by the user and performs some action with it, such as updating the state or modifying the DOM.
    const handleOnChange=(event)=>{
        console.log("on change");
        //here using event.target.value the value inputed by user append in text value
        setText(event.target.value);
   
    }
    

        //makeing dark mode function
        const handleT= () => {
          if(myStyle.color === 'white')
          {
            setmyStyle({
              color:'black',
              backgroundColor:'white'
            })
            setbtntext("Enable dark mode")
          }
          else{
            setmyStyle({
              color:'white',
              backgroundColor:'black'
            })
            setbtntext("Enable light mode")
          }
        }
    

//enable dark mode
 const [myStyle, setmyStyle] = useState({
  color: 'white',
  backgroundColor: "black"
 })

 //button dark== mode
 const [btntext, setbtntext] = useState("Enable dark mode")



 
  return (
    <>
   <div className='container'> 
      {/* have to add something  */}
  <div className="mb-3">
  <label for="mybox" className="form-label">

    <h1>{props.heading}</h1></label>
  <textarea className="form-control"   value={text} onChange={handleOnChange} id="mybox" rows="10"></textarea>
  <button className="btn btn-primary my-3 "  onClick={handleUppClick} >convert to upper case</button>
  <button className="btn btn-primary my-3 mx-3"  onClick={handlelowClick} >convert to lower case</button>
  <button className="btn btn-primary my-3 mx-3"  onClick={clear} >clear text</button>
   
  </div>

    </div> 
    <div className="container" style={myStyle}>
      <h1>Word counter</h1>
      <p >{text.split(" ").length} words ans {text.length} charachters </p>
      {/* total minutes to read a para  */}
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview of your text</h2>
      <p>{text}</p>
    </div>
    <div className="container">
    <button className="btn btn-primary my-3 "  onClick={handleT}> {btntext}</button>
    </div>
    </>
    
  )
}

Textform.defaultProps={
  heading: "Add heading for text form"
}

