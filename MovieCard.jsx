export default function SortDropdown({ value, onChange }) {
  return (
    <select className="sort-select" value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">Sort By</option>
      <option value="release-desc">Release Date (Desc)</option>
      <option value="release-asc">Release Date (Asc)</option>
      <option value="rating-desc">Rating (Desc)</option>
      <option value="rating-asc">Rating (Asc)</option>
    </select>
  );
}
