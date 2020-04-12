import React from 'react';
import styles from './Person.module.css';
import styled from 'styled-components';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return(
        <div className={styles.person}>
            <h1 onClick={props.click}>Name: {props.name}</h1>
            <p>Relation: {props.relation}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}
export default person;