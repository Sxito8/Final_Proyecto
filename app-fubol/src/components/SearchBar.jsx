import React, { useState } from 'react';
import './styles.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <h1>Búsqueda de equipos de fútbol</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar un equipo"
        required
      />
      <button type="Buscar">Search</button>
    </form>
  );
};

export default SearchBar;
