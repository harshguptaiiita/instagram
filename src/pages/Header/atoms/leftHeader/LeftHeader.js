import React from 'react';
import Icon from '../../../../atoms/Icons';
import styles from './leftHeader.module.scss';
const LeftHeader = (props) => {

  return (
    <div>
      <Icon url = {props.url} className = {styles.logo} />
    </div>
  );
}

export default LeftHeader;
