import react from "react";

import { NewButton } from "../NewButton/NewButton";
import "../SearchBar/SearchBar.css";

export interface SearchBar2Props {
    text1?: string;
    text2?: string;
    label?: string
    buttonSize?: "xsmall" | "small" | "medium" | "large";
    onSearch?: () => void;
};

export const SearchBar2 = ({text1, text2, label = "Label", buttonSize = "xsmall", onSearch}: SearchBar2Props) => {
    return (
        <div className="search-container">
            <form>
                <input type="text" placeholder={text1} name="search" id="search" /><br />
                <input type="password" placeholder={text2} name="search" id="search" />
                <NewButton label={label} size={buttonSize} onClick={onSearch} primary />
            </form>
        </div>
    )
};