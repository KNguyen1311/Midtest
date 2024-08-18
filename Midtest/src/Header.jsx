import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">Anonime</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/list">List anime</a></li>
          <li><input type="text" placeholder="Search anime or movie" /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
