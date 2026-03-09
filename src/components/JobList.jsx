function JobList({ jobs, onDelete, onEdit }){

if(!jobs.length){
return <p className="empty-state">No applications yet</p>
}

return(

<div className="job-list">

{jobs.map(job =>{

const domain = job.link
? new URL(job.link).hostname
: null

return(

<div
key={job.id}
className="glass-card job-card"
>

<div className="job-info">

<div className="job-header">

{domain && (
<img
className="company-logo"
src={`https://logo.clearbit.com/${domain}`}
alt=""
/>
)}

<h3 className="company">
{job.company}
</h3>

<span className={`status-pill status-${job.status.toLowerCase()}`}>
{job.status}
</span>

</div>

<p className="role">{job.role}</p>

{job.location && (
<p className="meta">📍 {job.location}</p>
)}

{job.salary && (
<p className="meta">💰 {job.salary}</p>
)}

{job.link && (

<a
href={job.link}
target="_blank"
rel="noreferrer"
className="job-link"
>
View Job
</a>

)}

{job.notes && (
<p className="notes">{job.notes}</p>
)}

<p className="date">
Applied {new Date(job.date).toLocaleDateString()}
</p>

</div>

<div className="job-actions">

<button
className="purple-btn small-btn"
onClick={()=>onEdit(job)}
>
Edit
</button>

<button
className="delete-btn small-btn"
onClick={()=>onDelete(job.id)}
>
Delete
</button>

</div>

</div>

)

})}

</div>

)

}

export default JobList