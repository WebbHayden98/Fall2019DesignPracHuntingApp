import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (<nav className={drawerClasses}>
        <ul>
            <li>
                <a href="/">Stuff</a>
            </li>
            <li>
                <a href="/">Things</a>
            </li>
        </ul>
    </nav>);
};

export default sideDrawer;