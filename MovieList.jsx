export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search for a movie..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
