import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import {Userinput, Useroutput} from './Assignment1/Assignment1';
import { render } from 'react-dom';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  };
  
}

class People extends Component{
  state = {
    Persons: [
      {name: "Koko", relation: "Mother"},
      {name: "Matshube", relation: "Son"},
      {name: "Tlharipane", relation: "Daughter"},
      {name: "Itumeleng", relation: "Daughter"}
    ]
  };

  switchNameEventHandler = (newName) => {
    //console.log("Boom!");
    this.setState({
      Persons: [
        {name: "Mirriam", relation: "Mother"},
        {name: newName, relation: "Son"},
        {name: "Tlharipane", relation: "Daughter"},
        {name: "Itumeleng", relation: "Last born"}
      ]
    })
  };

  nameChangeHandler = (event) => {
    this.setState({
      Persons: [
        {name: "Mirriam", relation: "Mother"},
        {name: event.target.value, relation: "Son"},
        {name: "Tlharipane", relation: "Daughter"},
        {name: "Itumeleng", relation: "Last born"}
      ]
    })
  }

  render(){

    const style = {
      backgroundColor: 'yellow',

    }
    return(
      <div>
       <button 
       style = {style}
       onClick = {this.switchNameEventHandler.bind(this, "Nehemiah")      
       }>Click Me</button> 
       <Person name={this.state.Persons[0].name} 
              relation={this.state.Persons[0].relation}
              click = {this.switchNameEventHandler.bind(this, "Miles!")} />
       <Person name={this.state.Persons[1].name} 
              relation={this.state.Persons[1].relation} 
              changed={this.nameChangeHandler}
              /> 
       <Person name={this.state.Persons[2].name} 
              relation={this.state.Persons[2].relation} />
       <Person name={this.state.Persons[3].name} 
              relation={this.state.Persons[3].relation} />
      </div>
     );
  };
  
}

class Assignment_1 extends Component {
  state = {
    Student : {
      username: "Default",
      age: 18 
    }
  };
  
  switchStudentEventHandler = (newStudent) => {
    this.setState({
      Student : {
        username : newStudent.username,
        age : newStudent.age
      }
    })
  };

  studentDetailsChangeHandler = (event) => {
    this.setState({
      Student : {
        username : event.target.value,
        age : 26
      }
    })
  }

  render(){
    return(
      <div className="Assignment1">
        <button onClick={this.switchStudentEventHandler.bind(this, {username:"Dominic", age:40})}>CLICK ME</button>
        <Userinput username={this.state.Student.username}
          studentchange = {this.studentDetailsChangeHandler}
        />
        <Useroutput username = {this.state.Student.username}
          age = {this.state.Student.age} />
      </div>
    );
  };
}

export default App;
export {People, Assignment_1};
//export default Person;

/*

ASSIGNMENT:
1) Create TWO new components: UserInput and UserOutput
2) UserInput should hold an input element, UserOutput two paragraphs
3) Output multiple UserOutput components in the App component (any paragraph texts of your choice)
4) Pass a username (of your choice) to UserOutput via props and display it there
5) Add state to the App component (=> the username) and pass the username to the UserOutput component
6) Add a method to manipulate the state (=> an event-handler method)
7) Pass the event-handler method reference to the UserInput component and bind it to the input-change event
8) Ensure that the new input entered by the user overwrites the old username passed to UserOutput
9) Add two-way-binding to your input (in UserInput) to also display the starting username
10) Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets

*/