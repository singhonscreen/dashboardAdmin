import React from 'react';
import Btn from "./Btn"
import { NavLink } from "react-router-dom";
import Settingdata from './Settingdata';
import Updationdata from './Updationdata';

const Content = () => {
    return (
        <>
            <div className="content">
                <div className="setting-content">
                    <div className="left-content">
                        <div className="setting-heading">
                            <p>Event Settings</p>
                            <hr />
                            <div className="general">
                                <ul className="setting-list">
                                    {
                                        Settingdata.map((item, indx) => {
                                            return (
                                                <div key={indx} className={item.class}>
                                                    <NavLink to="/"> <li >{item.title} <span>{item.logo}</span></li>  </NavLink>
                                                </div>
                                            )
                                        })}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="main-container">
                        <div className="cross"><i class="far fa-times-circle"></i></div>
                        <div className="audience-content">
                            <div className="audience">
                                <div className="heading1"> <h3><span> <i class="fas fa-comment-alt"></i></span> Audience Q&A </h3></div>
                                <div className="button">
                                    {<Btn />}
                                    <span className="uparrow" ><i class="fas fa-chevron-up"></i></span>
                                </div>
                            </div>
                            <hr className='devider' />

                            <div className="selections">

                                {
                                    Updationdata.map((item, index) => {
                                        return (
                                            <div className="updation">
                                                <div className="heading2">
                                                    <h6> {item.title } </h6>
                                                    <p>{item.para}</p>
                                                </div>
                                                <div className="button">
                                                    {<Btn />}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="updation">
                                    <div className="heading2">
                                        <p><span className="box">160</span><span className="box">240</span><span className="box box1">300</span></p>
                                    </div>

                                </div>
                                <div className="updation">
                                    <div className="heading2">
                                        <h6> Close questions </h6>
                                        <p>Prevents the participants from sending new questions to your events</p>
                                    </div>
                                    <div className="button">
                                        {<Btn />}
                                    </div>
                                </div>

                                <div className="btn"><button>Save</button></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Content;
