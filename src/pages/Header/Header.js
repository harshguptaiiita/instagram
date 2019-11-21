import React, { Component } from 'react';
import LeftHeader from './atoms/leftHeader';

class Header extends Component {


  render() {
    return (
      <div>
        <LeftHeader url = {`https://image.slidesharecdn.com/instagram-icon-vector-161127155608/95/instagram-icon-vector-free-download-1-638.jpg?cb=1480262215`} />
      </div>
    )

  }
}


export default Header;

