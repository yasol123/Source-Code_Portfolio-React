import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'; 
import './NavBar.css';
import { IconContext } from 'react-icons';
/*rfce + tab generates this form*/
function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = ()=>setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <div className='Navbar'>
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
            <li className="navbar-toggle">
                <Link to='#' className='menu-bars'>
                <FaIcons.FaRegWindowClose />
                </Link>
            </li>
            {SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
            </ul>
        </nav>
        </IconContext.Provider>
      </>
    );
}

export default NavBar
