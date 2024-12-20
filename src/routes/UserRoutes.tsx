import { Routes, Route } from "react-router-dom";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import Home from "../pages/Home";
import FAQs from "../pages/FAQs";
import Pricing from "../pages/Pricing";
import Otpverify from "../components/auth/Otpverify";
import Collections from "../pages/Collections";
import FetchCategoryFull from "../components/fetch/FetchFullCatogory";
import Availablevehicles from "../components/fetch/Availablevehicles";
import Finalvehicle from "../components/fetch/finalvehicle";
import DocumentCollect from "../pages/DocumentCollect";
import Payment from "../pages/Payment";
import Mybookings from "../pages/Mybookings";
import AdminLogin from "../pages/adminpages/AdminLogin";

const UserRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/otpverify" element={<Otpverify />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/vehicle/category/:category" element={<FetchCategoryFull />} />
      <Route path="/vehicle/isAvailable" element={<Availablevehicles />} />
      <Route path="/vehicle/:id" element={<Finalvehicle />} />
      <Route path="/document/upload" element={<DocumentCollect />} />
      <Route path="/booking/payment" element={<Payment />} />
      <Route path="/mybookings" element={<Mybookings />} />
      <Route path="/adminLogin" element={<AdminLogin/>} />
    </Routes>
  );
};

export default UserRoutes;
