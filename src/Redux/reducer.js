import {
   LINK } from './constants';

const initialState = {
   link: ''
}

export const BaseReducer = (state=initialState, action={}) => { 
   switch(action.type) {
       case LINK:
           return Object.assign({}, state, {link: action.payload});
       default:
           return state;
   }
}