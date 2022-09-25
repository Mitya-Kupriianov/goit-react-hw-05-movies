import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSubmitMovies }) => {
  const [query, setQuery] = useState('');

  const handleQuery = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    onSubmitMovies(query);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Search</button>
        <input type="text" onChange={handleQuery} />
      </form>
    </>
  );
};

Search.propTypes = {
  onSubmitMovies: PropTypes.func.isRequired,
};

export default Search;
