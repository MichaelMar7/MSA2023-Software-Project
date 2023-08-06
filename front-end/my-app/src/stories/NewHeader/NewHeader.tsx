import React from "react";

import { User } from "../../models/User";
import { NavLink } from "../../models/NavLink";
import { NewButton } from "../NewButton/NewButton";
import './NewHeader.css';

export interface NewHeaderProps {
    user?: User;
    onLogin?: () => void;
    onLogout?: () => void;
    onRegister?: () => void;
    navLinks?: Array<NavLink>;
};

export const NewHeader = ({user, onLogin, onLogout, onRegister, navLinks = []}: NewHeaderProps) => {
    return (
        <div className="newHeader">
            <div className="heading">
                <h1>Supercell Accounts API</h1>
            </div>
            <div className="auth">
                { user ? (
                    <div>
                        <span className="navlinks">
                            {navLinks.map(l => (
                                <a className="navlink" href={l.link}>{l.label}</a>
                            ))}
                        </span>
                        <span className="welcome">
                            Welcome, <b>{user.username}</b>!
                        
                            <NewButton label="Log Out" onClick={onLogout} />
                        </span>
                    </div>
                ) : (
                    <div>
                        <span className="navlinks">
                            {navLinks.map(l => (
                                <a className="navlink" href={l.link}>{l.label}</a>
                            ))}
                        </span>
                        <span className="welcome">
                            <NewButton label="Log In" onClick={onLogin} />
                            <NewButton primary label="Register" onClick={onRegister} />
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
};