import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";


function App(){
    const navigate = useNavigate()

    const [user,setuser]= useState("")
    const [pass,setpass]=useState("")

    function handleuser(evt)
    {
        setuser(evt.target.value)
    }
    
    function handlepass(evt)
    {
        setpass(evt.target.value)
    }

     function check()
     {
        var logindetails = axios.get(`http://localhost:3001/login?username=${user}&password=${pass}`)
        logindetails.then(function(data){
            if(data.data === true)
            {
                navigate("/Success")
            }
            else{
                 navigate("/Fail")
            }
        })
    }
 
  return(
     <div className="home-container">
    <p>Netflix</p>
    <div className="container">
    <input onChange={handleuser} className="input-box1" name="username" placeholder="Username"></input> <br />
    <input onChange={handlepass} className="input-box2" name="password" placeholder="Password"></input>
    <button onClick={check} className="btn">Login</button>
    </div>
    </div>
  )
  }


export default App