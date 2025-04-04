import './App.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignUpPageFunction from "./components/pages/signup/SignUpPageFunction.jsx";
import LoginPage from "./components/pages/login/LoginPage.jsx";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignUpPageFunction />} />
                <Route path="/loginPage" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;
