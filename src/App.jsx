import { useState,useEffect } from "react"

import JobForm from "./components/JobForm"
import JobList from "./components/JobList"
import EditJob from "./components/EditJob"
import Auth from "./components/Auth"
import SettingsMenu from "./components/SettingsMenu"

import StatsBar from "./StatsBar"

import logo from "./assets/CareerFlow.png"

import { auth } from "./firebase"
import { onAuthStateChanged, updateProfile } from "firebase/auth"

import {
loadJobs,
addJobFirestore,
deleteJobFirestore,
updateJobFirestore
} from "./services/firestoreJobs"

function App(){

const [user,setUser] = useState(null)
const [jobs,setJobs] = useState([])

const [filter,setFilter] = useState("All")

const [showAuth,setShowAuth] = useState(false)
const [showSettings,setShowSettings] = useState(false)

const [editingJob,setEditingJob] = useState(null)

useEffect(()=>{

const unsub = onAuthStateChanged(auth,(u)=>{

setUser(u)

if(u){
loadUserJobs(u.uid)
}

})

return ()=>unsub()

},[])

async function loadUserJobs(uid){

const data = await loadJobs(uid)
setJobs(data)

}

async function handleAddJob(data){

const job={
...data,
date:Date.now(),
status:"Applied"
}

if(!user){

setJobs(prev=>[
...prev,
{
id:crypto.randomUUID(),
...job
}
])

return
}

await addJobFirestore(user.uid,job)

loadUserJobs(user.uid)

}

async function handleDelete(id){

if(!user){
setJobs(prev=>prev.filter(j=>j.id!==id))
return
}

await deleteJobFirestore(user.uid,id)

loadUserJobs(user.uid)

}

async function handleStatusChange(id,status){

if(!user){

setJobs(prev=>
prev.map(j=>
j.id===id ? {...j,status} : j
)
)

return
}

await updateJobFirestore(user.uid,id,{status})

loadUserJobs(user.uid)

}

async function handleEditSave(updatedJob){

if(!user){

setJobs(prev =>
prev.map(j =>
j.id===updatedJob.id ? updatedJob : j
))

setEditingJob(null)
return
}

await updateJobFirestore(user.uid,updatedJob.id,updatedJob)

setEditingJob(null)

loadUserJobs(user.uid)

}

function formatName(name){

if(!name) return ""

const parts=name.split(" ")

if(parts.length===1) return name

return `${parts[0]} ${parts[1][0]}.`

}

const filteredJobs = filter==="All"
? jobs
: jobs.filter(j=>j.status===filter)

return(

<div className="app-container">

<div className="blob"></div>

<div className="top-bar">

<div className="logo-area">

<img src={logo} alt="CareerFlow"/>

</div>

<div className="user-area">

{user && (

<div className="user-name">

{formatName(user.displayName)}

</div>

)}

{user ? (

<button
className="purple-btn"
onClick={()=>setShowSettings(true)}
>
Settings
</button>

):(

<button
className="purple-btn"
onClick={()=>setShowAuth(true)}
>
Login/Create
</button>

)}

</div>

</div>

<StatsBar
jobs={jobs}
filter={filter}
setFilter={setFilter}
/>

<div className="dashboard">

<div className="dashboard-left">

<JobForm onAdd={handleAddJob}/>

</div>

<div className="dashboard-right">

<JobList
jobs={filteredJobs}
onDelete={handleDelete}
onStatusChange={handleStatusChange}
onEdit={setEditingJob}
/>

</div>

</div>

{editingJob && (

<div className="modal-overlay">

<EditJob
job={editingJob}
onSave={handleEditSave}
onCancel={()=>setEditingJob(null)}
/>

</div>

)}

{showAuth && (
<Auth close={()=>setShowAuth(false)}/>
)}

{showSettings && (
<SettingsMenu close={()=>setShowSettings(false)} user={user}/>
)}

</div>

)

}

export default App