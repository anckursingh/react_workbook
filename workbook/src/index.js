import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CommentBox from './commentbox'
import Counter from './counter'
//import store from './store'


//import counter from './counter';
import RouterCustom from './RouterCustom'

ReactDOM.render(
     <RouterCustom/>,

document.getElementById('root'));
////  <Provider store={store}> 
//     <Counter/>
// </Provider>, 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
