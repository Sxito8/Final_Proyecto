import React from 'react';
import './styles.css';

const TeamList = ({ teams, onTeamClick }) => {
  const handleTeamClick = async (teamId, teamName) => {
    // Llama a la función onTeamClick si existe
    if (onTeamClick) {
      onTeamClick(teamId);
    }

    // Abre una nueva ventana
    const newWindow = window.open('', '_blank', 'width=800,height=600');

    // Escribe la estructura básica del HTML
    newWindow.document.write(`
    <html>
    <head>
      <title>Información del equipo</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #1f1f1f;
          color: #ffffff;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 800px;
          margin: 20px auto;
          padding: 20px;
          background-color: #2f2f2f;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }
        .content {
          text-align: center;
        }
        .player-list {
          list-style-type: none;
          padding: 0;
          margin-top: 20px;
        }
        .player-list li {
          margin: 10px 0;
          padding: 10px;
          background-color: #3f3f3f;
          border-radius: 5px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1 class="content">Información del equipo</h1>
        <p class="content">Equipo: ${teamName} (ID: ${teamId})</p>
        <p class="content" id="league-info">Cargando información de la liga...</p>
        <h2 class="content">Jugadores</h2>
        <ul class="player-list" id="player-list">
          <li>Cargando jugadores...</li>
        </ul>
      </div>
    </body>
  </html>
`);

    // Cierra el documento para que los estilos se apliquen
    newWindow.document.close();

    try {
      // Haz una solicitud para obtener la liga del equipo
      const leagueResponse = await fetch(`https://v3.football.api-sports.io/leagues?team=${teamId}&season=2022`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-rapidapi-key': 'c24a7f09a0f00ddec9a8e3b8c321f815'
        }
      });
      const leagueData = await leagueResponse.json();
      const league = leagueData.response[0].league;

      // Actualiza la información de la liga en la nueva ventana
      const leagueInfo = newWindow.document.getElementById('league-info');
      leagueInfo.textContent = `Liga: ${league.name} (ID: ${league.id})`;

      // Haz una solicitud para obtener los jugadores del equipo
      const playerResponse = await fetch(`https://v3.football.api-sports.io/players?team=${teamId}&season=2023`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-rapidapi-key': 'c24a7f09a0f00ddec9a8e3b8c321f815'
        }
      });
      const playerData = await playerResponse.json();
      const players = playerData.response;

      // Actualiza la lista de jugadores en la nueva ventana
      const playerList = newWindow.document.getElementById('player-list');
      playerList.innerHTML = '';
      players.forEach(player => {
        const li = newWindow.document.createElement('li');
        li.textContent = `${player.player.name} - ${player.statistics[0].games.position}`;
        playerList.appendChild(li);
      });
    } catch (err) {
      console.error(err);
      alert('Se produjo un error al recuperar los datos. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="team-list">
      {teams.map((team) => (
        <div
          key={team.team.id}
          className="team-item"
          onClick={() => handleTeamClick(team.team.id, team.team.name)}
        >
          <img src={team.team.logo} alt={team.team.name} className="team-logo" />
          <p>{team.team.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamList;
