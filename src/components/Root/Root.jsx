import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import"./root.css"
const Root = () => {
    const natigation = useNavigation();
    const isNavigation = Boolean(natigation.location);
    return (
        <div>
            <Header></Header>
            <div className='sideBar '>
                <SideBar></SideBar>
                {
                    isNavigation && <span> loading...</span>
                }
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;