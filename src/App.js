import React, { Component } from 'react';
import bodyStyle from './styles/body.css';
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className={bodyStyle.body}>
          <Nav/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
