import React from 'react'

function Test() {
    return (
        <div className="Sidebar">
            <div className="test">
                <label> ID </label>
                <input className="input_id" type="text" />
            </div>
            <div className="test">
                <label> PW </label>
                <input className="input_pw" type="password" />
            </div>
            <div className="btn_group">
                <button className="btn_login"> 로그인 </button>
                <button className="btn_register"> 회원가입 </button>
            </div>
        </div>
    )
}

export default Test
