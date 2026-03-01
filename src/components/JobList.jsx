function JobList({ jobs, onStatusChange }) {
  return (
    <div>
      {jobs.map(job => (
        <div key={job.id} style={{ marginTop: "1rem" }}>
          <strong>{job.company}</strong> — {job.role}
          <select
            value={job.status}
            onChange={e => onStatusChange(job.id, e.target.value)}
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default JobList;