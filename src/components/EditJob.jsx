import { useState } from "react";

function EditJob({ job, onSave, onCancel }) {

const [company, setCompany] = useState(job.company);
const [role, setRole] = useState(job.role);
const [location, setLocation] = useState(job.location || "");
const [salary, setSalary] = useState(job.salary || "");
const [link, setLink] = useState(job.link || "");
const [notes, setNotes] = useState(job.notes || "");
const [status, setStatus] = useState(job.status || "Applied");

function handleSubmit(e) {

e.preventDefault();

const updatedJob = {
...job,
company,
role,
location,
salary,
link,
notes,
status
};

onSave(updatedJob);

}

return (

<div className="edit-panel">

<h2>Edit Application</h2>

<form onSubmit={handleSubmit} className="job-form">

<div className="form-group">
<label>Company</label>

<input
value={company}
onChange={e => setCompany(e.target.value)}
required
/>

</div>

<div className="form-group">
<label>Role</label>

<input
value={role}
onChange={e => setRole(e.target.value)}
required
/>

</div>

<div className="form-group">
<label>Location</label>

<input
value={location}
onChange={e => setLocation(e.target.value)}
/>

</div>

<div className="form-group">
<label>Salary</label>

<input
value={salary}
onChange={e => setSalary(e.target.value)}
/>

</div>

<div className="form-group">
<label>Job Link</label>

<input
value={link}
onChange={e => setLink(e.target.value)}
/>

</div>

<div className="form-group">
<label>Status</label>

<select
value={status}
onChange={e => setStatus(e.target.value)}
>

<option>Applied</option>
<option>Interview</option>
<option>Offer</option>
<option>Rejected</option>

</select>

</div>

<div className="form-group">
<label>Notes</label>

<textarea
value={notes}
onChange={e => setNotes(e.target.value)}
/>

</div>

<div className="edit-actions">

<button type="submit" className="save-btn">
Save Changes
</button>

<button
type="button"
className="cancel-btn"
onClick={onCancel}
>
Cancel
</button>

</div>

</form>

</div>

);

}

export default EditJob;