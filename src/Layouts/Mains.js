import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../components/Header/Header';

const Mains = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Mains;