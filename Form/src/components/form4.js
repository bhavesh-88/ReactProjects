import React,{useState} from 'react'
import "./form1.css"

const Form4 = () => {
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);

    const loginHandle =(e) =>{
        if(user.length<3 || password.length<3)
        {
            alert("type correct values")
        }
        else
        {
            alert("all good :)")
        }
        e.preventDefault();
    }
    function userHandler(e){
        let item=e.target.value;
        // console.log(item);
        if(item.length<3 )
        {
           setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)
    }
  return (
    <>
       <div className='container'>
           <form onSubmit={loginHandle}>
           <h1>Login</h1>
           <input type="text" placeholder="Enter User Id" onChange={userHandler} />{userErr?<span>User Not Valid</span>:""}
            <br /> <br />
            <input type="password" placeholder="Enter User Password"  onChange={passwordHandler}/>{passErr?<span>Password Not Valid</span>:""}
            <br /> <br />
            <button type="submit"  >Login</button>
           </form>
        </div>
    </>
  )
}

export default Form4
