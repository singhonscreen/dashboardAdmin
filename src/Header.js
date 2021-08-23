import React from 'react'
import { useState } from 'react';
import Left from './Left';

const Header = () => {
    const [sideBar, setSideBar] = useState(false);

     const showSideBar = ()=>{
         setSideBar(!sideBar)
     }

    return (
        <>
          <div className="header">
          <div className="admin-container">
                <div className="menu-icon" onClick={showSideBar} >
                    <i class="bi bi-filter-left"></i>
                </div>
                <div className='admin-dashborad'>
                    <h2>Admin Dashboard</h2>
                </div>
            </div>
            <div className="preview">
            <p> Preview on: <span><i className="bi bi-phone"></i></span> <span> <i className="bi bi-laptop"></i></span></p>   
            
           
            </div>
          </div>
          <div className={`left-container ${sideBar ? "active":" "}`}>
          <Left  />
          </div>
        </>
    )
}

export default Header;
