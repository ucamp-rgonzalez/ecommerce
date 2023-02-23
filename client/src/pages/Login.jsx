import React from 'react';

import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/')
  };

  return (
    <div>
      <h1>Login</h1>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
