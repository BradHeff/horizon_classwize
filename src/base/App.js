import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import { linkChange, statusChange } from '../Redux/action';
import { connect } from 'react-redux';

import Home from '../Contents/Home';

const mapStateToProps = state => {
   return {
      link: state.BaseReducer.link,
      status: state.BaseReducer.status,
      time: state.BaseReducer.time,
   }
}

const mapDispatchToProps = (dispatch) => {
   return { 
      onLinkChange: (link) => dispatch(linkChange(link)),
      onStatusChange: (link) => dispatch(statusChange(link)),
      updateState: () => dispatch({ type: "TIME" }),
   }
}

class App extends Component {
   componentDidMount() {
      setInterval(() => this.checkTime(), 1000);
   }
   checkTime = () => {
      console.log(this.props.time.getHours())
      this.props.updateState()      
   }
   render() {
      if(this.props.time.getHours() < 9){
         this.props.onStatusChange("offline")
      } else {
         if(this.props.time.getHours() > 15) {
            this.props.onStatusChange("offline")
         } else {
            this.props.onStatusChange("active")
         }
         
      }
     return (
        <Routes>
            <Route path='/' exact element={<Home status={this.props.status}/>}/>           
        </Routes>
     );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);