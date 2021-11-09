import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Container>
                    <Routes>
                        <Route exact path="/" element={<HomeScreen />} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
