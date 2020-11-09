import React from 'react';
import CompanyList from '../components/CompanyList';

const MainMenu = ({logout}) => {

        return (
            <div>
                <h1>
                    Bienvenido al panel administrativo de ARS Mobile
                </h1>
                <CompanyList />
                <button onClick={logout}>Logout</button>
            </div>
        )
    } 

export default MainMenu;