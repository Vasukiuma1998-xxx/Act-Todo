import Header from "../components/Header";
import Card from "../components/Card";
import Todocontainer from "../components/Todocontainer";
import { useLocation } from "react-router-dom"
function Landing(){
    const data=useLocation()
    return(
        <div className="bg-blue-500 p-10">

      <div className="bg-white p-5 border rounded-md">
        <Header name={data.state.name}></Header>
        {/* card container */}
        <div className="flex justify-between gap-7 flex-wrap my-5">
        
<Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
<Card  bgcolor={"#FD6663"} title={"June-2024"} subtitle={"09:58:10"}/>
<Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"}/>

        </div>

{/* todo container */}
    <Todocontainer></Todocontainer>


      </div>
    </div>
    )
}

export default Landing