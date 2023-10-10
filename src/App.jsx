import React from 'react';
import Comment from './components/Comment.jsx';
import RelatedProducts from './components/RelatedProd.jsx';
import Stars from './components/Stars.jsx';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs.jsx';

function App() {
  const reviewData = {
    stars: 4,
    title: "“La mejor computadora que he comprado”",
    date: "18/09/22",
    text: "Funciona bastante rápida y confiable, de inicio un pequeño problema con drivers, pero ya solucionado después de una visita al fabricante para su habilitación."
  };

  return (
    <div>
      <Breadcrumbs />
      <RelatedProducts />
      <Comment reviewData={reviewData} />
      <Stars reviewData={reviewData} />
    </div>
    
  );
}

export default App;