import React from 'react';

import styles from './Card.module.css';

/*
  children => React
*/

const imageStyle = (url) => ({
  backgroundImage: `url(${url})`,
  height: '100px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

const Card = (props) => {
  const { action = null, content, image = null } = props;

  return (
    <div className={styles.card}>
      {image && <div className="image" style={imageStyle(image)} />}

      <div className={styles.content}>
        <div>{content}</div>

        {action && (
          <React.Fragment>
            <hr />
            <div className={styles.action}>{action}</div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Card;
