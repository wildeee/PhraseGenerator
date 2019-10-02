import React from 'react';
import './App.css';

const randomBackgroundNumber = Math.floor(Math.random() * 11) + 1;

function App() {
  return (
    <div className="App">
      <div
        className="background"
        style={{backgroundImage: `url('/wallpapers/wallpaper-${randomBackgroundNumber}.jpg')`}}
      />
      <div className="text-container">
        <p className="phrase">
          "Hoje rirão do seu esforço. Amanhã, rirão do seu fracasso."
        </p>
        <p className="author">Autor desconhecido</p>
      </div>
    </div>
  );
}

export default App;
