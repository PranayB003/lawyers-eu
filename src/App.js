import React from "react";

import { Routes, Route } from "react-router-dom";

import Register from "./pages/user/Authentication/Register";
import LawyerRegister from "./pages/lawyer/Authentication/LawyerRegister";
import GetStarted from "./pages/GetStarted";
import SplashScreen from "./pages/user/MainScreenWithCarousalComponent/SplashScreen";
import Functionalities from "./pages/user/MainScreenWithCarousalComponent/Functionalities";
import OTPUser from "./pages/user/OTPPage/OTPPage";
import SelectServices from "./pages/user/SelectServices";
import LawyersForYou from "./pages/user/LawyersAvailable/LawyerForYou";
import SelectCity from "./pages/user/SelectCity/selectCity";
function App() {
  return (
    <React.Fragment>
      <Routes>
        {/* Client UI Routes */}
        <Route path="client/register" element={<Register />} />
        <Route
          path="client/get-started"
          element={<GetStarted user="client" />}
        />
        <Route path="home" element={<SplashScreen />} />
        <Route path="home/functionalities" element={<Functionalities />} />
        <Route path="OTP" element={<OTPUser />} />
        <Route path="client/select-services" element={<SelectServices />} />
        <Route path="lawyers/available" element={<LawyersForYou />} />
        <Route path="select/city" element={<SelectCity />} />
        {/* Lawyer UI Routes */}
        <Route path="lawyer/register" element={<LawyerRegister />} />
        <Route
          path="lawyer/get-started"
          element={<GetStarted user="lawyer" />}
        />
        <Route path="Lawyer/OTP" element={<OTPUser user="Lawyer" />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
