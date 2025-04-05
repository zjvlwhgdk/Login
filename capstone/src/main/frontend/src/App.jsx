import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignUpPageFunction from "./components/pages/signup/SignUpPageFunction.jsx";
import LoginPage from "./components/pages/login/LoginPage.jsx";
import LoginPageFunction from "./components/pages/login/LoginPageFunction.jsx";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignUpPageFunction />} />
                <Route path="/loginPage" element={<LoginPageFunction/>} />
            </Routes>
        </Router>
    );
}

export default App;
