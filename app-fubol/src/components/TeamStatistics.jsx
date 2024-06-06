import React from 'react';
import './styles.css';

const TeamStatistics = ({ statistics }) => {
  if (!statistics) {
    return;
  }

  return (
    <div>
      <h2>{statistics.team.name} - {statistics.league.name}</h2>
      <table className="statistics-table">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Datos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Partidos jugados</td>
            <td>{statistics.fixtures.played.total}</td>
          </tr>
          <tr>
            <td>Ganados</td>
            <td>{statistics.fixtures.wins.total}</td>
          </tr>
          <tr>
            <td>Empatados</td>
            <td>{statistics.fixtures.draws.total}</td>
          </tr>
          <tr>
            <td>Perdidos</td>
            <td>{statistics.fixtures.loses.total}</td>
          </tr>
          </tbody>
      </table>
      <table className="statistics-table">
      <thead>
          <tr>
            <th>Goles</th>
            <th>Datos</th>
          </tr>
        </thead>
      <tbody>
         <tr>
            <td>Goles a favor</td>
            <td>{statistics.goals.for.total.total}</td>
          </tr>
          <tr>
            <td>Goles en contra</td>
            <td>{statistics.goals.against.total.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TeamStatistics;
