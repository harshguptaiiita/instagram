import React from 'react';

const Icon = (props) => {

  return (
    <div className = {props.className}>
      <img src = {props.url} />
    </div>
  );
}

export default Icon;
