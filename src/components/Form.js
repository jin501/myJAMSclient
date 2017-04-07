import React, { Component } from 'react';
import {createAction} from '../requests';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleState = this.props.handleState;
    this.state = {
      text: this.props.text,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({text: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    createAction(this.state.text)
      .then( res => { this.handleState(res); });

    debugger
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="text" value={this.state.text} onChange={this.handleChange} /> <br/>
        <input type="submit" id="submit" value="submit" />
      </form>
    );
  }
}

export default Form;
