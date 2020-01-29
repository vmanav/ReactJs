import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { func } from 'prop-types';
import { isCompositeComponent } from 'react-dom/test-utils';

// import component from anotehr file 
import MyInfo from './MyInfo';

// ReactDOM.render(`WHAT TO RENDER`, `WHERE TO RENDER IT`)
// ReactDOM.render(
//     <div>
//         <h1>STFU</h1>
//         <p>HI THERE I AM REACT</p>
//     </div>
//     , document.getElementById("root"))
// This is JSX => { a syntax extension to JavaScript }
// When i remove the first line it says,   "EROR" => 'React' must be in scope when using JSX  react/react-in-jsx-scope


// React Functional Components
// function MyApp() {
//     return (
//         <div>
//             <ul>
//                 <li>FunctionalComponent Unordered ListItem-1</li>
//                 <li>FunctionalComponent Unordered ListItem-2</li>
//                 <li>FunctionalComponent Unordered ListItem-3</li>
//             </ul>
//             <ol>
//                 <li>FunctionalComponent Ordered ListItem-1</li> 
//                 <li>FunctionalComponent Ordered ListItem-2</li>
//                 <li>FunctionalComponent Ordered ListItem-3</li>
//             </ol>
//         </div>
//     )
// }
// // We can only return one element not two elements in an Component, `ul` and `ol` side by side, 
// // Our component can return only one JSX element 
// ReactDOM.render(<MyApp />, document.getElementById("root"));

ReactDOM.render(<MyInfo />, document.getElementById("root"))

// ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
