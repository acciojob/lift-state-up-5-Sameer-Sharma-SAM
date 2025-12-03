import React, { useState } from 'react'

const Login = ({onLogin}) => {
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")

    function handleSubmit(e){
        e.preventDefault();
        onLogin()
    }

    return (
        <>
            
            <form onSubmit={handleSubmit}>
                 <div style={{ marginBottom: "10px" }}>
                    <label style={{ marginRight: "10px" }}>Username:</label>
                    <input type='text' value={username} 
                        onChange={e=>setUsername(e.target.value)}
                    />
                 </div>
                 <div style={{ marginBottom: "10px" }}>
                    <label style={{ marginRight: "14px" }}>Password:</label>
                    <input type='password' value={password} 
                        onChange={e=>setPassword(e.target.value)}
                    />
                 </div>
                <button  type='submit'>Login</button>
            </form>


        </>

    )
}

export default Login