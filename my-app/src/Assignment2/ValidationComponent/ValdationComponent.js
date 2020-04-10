import React from 'react';
import './ValidationComponent.css';

const validationComponent = (props) => {
    return(
        <div className="validationComponent">
            <p>{props.length} {props.error}</p>
        </div>
    );
}

export default validationComponent;
