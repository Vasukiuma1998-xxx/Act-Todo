import { useState } from "react"

function Addtodo(props){
    const activityArr=props.activityArr
    const setactivityArr=props.setactivityArr

    const[newactivity,setnewactivity]=useState()

function handlechnage(e){
    setnewactivity(e.target.value)
}

function add(){
    setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
    setnewactivity("")
}
    return(
        <div className="flex flex-col gap-3">
                    <h1 className="font-medium text-2xl">Manage Activities</h1>
                    <div>
                        <input value={newactivity} type="text" className="border  border-black  bg-transparent p-1" placeholder="Next Activity" onChange={handlechnage}></input>
                        <button className="bg-black text-white p-1 border border-black" onClick={add}>Add</button>
                    </div>
                </div>
    )
}
export default Addtodo