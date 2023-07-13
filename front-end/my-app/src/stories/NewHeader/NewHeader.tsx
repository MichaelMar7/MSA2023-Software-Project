import React from "react";

import { User } from "../../models/User";
import { NewButton } from "../NewButton/NewButton";
import './NewHeader.css';

export interface NewHeaderProps {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
    onRegister: () => void;
};

export const NewHeader = ({user, onLogin, onLogout, onRegister}: NewHeaderProps) => {
    return (
    <div className="newHeader">
        <div className="heading">
            <h1>Supercell Accounts API</h1>
        </div>
        <div className="auth">
            { user ? (
                <div>
                    <span className="welcome">
                        Welcome, <b>{user.Username}</b>!
                    </span>
                    <NewButton label="Log Out" size="medium" onClick={onLogout} />
                </div>
            ) : (
                <div>
                    <NewButton label="Log In" onClick={onLogin} />
                    <NewButton primary label="Register" onClick={onRegister} />
                </div>
            )}
        </div>
    </div>
    )
};