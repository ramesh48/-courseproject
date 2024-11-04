import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from "./pages/form";
import Home from "./pages/home";
import Note from './pages/notes';

function PageRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<Form />} />
                <Route path="/notes" element={<Note />} />
            </Routes>
        </Router>
    );
}

export default PageRouter;
