import React from 'react';
import Footer from './Footer'
import MainContent from './MainContent';
import Header from './Header';

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


// React Props and Styling Practice Excersize 
function Joke(props) {
    return (
        <div>
            <h3 style={{ display: props.data.question ? "block" : "none" }}>Question : {props.data.question}</h3>
            {/* alternatove way -> */}
            {/* bcoz display: "block" is default for h3 attribute */}
            <p style={{ color: props.data.question ? "black" : "#888888" }}>Answer: {props.data.punchLine}</p>
            <hr />
        </div>
    )
}

function App() {
    return (
        <div>

            <Joke
                data={{ punchLine: "Punch Line 0" }} />

            <Joke
                data={{ question: "Question 1", punchLine: "Punch Line 1" }} />
            <Joke
                data={{ question: "Question 2", punchLine: "Punch Line 2" }} />
            <Joke
                data={{ question: "Question 3", punchLine: "Punch Line 3" }} />
            <Joke
                data={{ question: "Question 4", punchLine: "Punch Line 4" }} />

        </div>
    );
}

export default App;
