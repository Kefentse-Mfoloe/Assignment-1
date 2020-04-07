import React from 'react';
import './Person.css';

const person = (props) => {
    return(
        <div className="person">
            <h1 onClick={props.click}>Name: {props.name}</h1>
            <p>Relation: {props.relation}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}
export default person;