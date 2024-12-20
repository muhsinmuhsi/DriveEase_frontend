import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import AdminProtected from "./components/Adim/AdminProtected";




const App: React.FC = () => {
    
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/*" element={<UserRoutes/>}/>
            <Route path="/admin/*" element={<AdminProtected><AdminRoutes /></AdminProtected>} />        
            </Routes>
        </BrowserRouter>
      
    )
};

export default App;
