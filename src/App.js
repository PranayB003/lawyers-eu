import React from "react";

import { Routes, Route } from "react-router-dom";

import Register from "./pages/user/Authentication/Register";
import LawyerRegister from "./pages/lawyer/Authentication/LawyerRegister";
import GetStarted from "./pages/GetStarted";

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

                {/* Lawyer UI Routes */}
                <Route path="lawyer/register" element={<LawyerRegister />} />
                <Route
                    path="lawyer/get-started"
                    element={<GetStarted user="lawyer" />}
                />
            </Routes>
        </React.Fragment>
    );
}

export default App;
