import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import randomcolor from 'randomcolor';
import { networkInterfaces } from 'os';
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
    componentWillUnmount() {
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

// function handleClick() {
//     console.log("I was clicked!");
// }


// function App() {
//     return (
//         <div>
//             <img src="https://www.fillmurray.com/200/100"/>
//             <br />
//             <br />
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     )
// }




// React setState: Changing the State

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0,
            color: '#11FF00'
        }
        // Binding `this`
        this.handleClick = this.handleClick.bind(this);
        // we are inding bcoz inside the fucntion we loose out `this`
        this.decrement=this.decrement.bind(this);
    }

    handleClick() {
        // this.setState({
        //     count : 1
        // })
        this.setState((prevState) => {
            // console.log(prevState)
            return {
                count: prevState.count + 1
            }
        })
        // setState ke andar hamesh OBJECT jaeyga
    }

    decrement() {
        this.setState((prevState) =>{
            return {
                count: prevState.count-1
            }
        })
    }


    componentDidUpdate(prevProps, prevState) {
        // console.log("Updated..");
        if (prevState.count !== this.state.count) {
            const newColor = randomcolor();
            // console.log(newColor);
            this.setState({
                color: newColor
            })
        }
        // instead of doing this we can also do
        // return {
        //     count: prevState.count + 1,
        //     color: randomcolor()
        // }
        // in the this.handleClick() function
    }

    render() {
        return (
            <div>
                <h1 style={{ color: this.state.color }}>{this.state.count}</h1>
                <button onClick={this.handleClick}>Increment!</button>
                <button onClick={this.decrement}>Decrement!</button>
            </div>
            // If we are not biding this in the tsConstructorType, the we can do THIS=>
            // This syntax ensures `this` is bound within handleClick
            // ==> `onClick={() => this.handleClick()}>`
        )
    }
}



// // React LIFECYCLE METHODS : 
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {}
//     }

//     static getDerivedStateFromProps(props, state) {
//         // return the new, updated state based upon the props 
//         // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
//         // REACT TEAM discourages the use of this

//     }

//     getSnapshotBeforeUpdate() {
//         // create a backup(an object probably) of the current way things are
//         // Not super common

//     }


//     componentDidMount() {
//         console.log("You were just born..");
//         // Very first time the component shows UP
//         // Not rerun when a component is renderIntoDocument, bczo component didnt actualy unount and remount
//         // GET the data we need to CORRECTLY DISPLAY
//     }

//     componentWillReceiveProps(nextProps) {
//         // receivng props from parentev
//         // Everytime recieving props will run this method
//         // Will not only the 1st when compononet is mounted,
//         // but also every single time a parent pass props to child component
//         // calculate the difference betwnn received and OLD ROPS if reqd Headers.apply.
//         if (nextProps.someProp !== this.props.someProp) {
//             // do soemthing IMPORTANT here..
//         }
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         // return TRUE if we want to updte
//         // return FALSE if we dont want to updte (MORE PERRFORMANT)
//     }

//     componentWillUnmount() {
//         // teardown or cleanup your code before your component disappears

//         // example -> removing event listenners for wverytime someone scrolled on screen
//     }

//     render() {
//         return (
//             <div>
//                 Code goes here
//             </div>
//         )
//     }
// }


// Depricated LifeCycle METHODS -
// 1. componentWillMount()
// 2. componentWillReceiveProps()
// 3. componentWillUpdate()




ReactDOM.render(<App />, document.getElementById('root'));