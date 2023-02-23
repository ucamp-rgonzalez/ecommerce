import React from 'react';

import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import Header from './Header.jsx';

const _Layout = () => {
  return (
    <Layout style={{height: '100vh'}}>
      <Header />
      <Outlet />
    </Layout>
  );
};

export default _Layout;