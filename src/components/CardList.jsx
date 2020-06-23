import './CardList.scss';
import Card from './Card';
import React from 'react';
import Loader from './Loader';

const CardList = (props) => {
  const showList = () => props.list.length !== 0 ?
    <ul className="card-list">
      {props.list.map((pkmn, i) => (
        <Card
          key={i}
          number={pkmn.id}
          name={pkmn.name}
          sprite={pkmn.sprite}
          stats={pkmn.stats}
          weight={pkmn.weight}
          height={pkmn.height}
          types={pkmn.types}
        />
      ))}
    </ul>

    : <p className="no-match-message">Not even a nibble...</p>;

  return props.isReady ? showList() : <Loader />;
}
 
export default CardList;