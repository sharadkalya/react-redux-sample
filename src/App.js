import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './assets/images/logo.svg';
import { changeTitle } from './actions/MyAction';
import './assets/App.css';

class App extends Component {

  updateTitle = e => {
    this.props.changeTitle(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Title is stored in redux store and is updated when updateTitle is called inside src/App.js
        </p>
        <input type="text" onChange={this.updateTitle} value={this.props.title} />
        <h3>
          TITLE: {this.props.title}
        </h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.MyReducer.title
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeTitle: (title) => dispatch(changeTitle(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);