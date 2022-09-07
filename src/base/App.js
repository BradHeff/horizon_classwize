import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import { linkChange } from '../Redux/action';
import { connect } from 'react-redux';

import Home from '../Contents/Home/Home';

const mapStateToProps = state => {
   return {
      link: state.BaseReducer.link
   }
}

const mapDispatchToProps = (dispatch) => {
   return { 
      onLinkChange: (link) => dispatch(linkChange(link))
   }
}

class App extends Component {
  render() {
     return (
        <Routes>
            <Route path='/' exact element={<Home/>}/>           
        </Routes>
     );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);