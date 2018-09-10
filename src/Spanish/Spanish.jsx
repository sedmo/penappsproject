import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Database from '../firebase';


class Spanish extends Component{
    constructor(props) {
        super(props);
        this.state={text:'',
                    value:''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
    }
    handleSubmit(event)  {
        Database.collection("spanish").add({
            def: this.state.text,
            text: this.state.value
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        event.preventDefault();

    }

    handleValueChange(event) {
        this.setState({value: event.target.value});
      }
    handleTextChange(event) {
    this.setState({text: event.target.value});
    }
    render(){
        return (
        <Form inline={true} onSubmit={this.handleSubmit}>
            <p>TEXT: {this.state.text}
            <br/>
            VALUE: {this.state.value}</p>
          <Input label="Text" floatingLabel={true} value={this.state.text} onChange={this.handleTextChange}/>
          <Input label="Value" floatingLabel={true} value={this.state.value} onChange={this.handleValueChange}/>
          <Button type="submit" >submit</Button>
        </Form>
      );
    };
  
}

export default Spanish;