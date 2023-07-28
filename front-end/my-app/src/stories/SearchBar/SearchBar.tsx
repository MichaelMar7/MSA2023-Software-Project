import react from "react";

import { NewButton } from "../NewButton/NewButton";
import "./SearchBar.css";

export interface SearchBarProps {
    text?: string;
    buttonSize?: "xsmall" | "small" | "medium" | "large";
    onChange?: () => void;
    value?: string;
    onSearch?: () => void;
};

export const SearchBar = ({text, buttonSize = "xsmall", onChange, value, onSearch}: SearchBarProps) => {
    return (
        <div className="search-container">
            <form>
                <input type="text" placeholder={text} name="search" id="search" onChange={onChange} value={value} />
                <NewButton label="Search" size={buttonSize} onClick={onSearch} primary />
            </form>
        </div>
    )
};