import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  render() {
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello from React')
    // );
    return (
      <div className='App'>
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
