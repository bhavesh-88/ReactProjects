import React, { useState } from 'react'
import "./form1.css"

const Form = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([])

     const submitform = (e) =>{
        e.preventDefault();
        if (username && password) {
            const newEntry = { id: new Date().getTime().toString(),username: username, password: password};
            setAllEntry([...allEntry,newEntry]);
            // console.log(setAllEntry);
            setUsername("");
            setPassword("");                
        }else{
            alert("plz fill the data")
        }

     }

    return (
        <>
            <div className='container'>
                <form action='' onSubmit={submitform}>
                    <h1>Login Form</h1>
                    <div className='form-control'>
                        <label htmlFor='name'>username</label>
                        <input type='text'
                            name='username'
                            id='username'
                            autoComplete='off'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        ></input>
                    </div>
                    <div className='form-control'>
                        <label htmlFor='Password'>Password</label>
                        <input type='password'
                            name='Password'
                            id='Password'
                            autoComplete='off'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}>
                        </input>
                    </div>
                    <button type='submit'>Login</button>
                </form>

                <div>
                    {
                        allEntry.map((curele,) =>{
                            // const {id , username, password} = curele;
                            return(
                                <div key={curele.id}>
                                    <p>{curele.username}</p>
                                    <p>{curele.password}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Form
