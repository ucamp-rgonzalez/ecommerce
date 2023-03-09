import React from 'react';


const Products = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Productos</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" />
        <button type='submit'>Agregar</button>
      </form>
    </div>
  );
};

export default Products;
