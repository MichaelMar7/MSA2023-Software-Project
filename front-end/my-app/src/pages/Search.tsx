import React, { useState } from 'react';
import { NewButton } from '../stories/NewButton/NewButton';
import { SearchBar, SearchBarProps } from '../stories/SearchBar/SearchBar';

import "../stories/SearchBar/SearchBar.css";

export default function Search () {
    const [tag, setTag] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTag(event.target.value);
    };

    const handleSubmit1 = () => {
        window.location.replace(url1);
    };

    const handleSubmit2 = () => {
        window.location.replace(url2);
    };

    const handleSubmit3 = () => {
        window.location.replace(url3);
    };

    var url1 : string = "http://localhost:3000/CocPlayer/" + encodeURIComponent(tag);
    var url2 : string = "http://localhost:3000/CrPlayer/" + encodeURIComponent(tag);
    var url3 : string = "http://localhost:3000/BsPlayer/" + encodeURIComponent(tag);

    return (<div>
        <div className="search-container">
            <form>
                <input type="text" placeholder={"Enter Player Tag"} name="search" id="search" onChange={handleChange} value={tag} />
                <NewButton label="Clash of Clans" size={"xsmall"} onClick={handleSubmit1} primary />
                <NewButton label="Clash Royale" size={"xsmall"} onClick={handleSubmit2} primary />
                <NewButton label="Brawl Stars" size={"xsmall"} onClick={handleSubmit3} primary />
            </form>
        </div>
        {/*<SearchBar text="Enter Clash of Clans Player Tag" onChange={() => handleChange} value={tag} onSearch={() => handleSubmit}  />*/}
    </div>)
}