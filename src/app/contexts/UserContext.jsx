'use client'

import React, { createContext } from 'react';


export const UserContext = createContext(null);
const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value="tomato">
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
/*{childern keno: tower bosanor moto sobai eta use korte parbe} */