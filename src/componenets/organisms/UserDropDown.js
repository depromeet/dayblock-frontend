import React from 'react';

const UserDropDown = () => {
    
    const logout = () => {
        localStorage.removeItem("token");
        document.location.href = "/login";
    }

    return (
        <ul>
            <li>
                My Page
            </li>
            <li onClick={logout}>
                Logout
            </li>
        </ul>
    );
};

export default UserDropDown;