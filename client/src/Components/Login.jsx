import React, {useState} from 'react'
import { navigate } from '@reach/router'
import axios from 'axios'
import '../styles/login.css'

const Login = props => {
    const[first_name, setFirstName] = useState("")
    const[last_name, setlastName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const[logemail, setlogEmail] = useState("")
    const[logpassword, setlogPassword] = useState("")

    const submithandle = e => {
        e.preventDefault();
        // axios.post('http://127.0.0.1:8000/api/users/new', {
        //     first_name,
        //     last_name,
        //     email,
        //     password
        // })
        navigate('/')
    }

    const logsubmit = e => {
        e.preventDefault();
        // axios.get('http://127.0.0.1:8000/api/users/'+logemail)
        // .then(res => {
        //     if(res.data.email == logemail && res.data.password == logpassword){
        //         props.setUser(res.data)
        //         props.setLogin(true)
                
        //     }
        // }).catch(err => {
        //     console.error(err);
        // });
        navigate("/");
    }


    return(
        <>
        <form className="login" onSubmit={submithandle} >
            <h1>Sign Up</h1>
            <p>
                <label>First Name</label> <br />
                <input type="text" onChange={e => setFirstName(e.target.value)} />
            </p>
            <p>
                <label>Last Name</label><br />
                <input type="text"  onChange={e => setlastName(e.target.value)} />
            </p>
            <p>
                <label>Email</label> <br />
                <input type="email" onChange={e => setEmail(e.target.value)} />
            </p>
            <p>
                <label>Password</label><br />
                <input type="password"  onChange={e => setPassword(e.target.value)} />
            </p>
            <p>
                <input type="Submit" value="Sign Up" />
            </p>
            
        </form>

        
        <form className="login" onSubmit={logsubmit} >
            <h1>Log In</h1>
            <p>
                <label>Email</label> <br />
                <input type="text" onChange={e => setlogEmail(e.target.value)} />
            </p>
            <p>
                <label>Password</label><br />
                <input type="text"  onChange={e => setlogPassword(e.target.value)} />
            </p>
            <p>
                <input type="Submit" value="Log In" />
            </p>
            
        </form>

        </>
    )
}

export default Login;