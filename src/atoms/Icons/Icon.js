import React from 'react';

import styles from './icon.module.scss';

const Icon = (props) => {

  return (
      <img src = {props.url} className = {`${styles.logo} ${props.className}`}/>
  );
}

export default Icon;
