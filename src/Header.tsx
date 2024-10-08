import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // New CSS file for header styles

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">
          {/* Logo image next to text */}
          <img src="/images/logo.png" alt="Green Melb Logo" className="logo-image" />
          
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Camera">Identify waste</Link>
          </li>
          <li>
            <Link to="/MapPage">Recycling centers</Link>
          </li>
          
          <li>
            <Link to="/CompostingTips">Composting Tips</Link>
          </li>
          
          <li>
            <Link to="/PreventWaste">Prevent Waste</Link>
          </li>
          <li
  style={{
    display: 'inline-block',
    backgroundColor: '#007bff', // Blue background
    padding: '0px 5px 0px 0px', // Padding for the button-like appearance
    borderRadius: '2px', // Rounded corners for button effect
    cursor: 'pointer',
  }}
>
  <Link
    to="/ProductVideo"
    style={{
      color: 'white', // White text for contrast
      textDecoration: 'none', // Remove the underline
      fontWeight: 'bold', // Bold text
      fontFamily: 'monospace', // Monospace font as per your requirement
    }}
  >
    Feature Video
  </Link>
</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
