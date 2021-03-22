import React, { useState } from 'react';
import { loginUser } from '../../_actions/user_actions';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Sidebar() {

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const { email, password } = inputs;

    const user = useSelector(state => state.user)
    const dispatch = useDispatch();

    const onChangeInput = (e) => {
        const { name, value } = e.target;
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

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    window.location.reload();
                } else {
                    alert(response.payload.message);
                }
            });
        /*
        axios.post('/api/users/login', body)
            .then(function (res) {
                console.log('## test : ' + res.data.success);
                if (res.data.loginSuccess) {

                } else if (!res.data.loginSuccess) {
                    alert(res.data.message);
                }
            });
        */
    }



    const logoutHandler = () => {
        axios.get('/api/users/logout').then(response => {
            if (response.status === 200) {
                window.location.reload();
            } else {
                alert('Log Out Failed')
            }
        })
    }
    if (user.userData && !user.userData.isAuth) {
        return (
            <div className="Sidebar">
                <form onSubmit={submitHandler}>
                    <div className="input_div">
                        <label> EMAIL </label>
                        <input className="input_email" type="email" name="email" onChange={onChangeInput} value={email} required />
                    </div>
                    <div className="input_div">
                        <label> PW </label>
                        <input className="input_pw" type="password" name="password" onChange={onChangeInput} value={password} required />
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
    } else {
        return (
            <div className="Sidebar">
                <p> {user.userData.nickname} 님 반갑습니다. </p>
                <div className="btn_group">
                    <button className="btn_logout" onClick={logoutHandler}> 로그아웃 </button>
                    <Link to="/product/register">
                        <button className="btn_sell"> 상품판매 </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Sidebar
