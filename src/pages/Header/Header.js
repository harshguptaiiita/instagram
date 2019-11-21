import React, { Component } from 'react';
import LeftHeader from './atoms/leftHeader';

import styles from './header.module.scss';
class Header extends Component {


  render() {
    return (
      <div className = {styles.header}>
        <LeftHeader url = {`https://image.slidesharecdn.com/instagram-icon-vector-161127155608/95/instagram-icon-vector-free-download-1-638.jpg?cb=1480262215`} />
        <div className= {styles.separator}></div>
      </div>
    )

  }
}


export default Header;

