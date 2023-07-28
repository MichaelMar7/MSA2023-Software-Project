import React, { useState } from 'react';
import { NewButton } from '../stories/NewButton/NewButton';
import { SearchBar, SearchBarProps } from '../stories/SearchBar/SearchBar';

import "../stories/SearchBar/SearchBar.css";

export default function Search () {
    const [tag, setTag] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTag(event.target.value);
    };

    const handleSubmit = () => {
        window.location.replace(url);
    };

    var url : string;
    url = "http://localhost:3000/CocPlayer/" + encodeURIComponent(tag);

    return (<div>
        <div className="search-container">
            <form>
                <input type="text" placeholder={"Enter Clash of Clans Player Tag"} name="search" id="search" onChange={handleChange} value={tag} />
                <NewButton label="Search" size={"xsmall"} onClick={handleSubmit} primary />
            </form>
        </div>
        {/*<SearchBar text="Enter Clash of Clans Player Tag" onChange={() => handleChange} value={tag} onSearch={() => handleSubmit}  />*/}
    </div>)
}