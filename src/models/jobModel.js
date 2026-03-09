export function createJob(data){

return{
id: Date.now() + Math.random(),
company: data.company?.trim() || "",
role: data.role?.trim() || "",
location: data.location || "",
salary: data.salary || "",
link: data.link || "",
notes: data.notes || "",
status: data.status || "Applied",
date: data.date || new Date()
};

}