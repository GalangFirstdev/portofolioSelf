import React from "react";
import ReactDOM from "react-dom/client";
import App from "@eli/App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { AuthProvider } from "./context/AuthProvider.jsx";


axios.defaults.withCredentials = true

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <HelmetProvider>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </HelmetProvider>
        </BrowserRouter>
    </React.StrictMode>
);
