import { useState } from "react"
import Todoitem from "./Todoitem"
function Todolist(props){

    const activityArr=props.activityArr
    const setactivityArr=props.setactivityArr

    return(
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
        <h1 className="font-medium text-2xl">Today's Activity</h1>
        {activityArr.length===0?<p>You havn't added any activity</p>:""}
       {
        activityArr.map(function(item,ind){
            return<Todoitem id={item.id}activity={item.activity} index={ind} activityArr={activityArr} setactivityArr={setactivityArr}></Todoitem>
        })
       }
    </div>
    )
}
export default Todolist