import react from "react";

import { NewButton } from "../NewButton/NewButton";
import "./SearchBar.css";

export interface SearchBarProps {
    buttonSize: "xsmall" | "small" | "medium" | "large";
    onSearch?: () => void;
};

export const SearchBar = ({buttonSize = "xsmall", onSearch}: SearchBarProps) => {
    return (
        <div className="search-container">
            <form>
                <input type="text" placeholder="Input player tag..." name="search" />
                <NewButton label="Search" size={buttonSize} onClick={onSearch} primary />
            </form>
        </div>
    )
};