import React from 'react';

import './Container.css';

const Container = (props) => {
  const { title = null } = props;
  return (
    <main className="container">
      {title && <h1>{title}</h1>}
      {props.children}
    </main>
  );
};

export default Container;
