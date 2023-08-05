import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import './App.css';

import { NewHeader } from './stories/NewHeader/NewHeader';
import { User } from './models/User';
import { NavLink } from './models/NavLink';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import CocPlayer from "./pages/CocPlayer";
import CrPlayer from "./pages/CrPlayer";
import BsPlayer from "./pages/BsPlayer";
import { useUserQuery, useLogoutMutation } from './api/apiSlice';

var testuser: User = {
    // d87e4067-d12d-479f-837b-65a06ef86282
    userId: "d87e4067-d12d-479f-837b-65a06ef86282",
    username: "test",
    password: "test"
};

var testlinks: Array<NavLink> = [
    {label:"Home", link:"/"},
    {label:"Profile", link:"/Profile"},
    {label:"Search", link:"/Search"},
]


function App() {
    const [user, setUser] = useState<User | undefined>();
    //const [logout, mutationResult] = useLogoutMutation();
    //const {data:authuser} = useUserQuery("");
    let navigate = useNavigate();

    useEffect(() => {
        (
            async () => {
                const response = await fetch("https://localhost:7008/User", {
                    headers: {"Content-Type": "application/json"},
                    credentials: "include",
                });
                const content = await response.json();
                //console.log(content)
                if (content.status !== 401)
                    setUser(content)
        })()
    }, [navigate]);

        /*
    async function logout() {
        await fetch("https://localhost:7008/Logout", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
        });
    }
    */

    const logout = async () => {
        console.log("?");
        await fetch("https://localhost:7008/Logout", {
            headers: {"Content-Type": "application/json"},
            credentials: "include",
        });
    }

    function login() {
        navigate("/login");
    }

    function register() {
        navigate("/register");
    }

    const BASE_URL = "https://localhost:7008";

    //setUser(getUser());

    return (
        <div>
            <NewHeader user={user} onLogin={() => login()} onLogout={logout} onRegister={() => register()} navLinks={testlinks} />
                <Routes>
                    <Route index path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />}/>
                    <Route path="/profile" element={<Profile user={user} />}/>
                    <Route path="/search" element={<Search />}/>
                    <Route path="/cocplayer/:tag" element={<CocPlayer user={user} />}/>
                    <Route path="/crplayer/:tag" element={<CrPlayer user={user} />}/>
                    <Route path="/bsplayer/:tag" element={<BsPlayer user={user} />}/>
                </Routes>
        </div>
    );
}

//<Route path="/posts/:slug" render={({ match }) => <BlogPost match={match} />} />

export default App;
