import Addtodo from "./Addtodo"
import Todolist from "./Todolist"
import { useState } from "react"
function Todocontainer() {

    const [activityArr,setactivityArr]=useState([
        {
            id:1,
            activity:"wake up at 5am"
        },
        {
            id:2,
            activity:"Go for a walk"
        },
        {
            id:3,
            activity:"Have a Breakfast"
        }

    ])
    return (
        <div>
            <div className="flex gap-3 flex-wrap">
                <Addtodo activityArr={activityArr} setactivityArr={setactivityArr}></Addtodo>

               <Todolist activityArr={activityArr} setactivityArr={setactivityArr}></Todolist>
            </div>
        </div>
    )
}

export default Todocontainer