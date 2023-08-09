import PropTypes from 'prop-types';
function Search({ setPage , setImages, searchQuery, setSearchQuery}) {
  const handleSearch = e => {
    e.preventDefault();
    setPage(1);
    setImages([]);
    setSearchQuery(e.target.value);
  };
  return (
    <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search images..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default Search

Search.propTypes = {
  setPage: PropTypes.func,
  setImages: PropTypes.func,
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
};