import React from 'react';

import { Layout } from 'antd';
import {Link} from 'react-router-dom';

const Header = props => {
  return (
    <Layout.Header>
      <ul style={{display: 'flex'}}>
        <li>
          <Link to="/products">Productos</Link>
        </li>
        <li>
          <Link to="/login">Iniciar Sesion</Link>
        </li>
      </ul>
    </Layout.Header>
  );
};

export default Header;