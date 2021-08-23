import React from 'react'
import { useState } from 'react';

const Right = () => {
    const [menu, setMenu] = useState(false);

    const showRightMenu = ()=>{
        setMenu(!menu)
    }
    return (
        <div>
              <div>
            <div className="right-container">
                    <div className="right-btn" onClick={showRightMenu} >
                    <i class="fas fa-chevron-circle-down"></i>
                    </div>
                <div className={`menu-right ${menu ? "showright" : ""} `}>
                    <div className="logo-pic">
                        <img src="images/men.jpg" alt="logo-pic" />
                </div>
                    <div className="notifications">
                    <i class="fas fa-bell"><div className="circle" /></i>
                    </div>
                    <div className="comments">
                    <i class="fas fa-comments"><div className="circle" /></i>
                    </div>
                    <div className="notifications">
                    <i class="fas fa-cog"></i>       
                    </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Right;