import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDQmbr6kPQaHcLBVAXW3DHL9-_55r67SgE",
    authDomain: "lawyers-eu.firebaseapp.com",
    projectId: "lawyers-eu",
    storageBucket: "lawyers-eu.appspot.com",
    messagingSenderId: "333899243296",
    appId: "1:333899243296:web:95e466c9f3bb2c237a8145",
};

export const app = initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <StyledEngineProvider injectFirst>
                    <App />
                </StyledEngineProvider>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
