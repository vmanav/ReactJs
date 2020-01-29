import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './style.css'

// // import component from anotehr file 
// import MyInfo from './MyInfo';

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

// // Rendering by Importing Component `MyInfo` from another file
// ReactDOM.render(<MyInfo />, document.getElementById("root"))

// ReactDOM.render(<App />, document.getElementById('root'));

// React Parent/ Child Components
ReactDOM.render(<App />, document.getElementById('root'));

// // More into JSX
// function formatText(user) {
//     return user.firstName + ' ' + user.lastName + ', Age : ' + user.age;
// }
// let p1 = {
//     firstName: "Manav",
//     lastName: "Verma",
//     age: 20
// }

// let element = <h1>Hello, {formatText(p1)}</h1>
// => Here in `{  }` the curly braces we indicate javascript code and outside of them are JSX - IMPORTATNT

// ReactDOM.render(element, document.getElementById('root'));

// // Updating the Rendered Element => React Only Updates What’s Necessary
// // WATHC IT, in Dev Tools, only the h2 portion with {}is getting updated and rest is not.

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);