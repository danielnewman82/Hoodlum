import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';

function mapStateToProps(state) {
  return {state};
}

function App() {
    return (
      <BrowserRouter>
          <Main />
      </BrowserRouter>
      )
  }

export default connect(mapStateToProps)(App)