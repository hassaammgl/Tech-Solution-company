import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Service from "./components/Services";
import './style/App.css';

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/services" element={<Service/>} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
