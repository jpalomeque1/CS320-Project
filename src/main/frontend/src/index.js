import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DIY from './DIY';
import Navbar from "./Navbar";
import Log from "./Log";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/diy" element={<DIY />} />
                <Route path="/log" element={<Log />} />
                {/* You can add more pages by adding more Route elements here! */}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
