import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props){
    const [eusername,esetusername]=useState()
    const [epassword,esetpassword]=useState()
    const [ruser,setruser]=useState(true)
    const users=props.users
    const navigate=useNavigate()

    function handleuname(evt){
        esetusername(evt.target.value)
    }
function handlepassword(evt){
    esetpassword(evt.target.value)
}
console.log(users)

    function checkuser()
    {
       var userfound=false
        users.forEach(function(item){
            if(item.uname===eusername && item.pwd===epassword){
                console.log("Login succesfull")
                userfound=true
                navigate("/landing",{state:{name:eusername}})
            }
           
        })
        if(userfound===false)
            {
                console.log("Login failed")
                setruser(false)
            }
    }

    return(
        <div  className="bg-black p-10" >

        <div className="bg-white p-10 border rounded-md">
        <h1 className="text-3xl">Hey Hi👋</h1>
        {ruser?<p>I help you manage your activities after you login :)</p>:<p className="text-red-500">Please signup before you login</p>}

        <div className="flex flex-col gap-3 my-3">
            <input type="text" vlaue={eusername} onChange={handleuname}className="w-52 bg-transparent border-black p-1 border rounded-md" placeholder="username"></input>
            <input type="text" value={epassword} onChange={handlepassword}className="w-52 bg-transparent   border-black p-1 border rounded-md" placeholder="password"></input>
           
            <button className="bg-[#8272DA] w-24 border rounded-md p-1"onClick={checkuser}>Login</button>
           <p>Don't have an account <Link to={"/signup"} className="underline">Signup</Link></p>
        </div>

        </div>
        
        </div>
    )
}
export default Login