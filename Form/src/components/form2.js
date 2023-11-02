import React, { useState, useEffect } from 'react'
import "./form1.css"

const Form2 = () => {
    const initialvalues = { username: "", email: "", password: "" }
    const [formValues, setFormValues] = useState(initialvalues)
    const [formErrors, setFormErrors] = useState([])
    const [isSubmit, setIsSubmit] = useState(false)
   
    const handleChange = (e) => {
        // console.log(e.target.value);
        // setFormValues(e.target.value)

        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);

    };

    useEffect(() => {
         if (Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    }, [formValues])

    const submitform = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        // setFormValues(initialvalues)
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required";
        }

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a Valid email format!";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password Cannot more than 4 character";
        } else if (values.password.length > 10) {
            errors.password = "Password Cannot more than 10 character";
        }
        return errors;
    }
    return (
        <>
            <div className='container'>
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="success">Signed in successfully</div>
                ) : (
                    <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                )}

                {/* <pre>{JSON.stringify(formValues,undefined)}</pre> */}
                <form action='' onSubmit={submitform}>
                    <h1>Login Form</h1>
                    <div className='form-control'>
                        <label htmlFor='name'>Username</label>
                        <input type='text'
                            name='username'
                            id='username'
                            autoComplete='off'
                            value={formValues.username}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <p>{formErrors.username}</p>
                    <div className='form-control'>
                        <label htmlFor='name'>Email</label>
                        <input type='email'
                            name='email'
                            id='email'
                            autoComplete='off'
                            value={formValues.email}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <p>{formErrors.email}</p>
                    <div className='form-control'>
                        <label htmlFor='Password'>Password</label>
                        <input type='password'
                            name='password'
                            id='password'
                            autoComplete='off'
                            value={formValues.password}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <p>{formErrors.password}</p>
                    <button type='submit'>Login</button>
                </form>

            </div>
        </>
    )
}

export default Form2
