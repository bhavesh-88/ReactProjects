import React, { useState } from 'react'
import "./components/form3.css"

const Forminput = (props) => {
    const [focused, setFocused] = useState(false)
    const {label, onChange,errorMessage, id, ...inputProps} = props;

    const handelFocus = (e) =>{
        setFocused(true)
    }
  return (
    <div className='formInput'>
      <label>{label}</label>
      <input 
        {...inputProps} 
        onChange={onChange} 
        onBlur={handelFocus} 
        focused={focused.toString()} 
        onFocus={ () => inputProps.name === "confirmPassword" && setFocused(true)}
      />
      <span>{errorMessage}</span>
    </div>


//     <div className='formInput'>
//     <label>Username</label>
//     <input  name={props.name} placeholder={props.placeholder}  onChange={e =>props.setUserName(e.target.value)}></input>
//   </div>
  )
}

export default Forminput
