import React from 'react';
import '/Users/manikmittal/Documents/Thought_craft/client/src/pages/sidebar.css'; // Assuming you have a Sidebar.css file for custom styles
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar" role="cdb-sidebar">
            <div className="sidebar-container">
                <div className="sidebar-header">
                    <a className="sidebar-brand">Contrast</a>
                    <a className="sidebar-toggler"><i className="fa fa-bars"></i></a>
                </div>
                <div className="sidebar-nav">
                    <div className="sidenav">
                        <Link to="/" className="sidebar-item">
                            <div className="sidebar-item-content">
                                <i className="fa fa-th-large sidebar-icon sidebar-icon-lg"></i>
                                <span>Dashboard</span>
                                <div className="suffix">
                                    <div className="badge rounded-pill bg-danger">new</div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/components" className="sidebar-item">
                            <div className="sidebar-item-content">
                                <i className="fa fa-sticky-note sidebar-icon"></i>
                                <span>Components</span>
                            </div>
                        </Link>
                        <Link to="/bootstrap" className="sidebar-item">
                            <div className="sidebar-item-content">
                                <i className="fa fa-sticky-note sidebar-icon"></i>
                                <span>Bootstrap</span>
                            </div>
                        </Link>
                    </div>
                    <div className="sidebar-footer">Sidebar Footer</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
