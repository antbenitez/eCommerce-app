import React from 'react';
import Comment from './components/Comment.jsx';
import RelatedProducts from './components/RelatedProd.jsx';
import Stars from './components/Stars.jsx';
import Accordion from './components/Accordion.jsx';
import Table from './components/Table.jsx';
import productDetails from './assets/details.json';
import QuantitySelector from './components/QuantitySelector.jsx';
import Button from './components/Button.jsx';

function App() {
  const reviewData = {
    stars: 4,
    title: '“La mejor computadora que he comprado”',
    date: '18/09/22',
    text: 'Funciona bastante rápida y confiable, de inicio un pequeño problema con drivers, pero ya solucionado después de una visita al fabricante para su habilitación.',
  };

  return (
    <div>
      <RelatedProducts />
      <Comment reviewData={reviewData} />
      <Stars reviewData={reviewData} />
      <Accordion title="Generales">
        <Table rows={productDetails} />
      </Accordion>
      <QuantitySelector />
      <QuantitySelector value={30} />
      <QuantitySelector value={100} />
      <Button type="primary">Comprar ahora</Button>
      <Button type="primary" disabled={true}>
        Comprar ahora
      </Button>
      <Button type="secondary">Comprar ahora</Button>
      <Button type="secondary" disabled={true}>
        Comprar ahora
      </Button>
      <Button type="tertiary">Comprar ahora</Button>
      <Button type="tertiary" disabled={true}>
        Comprar ahora
      </Button>
    </div>
  );
}

export default App;
