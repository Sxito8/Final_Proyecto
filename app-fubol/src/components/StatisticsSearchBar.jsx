import React, { useState } from 'react';

const StatisticsSearchBar = ({ onSearch }) => {
  const [teamId, setTeamId] = useState('');
  const [season, setSeason] = useState('');
  const [league, setLeague] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(teamId, season, league);
  };

  return (
    
    <form onSubmit={handleSubmit} className="search-bar">
      <h1>Búsqueda de estadísticas del equipo</h1>
      <input
        type="text"
        value={teamId}
        onChange={(e) => setTeamId(e.target.value)}
        placeholder="Equipo ID"
        required
      />
      <input
        type="text"
        value={season}
        onChange={(e) => setSeason(e.target.value)}
        placeholder="Año"
        required
      />
      <input
        type="text"
        value={league}
        onChange={(e) => setLeague(e.target.value)}
        placeholder="Liga ID"
        required
      />
      <button type="submit">Buscar Estadisticas</button>
    </form>
  );
};

export default StatisticsSearchBar;
