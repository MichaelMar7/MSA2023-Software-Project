import React, { useState, useEffect } from 'react';
import {Navigate, useNavigate} from "react-router-dom";

import { useLoginMutation, useUserQuery } from "../api/apiSlice";

import { SearchBar2 } from '../stories/SearchBar2/SearchBar2';
import { NewButton } from '../stories/NewButton/NewButton';

export default function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, mutationResult] = useLoginMutation();
    const {data:user} = useUserQuery("");
    //const [response, setResponse] = useState<any>();

    const { data : coctags } = useUserQuery("");
    //const [redirect, setRedirect] = useState(false);
    let navigate = useNavigate();
    
    

    function submit (username: any, password: any) {
        login(JSON.stringify({username,password}))
        //console.log(user);
        //console.log(JSON.parse(JSON.stringify(mutationResult)).data)
        navigate("/");
        window.location.reload()
    }

    return (
        <div className="search-container">
            <h3 style={{marginLeft:"10px",}}>Login</h3>
            <form>
                <input type="text" placeholder="Username" name="search" id="search" onChange={e => setUsername(e.target.value)} /><br />
                <input type="password" placeholder="Password" name="search" id="search" onChange={e => setPassword(e.target.value)} />
                <NewButton label="Log In" size="xsmall" onClick={() => submit(username,password)} primary />
            </form>
        </div>
        //<div>
        //    <SearchBar2 text1="Username" text2="Password" label="Log In" />
        //</div>
        
    )
}