import './Card.scss';
import React from 'react';
import Avatar from './Avatar';
import TypeTag from './TypeTag';
import * as Format from '../util/Format';

const Card = (props) => (
  <li className="card">
    <h3>
      <span className="number">#{Format.pkmnID(props.number)}</span>
      <span className="name">{Format.pkmnName(props.name)}</span>
    </h3>

    <p className="types">
      {props.types.map((type, i) => <TypeTag typeName={type} key={i}>{type}</TypeTag>)}
    </p>

    <Avatar url={props.sprite} name={props.name}/>

  </li>
);

export default Card;