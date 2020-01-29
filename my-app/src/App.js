import React from 'react';
import Footer from './Footer'
import MainContent from './MainContent';
import Header from './Header';

// React Parent/ Child Components
function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;