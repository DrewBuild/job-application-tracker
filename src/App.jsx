import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import FilterBar from "./components/FilterBar";
import { useState } from "react";
import { createJob } from "./models/jobModel";
import { validateJob, addJob, updateStatus, filterJobs } from "./services/jobService";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("All");

  function handleAddJob(company, role, date) {
    const newJob = createJob({ company, role, date });
    validateJob(newJob);
    setJobs(prev => addJob(prev, newJob));
  }

  function handleStatusChange(id, status) {
    setJobs(prev => updateStatus(prev, id, status));
  }

  const visibleJobs = filterJobs(jobs, filter);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Job Application Tracker</h1>
      <JobForm onAdd={handleAddJob} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <JobList jobs={visibleJobs} onStatusChange={handleStatusChange} />
    </div>
  );
}

export default App;