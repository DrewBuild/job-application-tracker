function FilterBar({ filter, setFilter }) {
  return (
    <select value={filter} onChange={e => setFilter(e.target.value)}>
      <option>All</option>
      <option>Applied</option>
      <option>Interview</option>
      <option>Offer</option>
      <option>Rejected</option>
    </select>
  );
}

export default FilterBar;