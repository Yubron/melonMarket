import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="Header">
      <div className="Box">
        <Link to="/">
          <img src="/images/logo2.png" alt="logo" id="logo" />
        </Link>
      </div>
      <div className="Box">
        <input id="search" placeholder="검색어를 입력해주세요" />
      </div>
    </div>
  );
}

export default Header;
