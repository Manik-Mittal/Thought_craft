import React from "react";
import { NavLink } from "react-router-dom";
const Usermenu = () => {
    return (
        <div style={{
            border: '2px solid rgb(0 0 0 /20%)', height: '90vh', borderRadius: '30px', margin: '2px'
        }}>
            <div className="text-center dashboard-menu">
                <div className="list-group">
                    <h4>Dashboard</h4>
                    <NavLink
                        to="/profile"
                        className="list-group-item list-group-item-action"
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        to="/orders"
                        className="list-group-item list-group-item-action"
                    >
                        Orders
                    </NavLink>
                </div>
            </div>
        </div >
    );
};

export default Usermenu;