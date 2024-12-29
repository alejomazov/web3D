import React from 'react';
import Canvas3D from './Canvas3D';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import {headerStyle, 
        navbarStyle, logoStyle, 
        navListStyle, navItemStyle} from './Home'


const Layout: React.FC = () => {
  return (
    <div>
      <header style={headerStyle}>
        <div style={navbarStyle}>
          <a href="/" style={logoStyle}>Fitness</a>
          <nav>
            <ul style={navListStyle}>
              <li><Link to="/" style={navItemStyle}>Home</Link></li>
              <li><Link to="/shop" style={navItemStyle}>Shop</Link></li>
              <li><Link to="/contact" style={navItemStyle}>Contact</Link></li>
            </ul>
          </nav>
        </div>
       
      </header>
      
    
      <div style={{ display: 'flex', height: '100vh'}}>
        <div style={{ flex: 3, backgroundColor: '#fff' }}>
          <Canvas3D />
        </div>
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
          <Sidebar />
        </div>
      </div>
    
    </div>  
  );
};

export default Layout;
