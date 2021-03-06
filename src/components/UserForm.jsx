import React, { useState } from 'react';

const UserForm = () => {
    // Create state variables for each input
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confPass, setConfPass] = useState("")

    return(
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="">First Name: </label>
                    <input onChange= {(e)=>(setFirstName(e.target.value))} type="text" name="firstName" id="" className="form-control"/>
                    {
                        firstName.length <=2 && firstName.length > 0 ?
                            <p className="text-danger">First name must be at least 2 characters!</p>
                            : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name: </label>
                    <input onChange= {(e)=>(setLastName(e.target.value))} type="text" name="lastName" id="" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email: </label>
                    <input onChange= {(e)=>(setEmail(e.target.value))} type="text" name="email" id="" className="form-control"/>
                    {
                        email.length <=5 && email.length > 0 ?
                            <p className="text-danger">Email must be at least 5 characters!</p>
                            : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Password: </label>
                    <input onChange= {(e)=>(setPassword(e.target.value))} type="text" name="password" id="" className="form-control"/>
                    {
                        password !== confPass && password.length <= 8?
                            <p className="text-danger">Passwords must match and be at least 8 characters!</p>
                            : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password: </label>
                    <input onChange= {(e)=>(setConfPass(e.target.value))} type="text" name="confPass" id="" className="form-control"/>
                    {
                        confPass !== password && confPass.length <= 8?
                            <p className="text-danger">Passwords must match and be at least 8 characters!</p>
                            : ""
                    }
                </div>
                <input type="submit" value="Create User" className="btn btn-success mt-2" />
            </form>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirmed Password: {confPass}</p>
            </div>
        </>
    )

}

export default UserForm;
