// src/components/Invitation.js
import React from 'react';

function Invitation({ movie }) {
  return (
    <div className="screen invitation">
      <img src="/flor.jpg" alt="Convite" className="invitation-image" />
      <h2>Convite para uma Noite Especial</h2>
      <p className="invitation-text">
        Você está sendo convidada a se juntar a mim (o amor da sua vida) para assistir ao filme
        <strong> "{movie}"</strong> às <strong>18:50</strong>, na sala platinum do cinema Kinoplex do shopping Parque da Cidade.
        <br /><br />
        <em>Me disseram que é um cinema top.</em> Se prepare para uma noite incrível junto a mim!
        <br /><br />
        <strong>PS:</strong> Convidado só é permitido a entrar no filme, caso concorde em ficar abraçado o filme inteiro com o remetente - Regras do estabelecimento
      </p>
    </div>
  );
}

export default Invitation;