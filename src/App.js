// src/App.js
import React, { useState } from 'react';
import FreeTime from './components/FreeTime';
import ChooseMovie from './components/ChooseMovie';
import Invitation from './components/Invitation';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [movie, setMovie] = useState(null);

  const handleNextStep = (selectedMovie) => {
    setMovie(selectedMovie);
    setStep(step + 1);
  };

  return (
    <div className="app">
      {step === 1 && <FreeTime onContinue={() => setStep(2)} />}
      {step === 2 && <ChooseMovie onSelectMovie={handleNextStep} />}
      {step === 3 && <Invitation movie={movie} />}
    </div>
  );
}

export default App;