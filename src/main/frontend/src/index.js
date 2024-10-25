import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DIY from './DIY';
import Navbar from "./Navbar";
import Log from "./Log";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from "./NotFound";
import Footer from "./Foooter";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar/>
            <Header/>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/diy" element={<DIY />} />
                <Route path="/log" element={<Log />} />
                <Route path="*" element={<NotFound />} /> {/* Handle unknown routes */}
            </Routes>
            <Footer/>
        </BrowserRouter>
    </React.StrictMode>
);
