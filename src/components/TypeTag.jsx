import './TypeTag.scss';
import React from 'react';

const TypeTag = (props) => <span className={`type-tag ${props.typeName}`}>{props.typeName}</span>;

export default TypeTag;