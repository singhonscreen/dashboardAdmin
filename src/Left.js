import React from 'react'

const Left = () => {
    return (
        <>
            
                <div className="menu-left">
                    
                    <div className="logo-control">
                        <img src="images/logo.png" alt="logo" />
                </div>
                <div className="event-control">
                    <div className="line">
                        <hr className="hr1" /> <hr className="hr2" /> <hr className="hr3" />
                    </div>
                    <div className="event-heading">
                        <p>Events</p>
                    </div>
                    </div>
                    <div className="team">
                    <i class="fas fa-users"></i>
                    <p>Teams</p>
                    </div>
                    <div className="analytics">
                    <i class="bi bi-file-image-fill"></i>               
                    <p>Analytics</p>
                    </div>
                    <div className="document">
                    <i class="fas fa-envelope-open-text"></i>
                 
                    <p>Documents</p>
                   
                    </div>
            </div>
            
        </>
    )
}

export default Left;
