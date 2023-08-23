import React from 'react';
import Comment from './components/Comment.jsx';

function App() {
  const reviewData = {
    stars: 4,
    title: "“La mejor computadora que he comprado”",
    date: "18/09/22",
    text: "Funciona bastante rápida y confiable, de inicio un pequeño problema con drivers, pero ya solucionado después de una visita al fabricante para su habilitación."
  };

  return (
    <Comment reviewData={reviewData} />
  );
}

export default App;