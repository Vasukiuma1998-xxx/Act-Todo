import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props){
    const users=props.users
    const setuser=props.setuser
    const navigate=useNavigate()
    const [eusername,esetusername]=useState()
    const [epassword,esetpassword]=useState()

    function handleuname(evt){
        esetusername(evt.target.value)
    }
function handlepassword(evt){
    esetpassword(evt.target.value)
}
   
function Adduser(){
    setuser([...users,{uname:eusername,pwd:epassword}])
    navigate("/")
}
    return(
        <div  className="bg-black p-10" >

        <div className="bg-white p-10 border rounded-md">
        <h1 className="text-3xl">Hey Hi 👋</h1>
        <p>Signup Here :)</p>

        <div className="flex flex-col gap-3 my-3">
            <input type="text" onChange={handleuname} className="w-52 bg-transparent border-black p-1 border rounded-md" placeholder="username"></input>
            <input type="text" onChange={handlepassword} className="w-52 bg-transparent   border-black p-1 border rounded-md" placeholder="password"></input>
            <input type="text" className="w-52 bg-transparent  border-black p-1 border rounded-md" placeholder="confirm-password"></input>

            <button className="bg-[rgb(252,241,84)] w-24 border rounded-md p-1" onClick={Adduser}>Signup</button>
           <p>Already have an account <Link to={"/"} className="underline">Login</Link></p>
        </div>

        </div>
        
        </div>
    )
}
export default Signup