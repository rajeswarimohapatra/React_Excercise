import React from 'react';
import { NavLink } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import logo from '../assets/CentralBankLogo.png';
import dashboardIcon from '../assets/icon.png';
import transactionIcon from '../assets/Vector.png';
import languageIcon from '../assets/hugeicons_language-skill.png';
import qrIcon from '../assets/QR.png';

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`app-sidebar ${!isOpen ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <img src={logo} alt="Central Bank of India" />
      </div>
      <ul className="sidebar-menu" style={{ fontSize: '0.85rem' }}>
        <li>
          <NavLink to="/" className="sidebar-link">
            <img src={dashboardIcon} width={20} alt="Dashboard" />
            {isOpen && <span>Dashboard</span>}
          </NavLink>
        </li>

        <li>
          <NavLink to="/user-fetch" className="sidebar-link">
            <img src={transactionIcon} width={20} alt="Transaction Reports" />
            {isOpen && <span>Transaction Reports</span>}
          </NavLink>
        </li>

        <li>
          <NavLink to="/qr-generator" className="sidebar-link">
            <img src={qrIcon} width={20} alt="QR Details" />
            {isOpen && <span>QR Details</span>}
          </NavLink>
        </li>

        <li>
          <NavLink to="/soundbox" className="sidebar-link">
            <img src={languageIcon} width={20} alt="Language Update" />
            {isOpen && <span>Language Update</span>}
          </NavLink>
        </li>

        <li>
          <NavLink to="/support" className="sidebar-link">
            <HelpCircle size={20} />
            {isOpen && <span>Help & Support</span>}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
