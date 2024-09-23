import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';
import About from './pages/About/About';
import Location from './pages/Location/Location'

function App () {
    return (
        <Router>
                
                <Header/>
                <Routes>
                    <Route path= {"/"} element={<Home/>} />
                    <Route path={"/about"} element={<About />} />
                    <Route path ={"/location/:id"} element = {<Location/>} />
                    <Route path={"*"} element={<Error />} />
                </Routes>
            
            <Footer/>
        </Router>
    )
}

export default App;