import React from 'react';

const Radio = (props) => {
  const { label, name } = props;
  return (
    <label>
      {label}
      <input name={name} type='radio' />
    </label>
  );
};

const Products = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Productos</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" />
        <div>
          <Radio label='S' name='size' />
          <Radio label='M' name='size' />
          <Radio label='X' name='size' />
        </div>
        <button type='submit'>Agregar</button>
      </form>
    </div>
  );
};

export default Products;
