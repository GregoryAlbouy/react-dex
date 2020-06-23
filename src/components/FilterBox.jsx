import './FilterBox.scss';
import React, { useState, useEffect } from 'react';
import FormSlider from './FormSlider';
import TypeTagButton from './TypeTagButton'
import { StatEnum } from '../util/Format';

const TYPES = [ 'normal', 'fighting', 'flying', 'poison', 'ground', 'rock',
                'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric',
                'psychic', 'ice', 'dragon', 'dark', 'fairy' ];

const MAX_STAT_VALUE = 255;
// const STATS_QUANTITY = Object.keys(StatEnum).length;
// const STATS_SUM_MAX_VALUE = MAX_STAT_VALUE * STATS_QUANTITY

const FilterBox = (props) => {

  const submitFilters = () => {
    props.onSubmit(filters)
  };

  const handleFilterChange = (event, filterType) => {
    const updatedFilters = { ...filters };
    updatedFilters[filterType] = event.currentTarget.value;
    setFilters(updatedFilters)
  };

  const handleGenChange = (event) => {
    setGen(event.currentTarget.value)
    handleFilterChange(event, 'gen')
  };

  const handleTypeTagButtonClick = (typeName, element) => {
    const slots = [...selectedTags];
    
    const addToSelection = () => {
      if (!slots[0]) slots[0] = typeName;

      else {
        const erasedValue = slots[1];
        slots[1] = typeName;

        if (erasedValue !== '') {
          element.parentNode.childNodes.forEach((el) => {
            if (el.classList.contains(erasedValue)) el.classList.add('disabled');
          })
        }
      }
      
      element.classList.remove('disabled');
    };

    const removeFromSelection = () => {
      if (slots[0] === typeName) {
        slots[0] = slots[1];
        slots[1] = '';
      } else if (slots[1] === typeName) {
        slots[1] = '';
      }

      element.classList.add('disabled');
    };

    slots.includes(typeName) ? removeFromSelection() : addToSelection();

    setSelectedTags(slots);
    setFilters({ ...filters, types: slots });
  };

  const renderStatFilterInput = (statEnumKey, i) => (
    <label key={i} className="stat-input">
      <FormSlider
        max={MAX_STAT_VALUE}
        handleChange={(event) => handleFilterChange(event, StatEnum[statEnumKey])}
      />
      <span>{statEnumKey}</span>
    </label>
  );

  const [isOpen, setIsOpen] = useState(false);

  const [gen, setGen] = useState(1);

  const [filters, setFilters] = useState({});
  useEffect(submitFilters, [filters]);

  const [selectedTags, setSelectedTags] = useState(['', '']);

  return (
    <div className={`filter-box ${isOpen ? 'open' : ''}`}>
      <form>
        <fieldset>
          <legend>General filters</legend>

          <input type="text" className="input-name" placeholder="Name..." onChange={(event) => handleFilterChange(event, 'name')} />

          <select className="select-gen" onChange={handleGenChange} value={gen}>
            <option value="1">Gen 1</option>
            <option value="2">Gen 2</option>
            <option value="3">Gen 3</option>
            <option value="4">Gen 4</option>
            <option value="5">Gen 5</option>
            <option value="6">Gen 6</option>
            <option value="7">Gen 7</option>
            <option value="0">Gotta catch 'em all!</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>By type</legend>

          <div className="types-container">
            {TYPES.map((typeName, i) => <TypeTagButton key={i} onClick={handleTypeTagButtonClick} typeName={typeName} isButton={true}/>)}
          </div>
        </fieldset>

        <fieldset>
          <legend>By stat min. value</legend>

          {Object.keys(StatEnum).map(renderStatFilterInput)}
        </fieldset>
      </form>
      
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>filters</button>
    </div>
  );
};
 
export default FilterBox;