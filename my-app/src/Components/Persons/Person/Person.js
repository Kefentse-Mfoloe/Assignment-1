import React, { Component } from 'react';
import styles from './Person.module.css';
import Aux from '../../../HOC/Auxiliary';
import withClass from '../../../HOC/withClass';
import AuthContext from '../../../Context/auth-context';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    static contextType = AuthContext;
    
    render(){
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                {this.context.authenticated ? <p>User authenticated!</p> : <p>Please login</p>}
                <h1 onClick={this.props.click}>Name: {this.props.name}</h1>
                <p>Relation: {this.props.relation}</p>
                <input type="text" 
                        onChange={this.props.changed} 
                        value={this.props.name}
                        ref={this.inputElementRef} />
            </Aux>
        );
    }
}
export default withClass(Person, styles.person);