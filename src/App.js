import React from "react";

import { Routes, Route } from "react-router-dom";

import Register from "./pages/user/Register";

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/register" element={<Register />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
