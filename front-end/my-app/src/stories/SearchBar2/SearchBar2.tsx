import react from "react";

import { NewButton } from "../NewButton/NewButton";
import "../SearchBar/SearchBar.css";

export interface SearchBar2Props {
    buttonSize: "xsmall" | "small" | "medium" | "large";
    onSearch?: () => void;
};

export const SearchBar2 = ({buttonSize = "xsmall", onSearch}: SearchBar2Props) => {
    return (
        <div className="search-container">
            <form>
                <input type="text" placeholder="Input player tag..." name="search" id="search" />
                <input type="text" placeholder="Input API token..." name="search" id="search" />
                <NewButton label="Search" size={buttonSize} onClick={onSearch} primary />
            </form>
        </div>
    )
};