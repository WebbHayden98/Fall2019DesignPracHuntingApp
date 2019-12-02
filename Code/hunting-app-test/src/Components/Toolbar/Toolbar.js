import React from 'react';
import logo from '../Toolbar/USACE_logo.png';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
    <header className ="toolbar">
        <nav className ="toolbar_navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div id="test"></div>
            <div className="toolbar_logo"><a href="/"><img src={logo} alt="Corps of engineers logo"  width="50" height="40" ></img></a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Admin</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;