import React, { Component } from 'react';
import Form from './components/Form';
import ActionList from './components/ActionList';
import {getData} from './requests';


class App extends Component {
  constructor(){
    super();
    // this.props.updateState = this.updateState.bind(this);
    this.state={
      data: [],
      inputText: ""
    }
  }

  componentWillMount(){
    let events = [];
    getData()
    .then((res) => {
      res.forEach(el =>{
        events = [...events, el.event]
      })
      return events
    })
    .then((res, component = this) => {
      component.setState({data: res})
    })
  }

  updateState(newState){
    const data =  [...this.state.data, newState.event]
    this.setState({data: data, inputText:""})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>myJAMS</h2>
        </div>
        <div className="App-body">
          <ActionList actions={this.state.data}/>
          <Form handleState={this.updateState.bind(this)} text={this.state.inputText} />
        </div>
      </div>
    );
  }
}

export default App;
