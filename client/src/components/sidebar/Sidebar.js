import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Sidebar() {

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
      }); 
    
    const { email, password } = inputs; 
    
    const onChangeInput = (e) => { 
        const { name, value }  = e.target;
        setInputs({
          ...inputs,
          [name]: value,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const body = {
            email: email,
            password: password,
        };

        axios.post('/api/users/login', body)
        .then(function(res) {
            if(res.data.success) {
                
            } else if(!res.data.success) {
                alert(res.data.message);
            }
        });
    }

    return (
        <div className="Sidebar">
            <form onSubmit={submitHandler}>
                <div className="input_div"> 
                    <label> EMAIL </label>
                    <input className="input_email" type="email" name="email" onChange={onChangeInput} value={email} required />
                </div>
                <div className="input_div">
                    <label> PW </label>
                    <input className="input_pw" type="password" name="password" onChange={onChangeInput} value={password} required/>
                </div>
            </form>
            <div className="btn_group">
                <button className="btn_login" type="submit" onClick={submitHandler}> 로그인 </button>
                <Link to="/join">
                    <button className="btn_register"> 회원가입 </button>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
