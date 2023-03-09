import React from 'react';

import Container from '../components/Container/Container.jsx';
import Button from '../components/Button/Button.jsx';
import Card from '../components/Card/Card.jsx';

const Home = () => {
  const list = [
    {
      id: 1,
      name: 'Nombre',
      description: 'Desc',
    },
    {
      id: 2,
      name: 'Nombre',
      description: 'Desc',
      action: <Button type="danger">Action</Button>,
    },
    {
      id: 3,
      name: 'Nombre',
      description: 'Desc',
      image:
        'https://www.biographic.com/wp-content/uploads/2019/09/fangtooth-moray-eel-Enchelycore-anatina.jpg',
    },
    {
      id: 4,
      name: 'Nombre',
      description: 'Desc',
      action: <Button type="danger">Action</Button>,
      image:
        'https://www.biographic.com/wp-content/uploads/2019/09/fangtooth-moray-eel-Enchelycore-anatina.jpg',
    },
  ];

  return (
    <Container title="Products">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'nowrap',
        }}
      >
        {list.map(({ id, name, action, image }) => (
          <Card
            key={id}
            action={action}
            content={<h4>{name}</h4>}
            image={image}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
