export function createJob({ company, role, date }) {
  return {
    id: crypto.randomUUID(),
    company,
    role,
    date,
    status: "Applied"
  };
}