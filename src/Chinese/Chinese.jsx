import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Database from '../firebase.js';


class Chinese extends Component{
    constructor(props) {
        super(props);
        this.state={text:'',
                    value:''};
    }
    handleValueChange(event) {
        this.setState({value: event.target.value});
      }
    handleTextChange(event) {
    this.setState({text: event.target.value});
    }
    handleSubmit() {
                            
        Database.collection("chinese").add({
            def: this.state.text,
            text: this.state.value
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    render(){
        return (
            <div>
                <Form inline={true} onSubmit={this.handleSubmit}>
                <Input label="Text" floatingLabel={true} value={this.state.text} onChange={this.handleTextChange}/>
                <Input label="Value" floatingLabel={true} value={this.state.value} onChange={this.handleValueChange}/>
                <Button type="submit">submit</Button>
                </Form>
            </div>
        
        
      );
    };
  
}

export default Chinese;