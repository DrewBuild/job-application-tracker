export function validateJob(job){

if(!job.company || !job.role){
throw new Error("Invalid job");
}

}

/* =========================
ADD JOB
========================= */

export function addJob(list, job){

return [...list, job];

}

/* =========================
UPDATE STATUS
========================= */

export function updateStatus(list, id, status){

return list.map(job =>
job.id === id ? { ...job, status } : job
);

}

/* =========================
FILTER JOBS
========================= */

export function filterJobs(list, filter){

if(filter === "All") return list;

return list.filter(job => job.status === filter);

}

/* =========================
SORT JOBS
========================= */

export function sortJobs(list, sort){

if(sort === "Newest"){

return [...list].sort(
(a,b) => new Date(b.date) - new Date(a.date)
);

}

if(sort === "Oldest"){

return [...list].sort(
(a,b) => new Date(a.date) - new Date(b.date)
);

}

return list;

}

/* =========================
SALARY FORMATTER
========================= */

export function formatSalary(value){

if(!value) return "";

let formatted = value.trim();

/* add $ if missing */

if(!formatted.startsWith("$")){
formatted = "$" + formatted;
}

/* normalize spaces */

formatted = formatted.replace(/\s+/g,"");

return formatted;

}