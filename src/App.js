
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";
function App(){

  const [users,setuser]=useState([
    {
        uname:"vasuki",
        pwd:"2024"
    }
])

  return(
<div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login users={users} setuser={setuser}/>}></Route>
      <Route path='/signup' element={<Signup users={users} setuser={setuser}/>}></Route>
      <Route path='/landing' element={<Landing/>}></Route>
     
    </Routes>
    </BrowserRouter>
  </div>
 
  )
}


export default App;
