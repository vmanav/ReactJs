import React from 'react';
import './style.css';

function Header() {
    const firstName = "Manav";
    const lastName = "Verma";
    
    return (
        <nav className="navbar">
            <h1>Hello a { `${firstName} ${lastName}`}  !</h1>
            <ul>
                <li>Thing 1</li>
                <li>Thing 2</li>
                <li>Thing 3</li>
            </ul>
        </nav>
    )
}

export default Header;