import React, { useState } from 'react';
import './components/styles.css';
import SearchBar from './components/SearchBar';
import StatisticsSearchBar from './components/StatisticsSearchBar';

const Navbar = ({ onTeamSearch, onStatisticsSearch }) => {
    const [menuVisible, setMenuVisible] = useState(false);
  
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
  
    const handleShowLigaIDs = () => {
      // Abre una nueva ventana
      const newWindow = window.open('', '_blank', 'width=400,height=200');
  
      // Escribe el mensaje en la nueva ventana
      newWindow.document.write('<html><body><p> LaLiga - 140 <br> Premier League - 39 <br> Ligue One - 61 <br> Serie A - 135 <br> Primeira Liga - 94</p></body></html>');
  
      // Cierra el documento para que los estilos se apliquen
      newWindow.document.close();
    };
  
    const handleShowHelloMessage = () => {
      // Muestra una alerta con el mensaje "Hola"
      alert('Hola');
    };
  
    return (
      <div className="navbar">
        <button onClick={handleShowLigaIDs} className="left-button">ID de las 5 grandes ligas</button>
        <button onClick={toggleMenu} className="toggle-menu-button">
          {menuVisible ? 'Cerrar' : 'Abrir'} Menú
        </button>
        {menuVisible && (
          <div className="menu">
            <SearchBar onSearch={onTeamSearch} />
            <StatisticsSearchBar onSearch={onStatisticsSearch} />
          </div>
        )}
      </div>
    );
  };
  
  export default Navbar;