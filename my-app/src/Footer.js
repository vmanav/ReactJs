import React from 'react';

// // Inline Styling with CSS, way 1 :- 
// function Footer() {
//     return (
//         <footer>
//             <h3 style={{ color: "#ff0000", backgroundColor: "#FF8C00" }}> This is the *Footer* element.</h3>
//         </footer >
//     )
// }

// Or Inline Styling can be done in another way :-
function Footer() {
    // Make a sepearte Style object
    let style = {
        color: "red",
        backgroundColor: "#000000",
        fontSize: 46
        // 'font-size': 46  - ALTERNATIVE
        // default unit - px
    };
    // We can also change the value of Styles Object using `.`, and if-else.
    return (
        <footer>
            <h3 style={style}> This is the *Footer* element.</h3>
        </footer >
    )
}

export default Footer;

