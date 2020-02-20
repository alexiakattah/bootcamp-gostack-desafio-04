import React from 'react';
import '../styles/header.css';
import logo from '../assets/images/logo.png';
import user from '../assets/images/user.svg';

function Header() {
  return (
    <div className="header">
      <img src={logo} />
      <p>
        Meu Perfil <img className="user-profile" src={user} />
      </p>
    </div>
  );
}

export default Header;
