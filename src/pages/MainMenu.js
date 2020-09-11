import React from 'react';

const MainMenu = ({logout}) => {

        return (
            <div>
                <h1>
                    Bienvenido al panel administrativo de ARS Mobile
                </h1>
                <button onClick={logout}>Logout</button>
            </div>
        )
    } 

export default MainMenu;