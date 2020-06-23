import React from 'react';
import './Avatar.scss';

const Avatar = (props) => (
  <div className="img-container">
    <img src={props.url} alt={props.name} />
  </div>
);
 
export default Avatar;