import { useState } from "react";

function JobForm({ onAdd }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(company, role, new Date().toISOString());
    setCompany("");
    setRole("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Company"
        value={company}
        onChange={e => setCompany(e.target.value)}
      />
      <input
        placeholder="Role"
        value={role}
        onChange={e => setRole(e.target.value)}
      />
      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;