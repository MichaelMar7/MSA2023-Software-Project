import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import { NewHeader } from './stories/NewHeader/NewHeader';
import { User } from './models/User';
import { NavLink } from './models/NavLink';

var testuser: User = {
    UserId: "1",
    Username: "test",
    Password: "test"
};

var testlinks: Array<NavLink> = [
    {label:"Home", link:"/Home"}
]

function App() {
    const [user, setUser] = useState<User | undefined>(undefined);

    const BASE_URL = "https://localhost:7008";

    return (
        <div>
            <NewHeader user={user} onLogin={() => setUser(testuser)} onLogout={() => setUser(undefined)} navLinks={testlinks} />
            <Router>
                <Routes>

                </Routes>
            </Router>
        </div>
    );
}

export default App;
