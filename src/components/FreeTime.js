// src/components/FreeTime.js
import React from 'react';

function FreeTime({ onContinue }) {
  const handleNoClick = () => {
    alert("Resposta errada malandrinha! Tente novamente.");
  };

  return (
    <div className="screen free-time">
      <h2>Você está livre no sábado?</h2>
      <div className="button-group">
        <button onClick={onContinue}>Sim</button>
        <button onClick={handleNoClick}>Não</button>
      </div>
    </div>
  );
}

export default FreeTime;