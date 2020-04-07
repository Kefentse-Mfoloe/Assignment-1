import React from 'react';
import './Assignment1.css';

export const Userinput = (props) => {
    return(
        <div>
            <h1>Hello World</h1>
            <input className="stdIn" type="text" onChange={props.studentchange}  value={props.username}/>
        </div>
    );
};

export const Useroutput = (props) => {
    return(
        <div>
            <p>Hello world! My name is {props.username}.</p>
            <p>I am {props.age} years old and this is assignment 1.</p>
        </div>
    );
};

//export default userinput;
//export {useroutput};
