export default function Pagination({ page, totalPages, onPrevious, onNext }) {
  return (
    <footer className="pagination">
      <button onClick={onPrevious} disabled={page === 1}>Previous</button>
      <span>Page {page}</span>
      <button onClick={onNext} disabled={page >= totalPages}>Next</button>
    </footer>
  );
}
