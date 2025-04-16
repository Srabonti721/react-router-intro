import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import"./root.css"
const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='sideBar '>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;