import React from "react";

import { Routes, Route } from "react-router-dom";

import Register from "./pages/user/Authentication/Register";
import LawyerRegister from "./pages/lawyer/Authentication/LawyerRegister";

function App() {
    return (
        <React.Fragment>
            <Routes>
                {/* Client UI Routes */}
                <Route path="/client/register" element={<Register />} />

                {/* Lawyer UI Routes */}
                <Route path="/lawyer/register" element={<LawyerRegister />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
