import { BrowserRouter, Route, Routes } from "react-router-dom";
import Googlelogin from "./components/auth/Googlelogin";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./pages/Home";
import FAQs from "./pages/FAQs";
import Pricing from "./pages/Pricing";
import Otpverify from "./components/auth/Otpverify";
import colllection from './pages/Collections'
import Collections from "./pages/Collections";

// interface User {
//     access_token: string;
// }

// interface Profile {
//     picture: string;
//     name: string;
//     email: string;
// }

const App: React.FC = () => {
    
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/FAQs" element={<FAQs/>}/>
            <Route path="/Pricing" element={<Pricing/>}/>
            <Route path="/Otpverify" element={<Otpverify/>}/>
            <Route path="/Collections" element={<Collections/>}/>

             
        </Routes>
        </BrowserRouter>
      
    )
};

export default App;
