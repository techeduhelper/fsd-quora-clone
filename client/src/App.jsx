import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import axios from "axios";
import { AuthProvider } from "./context/auth";
import Spaces from "./pages/Spaces";

axios.defaults.baseURL = `http://localhost:8080`;

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/home/spaces" element={<Spaces />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
