export function validateJob(job) {
  if (!job.company || job.company.trim() === "") {
    throw new Error("Company is required");
  }
  if (!job.role || job.role.trim() === "") {
    throw new Error("Role is required");
  }
  return true;
}

export function addJob(jobs, newJob) {
  return [...jobs, newJob];
}

export function updateStatus(jobs, id, newStatus) {
  return jobs.map(job =>
    job.id === id ? { ...job, status: newStatus } : job
  );
}

export function filterJobs(jobs, status) {
  if (status === "All") return jobs;
  return jobs.filter(job => job.status === status);
}