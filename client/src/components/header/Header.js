import React from 'react';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <div className="Header">
            <Link to='/'> 
                <button id="logo" >Home</button >
            </Link>

            <input
              id="search" 
              placeholder="검색어를 입력해주세요" 
            />
            
        </div>
    )
}

export default Header
