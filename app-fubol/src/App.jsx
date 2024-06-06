import React, { useState } from 'react';
import StatisticsSearchBar from './components/StatisticsSearchBar';
import TeamStatistics from './components/TeamStatistics';
import SearchBar from './components/SearchBar';
import TeamList from './components/TeamList';
import './components/styles.css';
import Navbar from './Navbar';

const App = () => {
  const [teams, setTeams] = useState([]);
  const [statistics, setStatistics] = useState(null);

  const handleTeamSearch = async (query) => {
    try {
      const response = await fetch(`https://v3.football.api-sports.io/teams?search=${query}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-rapidapi-key': 'c24a7f09a0f00ddec9a8e3b8c321f815'
        }
      });
      const data = await response.json();
      setTeams(data.response);
    } catch (err) {
      console.error(err);
      alert('Se produjo un error al recuperar los datos. Inténtalo de nuevo.');
    }
  };

  const handleStatisticsSearch = async (teamId, season, league) => {
    try {
      const response = await fetch(`https://v3.football.api-sports.io/teams/statistics?team=${teamId}&season=${season}&league=${league}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-rapidapi-key': 'c24a7f09a0f00ddec9a8e3b8c321f815'
        }
      });
      const data = await response.json();

      if (data.response && Object.keys(data.response).length !== 0) {
        setStatistics(data.response);
      } else {
        setStatistics(null);
        alert('Equipo no encontrado. Verifique el ID del equipo, la temporada y la liga.');
      }
    } catch (err) {
      console.error(err);
      alert('Se produjo un error al recuperar los datos. Inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <Navbar onTeamSearch={handleTeamSearch} onStatisticsSearch={handleStatisticsSearch} />
      
      <TeamList teams={teams} />
      
      <TeamStatistics statistics={statistics} />
    </div>
  );
};

export default App;