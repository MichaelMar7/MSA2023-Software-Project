import React, { useState, Dispatch, SetStateAction } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import { NewHeader } from './stories/NewHeader/NewHeader';
import { User } from './models/User';
import { NavLink } from './models/NavLink';

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Player from "./pages/Player";
import CocPlayer from "./pages/CocPlayer";
import CrPlayer from "./pages/CrPlayer";
import BsPlayer from "./pages/BsPlayer";

import { useLoginQuery, useRegisterQuery, useCocPlayerQuery, useCrPlayerQuery, useBsPlayerQuery,
    useGetCocPlayerQuery, useGetCrPlayerQuery, useGetBsPlayerQuery,  
    useGetAllCocPlayersQuery, useGetAllCrPlayersQuery, useGetAllBsPlayersQuery,  
    useAddCocPlayerTagQuery, useAddCrPlayerTagQuery, useAddBsPlayerTagQuery, 
    useAddCocPlayerTag2Query, useAddCrPlayerTag2Query, useAddBsPlayerTag2Query, 
    useRemoveCocPlayerTagQuery, useRemoveCrPlayerTagQuery, useRemoveBsPlayerTagQuery } from "./api/apiSlice"
import { PlayerTagList } from './stories/PlayerTagList/PlayerTagList';

var testuser: User = {
    // 79c453a7-4ecc-4548-948c-55ce3c7c269c
    userId: "79c453a7-4ecc-4548-948c-55ce3c7c269c",
    username: "test",
    password: "test"
};

var testlinks: Array<NavLink> = [
    {label:"Home", link:"/"},
    {label:"Profile", link:"/Profile"},
    {label:"Search", link:"/Search"},
]


function App() {
    const [user, setUser] = useState<User | undefined>(testuser);

    const BASE_URL = "https://localhost:7008";

    return (
        <div>
            <NewHeader user={user} onLogin={() => setUser(testuser)} onLogout={() => setUser(undefined)} navLinks={testlinks} />
            <Router>
                <Routes>
                    <Route index path="/" element={<Home />}/>
                    <Route path="/Login"/>
                    <Route path="/Profile" element={<Profile user={user} />}/>
                    <Route path="/Search" element={<Search />}/>
                    <Route path="/CocPlayer/:tag" element={<CocPlayer />}/>
                    <Route path="/CrPlayer/:tag" element={<CrPlayer />}/>
                    <Route path="/BsPlayer/:tag" element={<BsPlayer />}/>
                </Routes>
            </Router>
        </div>
    );
}

//<Route path="/posts/:slug" render={({ match }) => <BlogPost match={match} />} />

export default App;
