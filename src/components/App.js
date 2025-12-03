
import React, { useState } from "react";
import './../styles/App.css';
import Login from "./Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn]=useState(false)
  const handleLoginSuccess=()=>{
    setIsLoggedIn(true)
  }

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Do not remove the main div */}
      {isLoggedIn?<p>You are logged in !</p>:<Login  onLogin={handleLoginSuccess}/>}
      
    </div>
  )
}

export default App
