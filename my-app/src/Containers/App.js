import React, { Component } from 'react';
import './App.css';
import styles from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit'
import {Userinput, Useroutput} from '../Assignment1/Assignment1'
import ValidationComponent from '../Assignment2/ValidationComponent/ValdationComponent';
import CharComponent from '../Assignment2/CharComponent/CharComponent';
import withClass from '../HOC/withClass';
import Aux from '../HOC/Auxiliary';
import AuthContext from '../Context/auth-context';
      
class App extends Component{
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    
    //#region Prior to ES6 we used to define state like this
      /*  
      this.state = {
        persons: [
          {id:"wwew", name: "Koko", relation: "Mother"},
          {id:"dsas", name: "Matshube", relation: "Son"},
          {id:"jgfu", name: "Tlharipane", relation: "Daughter"},
          {id:"dfdf", name: "Itumeleng", relation: "Daughter"}
        ],
        showPerson: false
      };
      */

    //#endregion
  }

  state = {
    persons: [
      {id:"wwew", name: "Koko", relation: "Mother"},
      {id:"dsas", name: "Matshube", relation: "Son"},
      {id:"jgfu", name: "Tlharipane", relation: "Daughter"},
      {id:"dfdf", name: "Itumeleng", relation: "Daughter"}
    ],
    showPerson: false,
    showCockpit: true,
    authenticated: false,
    changeCounter: 0,
    msg: ""
    
  };

  // static getDerivedStateFromProps (props, state){
  //   console.log('[App.js] getDerivedStateFromProps', props);
  //   return state;
  // }

  componentDidMount (){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[App.js] componentDidUpdate');
    console.log(snapshot);
  }

  nameChangeHandler = (event, id) => {
    //#region This is how we change state without using immutable code
     /*
    this.setState({
      persons: [
        {name: "Mirriam", relation: "Mother"},
        {name: event.target.value, r
          elation: "Son"},
        {name: "Tlharipane", relation: "Daughter"},
        {name: "Itumeleng", relation: "Last born"}
      ]
    })
    */
    //#endregion
   
    // This is immutable state change
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }  
    });
  }

  deletePersonHandler = (personIndex) => {
    // For immutable variable (ie. We use a copy of the original data)
    console.log(personIndex);
    const persons = [...this.state.persons];
    //const persons = this.state.persons.slice();
    persons.splice(personIndex, 1)
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson; 
    this.setState({showPerson : !doesShow});

  }

  authenticationHandler = () => {
    const x = this.state.authenticated
    this.setState({authenticated: !x});
    console.log(x.toString());
  }

  render(){
    console.log('[App.js] render');
    let persons = null

    if (this.state.showPerson) {
      persons = (
        <div>    
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            authenticated={this.state.authenticated}
          />
        </div>
      )
    }

    return(
      <Aux>
        <button onClick={() => {
          this.setState({showCockpit: false})
        }}>Hide cockpit</button>
        <AuthContext.Provider 
          value={{authenticated: this.state.authenticated, 
                  login:this.authenticationHandler
                }} >
          {this.state.showCockpit ? 
            <Cockpit title={this.props.title} 
                  showPerson={this.state.showPerson}
                  personsLength={this.state.persons.length}
                  clicked={this.togglePersonHandler}
                  login={this.authenticationHandler} />
            : null
          }
          { persons }
        </AuthContext.Provider>
        
      </Aux>     
     );
  };
  
}

//#region Assignment 1 questions and solution
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

//#endregion

//#region Assignment 2 questions and solution
/*
ASSIGNMENT:
1) Create an input field (in App component) with a change listener which outputs the length of the entered text below it (eg. in a paragraph).
2) Create a new component (=> ValidationComponent) which recieves the length as a prop
3) Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (eg. take 5 as a minimum length).
4) Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block; padding: 16px; text-align: center; margin: 16px; border: 1px solid black).
5) Render a list of CharComponents where each CharComponent recieves a different letter of the entered text (in the initial input field) as prop.
6) When you click a CharComponent, it should be removed from the entered text.

Hint: Keep in mind that Javascript strings are basically arrays!
*/

class Assignment_2 extends Component {
  state = {
    text: "Kefentse",
  };

  textChangeHandler = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  deleteTextCharHandler = (index) => {
    const text = this.state.text.slice(0, index) + this.state.text.slice(index + 1);
    this.setState({text: text});
  }

  render(){

    const style = {
      border: '10px dotted black',
      margin: '10px 10px 10px 10px',
      padding: '10px 10px 10px 10px'
    }
    
    const inputStyle = {
      paddingLeft: '10px',
      marginLeft: '16px'
    }

    let validationComponent = null;

    if (this.state.text.length > 0 && this.state.text.length <= 10){
      validationComponent = (
        <div>
          <ValidationComponent 
            length={this.state.text.length} 
            error="" />
        </div>
      )
    } else {
      validationComponent = (
        <div>
          <ValidationComponent 
            length={this.state.text.length} 
            error="Text too short or long enough" />
        </div>
      )
    }

    let charComponents = null;
    const textArray =  this.state.text.split('');

    if(textArray.length > 0 || textArray.length <= 0){
      charComponents = (
        <div>{ textArray.map((textChar, index) => {
          return <CharComponent 
                    char={textChar}
                    key={index}
                    clicked={() => this.deleteTextCharHandler(index)} />
        })}
        </div>
      )
    }

    return(
      <div style={style}>
        <input 
          style={inputStyle}
          type="text" 
          onChange={this.textChangeHandler} 
          value={this.state.text}/>
        { validationComponent }
        { charComponents }
      </div>
    );
  };
}
//#endregion

//export default App;
export default withClass(App, styles.App);
export {Assignment_1, Assignment_2};
//export default Person;