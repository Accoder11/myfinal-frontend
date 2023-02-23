import React, { useState } from 'react';

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/search?q=${searchQuery}`);
    const data = await response.json();
    if (data.length > 0) {
      setSearchResults(data);
      setNoResults(false);
    } else {
      setSearchResults([]);
      setNoResults(true);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex" role="search">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      {noResults ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {searchResults.map((post) => (
            <li key={post.id} onClick={() => (window.location.href = `/posts/${post.id}`)}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>{post.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchForm;
