import React, { useState, Dispatch, SetStateAction, SyntheticEvent } from 'react';
import {Navigate, useNavigate} from "react-router-dom";

import { useRegisterMutation } from "../api/apiSlice";

import { User } from '../models/User';
import { UserCred } from '../models/UserCred';
import { SearchBar2 } from '../stories/SearchBar2/SearchBar2';
import { NewButton } from '../stories/NewButton/NewButton';


export default function Register () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [register, response] = useRegisterMutation();
    //const [redirect, setRedirect] = useState(false);
    let navigate = useNavigate();
    
    async function submit (username: any, password: any) {
        register(JSON.stringify({username,password}))
        console.log(response)
        //await fetch("https://localhost:7008/Register", {
        //    method: "post",
        //    headers: {"Content-Type": "application/json"},
        //    body: JSON.stringify({username, password})
        //})
        navigate("/login");
    }

    return (
        <div className="search-container">
            <h3 style={{marginLeft:"10px",}}>Register</h3>
            <form>
                <input type="text" placeholder="Username" name="search" id="search" onChange={e => setUsername(e.target.value)} /><br />
                <input type="password" placeholder="Password" name="search" id="search" onChange={e => setPassword(e.target.value)} />
                <NewButton label="Register" size="xsmall" onClick={() => submit(username,password)} primary />
            </form>
        </div>
        /* 
        <div>
            <SearchBar2 text1="Username" text2="Password" label="Register" />
        </div>
        */
        
    )
}