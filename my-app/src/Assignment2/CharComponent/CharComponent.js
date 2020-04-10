import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return(
        <div className="charComponent" onClick={props.clicked}>
            {props.char}
        </div>
    ) 
}

export default charComponent;