import React, { Component } from 'react';
import ComponentWillMount from './sections/life-cycle/componentWillMount';
import Render from './sections/life-cycle/render';
import EjemploComponentDidMount from './sections/life-cycle/componentDIdMount';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ComponentWillMount></ComponentWillMount>
        <Render></Render>
        <EjemploComponentDidMount></EjemploComponentDidMount>
      </div>
    );
  }
}

export default App;
