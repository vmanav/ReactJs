import React, { Component } from 'react';
import Footer from './Footer'
import MainContent from './MainContent';

import Header from './Header';

import jokesData from './jokesData';
import ReactDOM from 'react-dom';

// // React Parent/ Child Components
// function App() {
//     return (
//         <div>
//             <Header />
//             <MainContent />
//             <Footer />
//         </div>
//     );
// }


// // React Props
// import './style2.css';
// import ContactCard from './ContactCard';
// import ContactCard from './ContactCard';

// function App(){
//     return(
//         <div className="contacts" >
//             <ContactCard 
//                 contact = {{
//                     name:"Mr. Whiskerson",
//                     imgUrl:"http://placekitten.com/300/200",
//                     phone:"(212) 555-1234",
//                     email:"mr.whiskaz@catnap.meow"
//                 }}
//             />
            
//             <ContactCard 
//             contact = {{
//                 name:"Fluffykins" ,
//                 imgUrl:"http://placekitten.com/400/200" ,
//                 phone:"(212) 555-2345" ,
//                 email:"fluff@me.com"
//                  }}
//             />
            
//             <ContactCard 
//             contact = {{
//                 name:"Destroyer" ,
//                 imgUrl:"http://placekitten.com/400/300" ,
//                 phone:"(212) 555-3456" ,
//                 email:"ofworlds@yahoo.com"
//                  }}
//             />
            
//             <ContactCard 
//             contact = {{
//                 name:"Felix" ,
//                 imgUrl:"http://placekitten.com/200/100" ,
//                 phone:"(212) 555-4567" ,
//                 email:"thecat@hotmail.com"
//                  }}
//             />

//         </div>
//     )
// }

// function App() {
//     return (
//         <div className="contacts">

//             <ContactCard
//                 contact={{ name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow" }}
//             />

//             <ContactCard
//                 contact={{ name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com" }}
//             />

//             <ContactCard
//                 contact={{ name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com" }}
//             />

//             <ContactCard
//                 contact={{ name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com" }}
//             />

//         </div>
//     )
// }


// // React Props and Styling Practice Excersize 
// function Joke(props) {
//     return (
//         <div>
//             <h3 style={{ display: props.question ? "block" : "none" }}>Question : {props.question}</h3>
//             {/* alternatove way -> */}
//             {/* bcoz display: "block" is default for h3 attribute */}
//             <p style={{ color: props.question ? "black" : "#888888" }}>Answer: {props.punchLine}</p>
//             <hr />
//         </div>
//     )
// }

// function App() { 
//     return (
//         <div>

//             <Joke
//                 data={{ punchLine: "Punch Line 0" }} />

//             <Joke
//                 data={{ question: "Question 1", punchLine: "Punch Line 1" }} />
//             <Joke
//                 data={{ question: "Question 2", punchLine: "Punch Line 2" }} />
//             <Joke
//                 data={{ question: "Question 3", punchLine: "Punch Line 3" }} />
//             <Joke
//                 data={{ question: "Question 4", punchLine: "Punch Line 4" }} />

//         </div>
//     );
// }

// // Mapping Components in React, (change in Joke component)
// function Joke(props) {
//     return (
//         <div>
//             <h3 style={{ display: props.question ? "block" : "none" }}>Question : {props.question}</h3>
//             {/* alternatove way -> */}
//             {/* bcoz display: "block" is default for h3 attribute */}
//             <p style={{ color: props.question ? "black" : "lightcoral" }}>Answer: {props.punchLine}</p>
//             <hr />
//         </div>
//     )
// }

// function App(){
//     const jokeComponentsArray = jokesData.map(function(jokeItem){
//         return <Joke key={jokeItem.id} question={jokeItem.question} punchLine={jokeItem.punchLine}/>
//     })
//     // console.log(jokeComponentsArray);
//     return (
//         <div>
//             {jokeComponentsArray}
//         </div>
//     )   
// }

// // Mapping Components Practice
// import productsData from './vschoolProducts';

// function Product(props){
//     return(
//         <div>
//             <h2>Name : {props.product.name}</h2>
//             <p> Price : {props.product.price}</p>
//             <p> Description : {props.product.description}</p>
//             <hr/>
//         </div>
//     )
// }
// function App() {
//     const ProductsComponentsArray = productsData.map((prod) =>{
//          return <Product key={prod.id} product={prod} />
//     })
    
//   return (
//     <div>
//         {ProductsComponentsArray}
//     </div>
//   )
// }


// Class Based Components
// class App extends React.Component {
    
//     render() {
//         return(
//             <div>
//                 <h2>Our code goes Here</h2>
//                 {/* whenever we have to use rops we will have to write */}
//                 {/* {this.props.propesKadata    } */}
//             </div>
//         )
//     }
// }


// Class Based Components PRACTICE

class App extends React.Component{
    render(){
        return(
            <div>
                <Header2 username="Manav" />
                <Greeting />
            </div>
        )
    }
}
class Header2 extends React.Component{
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

class Greeting extends React.Component{
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay;
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}




ReactDOM.render(<App />, document.getElementById("root"))

export default App;
// Jab export default karte hai to import karte vakt kisi bhi nam se kar sakte h import