/* =================================================
JOB FORM
Creates a new job application
================================================= */
import { useState } from "react"

function JobForm({ onAdd }){

const [company,setCompany] = useState("")
const [role,setRole] = useState("")
const [location,setLocation] = useState("")
const [salary,setSalary] = useState("")
const [link,setLink] = useState("")
const [notes,setNotes] = useState("")

function handleSubmit(e){

e.preventDefault()

if(!company || !role){
alert("Company and Role are required")
return
}

const job = {
id: crypto.randomUUID(),
company,
role,
location,
salary,
link,
notes,
status:"Applied",
date: Date.now()
}

onAdd(job)

setCompany("")
setRole("")
setLocation("")
setSalary("")
setLink("")
setNotes("")
}

return(

<div className="glass-card">

<h3 className="card-title">Add Application</h3>

<form onSubmit={handleSubmit} className="job-form">

<label>Company (required)</label>
<input
value={company}
onChange={(e)=>setCompany(e.target.value)}
placeholder="ex. Google"
/>

<label>Role (required)</label>
<input
value={role}
onChange={(e)=>setRole(e.target.value)}
placeholder="ex. Software Engineer"
/>

<label>Location (optional)</label>
<input
value={location}
onChange={(e)=>setLocation(e.target.value)}
placeholder="ex. Remote"
/>

<label>Salary Range (optional)</label>
<input
value={salary}
onChange={(e)=>setSalary(e.target.value)}
placeholder="ex. $90k – $120k"
/>

<label>Job Link (optional)</label>

<div className="link-row">

<input
value={link}
onChange={(e)=>setLink(e.target.value)}
placeholder="ex. https://company.com/job"
/>

{link && (
<a
href={link}
target="_blank"
rel="noreferrer"
className="view-link"
>
View Job
</a>
)}

</div>

<label>Notes (optional)</label>

<textarea
value={notes}
onChange={(e)=>setNotes(e.target.value)}
placeholder=""
/>

<button className="purple-btn">
Add Application
</button>

</form>

</div>

)

}

export default JobForm