import { Routes, Route } from "react-router-dom";
import App from '../App';
import Home from "../Home";
import About from "../About";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/App" element={<App />} />
        </Routes>
    );
};

export default AppRoutes;