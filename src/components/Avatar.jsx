import './Avatar.scss';
import React from 'react';

const Avatar = (props) => (
  <div className="img-container">
    <img src={props.url} alt={props.name} />
  </div>
);
 
export default Avatar;