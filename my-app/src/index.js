import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import './style.css'

// // import component from anotehr file 
// import MyInfo from './MyInfo';

// ReactDOM.render(`WHAT TO RENDER`, `WHERE TO RENDER IT`)
// ReactDOM.render(
//     <div>
//         <h1>STFU</h1>
//         <p>HI THERE I AM REACT</p>
//     </div>
//     , document.getElementById("root")
// )
// This is JSX => { a syntax extension to JavaScript }
// When i remove the first line it says,   "EROR" => 'React' must be in scope when using JSX  react/react-in-jsx-scope

// // React Functional Components
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


// Rendering by Importing Component `MyInfo` from another file
// ReactDOM.render(<MyInfo />, document.getElementById("root"))


// ReactDOM.render(<App />, document.getElementById("root"));


// React Parent/ Child Components
// ReactDOM.render(<App />, document.getElementById('root'));


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


// React STATE CONCEPTS => ( --official REACT docs-- )

// A component cannot change/ manipulate the `prop` it is recieving
// A state is a way in which a component can maintan its own data and manipulate it


// function Clock(props){
//     return(
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }

// function tick() {
//         ReactDOM.render(
//         <Clock date={new Date()}/>
//         , document.getElementById('root')
//     );
// }  
// setInterval(tick, 1000);
// Now `clock` is still not truly reusable Component.
// The fact that the Clock sets up a timer and updates the UI every second should be an implementation detail of the Clock.

// Ideally we want to write this once and have the Clock update itself:   ```<Clock />```

// To implement this, we need to add “state” to the Clock component.
// State is similar to props, but it is private and fully controlled by the component.


// Adding Local State to a class ==>

// 1. Convert into a Class Based Component
class Clock extends React.Component {

    // Class components should always call the base constructor with props.
    constructor() {
        super(); // call to global function called `super()`, calls to the ultimate parent class...
        this.state = { date: new Date() };
    }

    // These are Lifecycle methods
    componentDidMount() {
        // method runs after the component output has been rendered to (inserted into) the DOM.
        // This is a good place to set up a timer
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        // We have saved the timer ID right on this (this.timerID).
    }

    // We will tear down the timer in the componentWillUnmount() lifecycle method
    componentWillMount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
        // schedule updates to the component local state:
    }
    // Thanks to the setState() call, React knows the state has changed,
    // and calls the render() method again to learn what should be on the screen.

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                {/* 2. Replace this.props.date with this.state.date in the render() method: */}
                {/* <h2>It is {this.props.date.toLocaleTimeString()}.</h2> */}
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

// ReactDOM.render(
//     <Clock />
//     , document.getElementById('root')
// );



// // React STATE Practice -2
// class App extends React.Component{
//     constructor() {
//         super();
//         this.state = {
//             isLoggedIn : false
//         }
//     }
//     render() {
//          return (
//             <div>
//                 <h1>You are currently logged { this.state.isLoggedIn ? "IN" : "OUT" } </h1>
//             </div>
//         ) 
//     }
// }

function handleClick() {
    console.log("I was clicked!");
}


function App() {
    return (
        <div>
            <img src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));