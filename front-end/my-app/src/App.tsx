import React, { useState } from 'react';
import './App.css';

import { NewHeader } from './stories/NewHeader/NewHeader';
import { User } from './models/User';

var testuser: User = {
    UserId: "1",
    Username: "test",
    Password: "test"
};

function App() {
    const [user, setUser] = useState<User | undefined>(undefined);

    const BASE_URL = "https://localhost:7008";

    return (
        <div>
            <NewHeader user={user} onLogin={() => setUser(testuser)} onLogout={() => setUser(undefined)}  onRegister={none} />
        </div>
    );
}

function none() {}

export default App;
