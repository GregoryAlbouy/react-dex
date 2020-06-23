import './TypeTag.scss';
import React, { useRef } from 'react';

const TypeTagButton = (props) => {

  const element = useRef(null)

  const handleClick = () => {
    props.onClick(props.typeName, element.current)
  }

    return (
      <span
        ref={element}
        className={`type-tag ${props.typeName} disabled`}
        onClick={handleClick}
      >
        {props.typeName}
      </span>
    );
}

export default TypeTagButton