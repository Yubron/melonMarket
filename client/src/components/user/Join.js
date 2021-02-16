import React, { useState } from 'react';
import axios from 'axios';

function Join() {

    const [inputs, setInputs] = useState({
        email: '',
        nickname: '',
        password: '',
        confirmPassword: '',
    });

    const { email, nickname, password, confirmPassword } = inputs;

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            return alert("비밀번호가 서로 다릅니다.");
        }

        const body = {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            nickname: nickname
        };
        axios.post('/api/users', body)
            .then(function (res) {
                if (res.data.isDuplicated) {
                    return alert(res.data.message)
                } else if (res.data.success) {
                    alert(res.data.message);
                    return window.location = "/"
                }
            });
    }


    return (
        <div className="Join">
            <form className="form_join" onSubmit={submitHandler}>
                <div className="input_div">
                    <label> 이메일 </label>
                    <input type="email" name="email" onChange={onChangeInput} value={email} required />
                </div>
                <hr />
                <div className="input_div">
                    <label> 비밀번호 </label>
                    <input type="password" name="password" onChange={onChangeInput} value={password} required />
                </div>
                <hr />
                <div className="input_div">
                    <label> 비밀번호 확인 </label>
                    <input type="password" name="confirmPassword" onChange={onChangeInput} value={confirmPassword} required />
                </div>
                <hr />
                <div className="input_div">
                    <label> 닉네임 </label>
                    <input type="nickname" name="nickname" onChange={onChangeInput} value={nickname} required />
                </div>
                <hr />
                <button> 회원가입 </button>
            </form>
        </div>
    )
}

export default Join
