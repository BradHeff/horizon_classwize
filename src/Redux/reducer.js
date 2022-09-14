import {
   LINK,STATUS, TIME } from './constants';

const initialState = {
   link: '',
   status: 'offline',
   time: new Date()
}

export const BaseReducer = (state=initialState, action={}) => { 
   switch(action.type) {
      case LINK:
         return Object.assign({}, state, {link: action.payload});
      case STATUS:
         return Object.assign({}, state, {status: action.payload});
      case TIME:
         return Object.assign({}, state, {time: new Date()});
      default:
         return state;
   }
}