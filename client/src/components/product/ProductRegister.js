import axios from 'axios';
import React, { useState, setState } from 'react'
import { useSelector } from 'react-redux'

function ProductRegister(props) {

    const [inputs, setInputs] = useState({
        productTitle: '',
        productPrice: '',
        productDesc: '',
        productImage: null,
    });

    const user = useSelector(state => state.user);
    const { productTitle, productPrice, productDesc, productImage } = inputs;

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onChangeFile = (e) => {
        console.log(e.target.files[0]);
        
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }


    const productRegisterHandler = (event) => {
        event.preventDefault();
        const body = {
            title: productTitle,
            price: productPrice,
            description: productDesc,
            writer: user.userData._id,
        }
        axios.post('/api/products', body)
            .then(function(res) {
                if(res.data.success) {
                    alert(res.data.message);
                    return window.location = "/"
                } else {
                    return alert(res.data.err);
                }
            });
    }

    return (
        <div className="Sell">
            <form className="form_sell" onSubmit={productRegisterHandler}>
                <div className="input_div">
                    <label> 파일 </label>
                    <input type="file" name="productImage" accept="image/*" onChange={onChangeFile} />
                </div>
                <hr />
                <div className="input_div">
                    <label> 상품이름 </label>
                    <br />
                    <input type="text" name="productTitle" onChange={onChangeInput} value={productTitle} required />
                </div>
                <hr />
                <div className="input_div">
                    <label> 가격 </label>
                    <br />
                    <input type="number" name="productPrice" onChange={onChangeInput} value={productPrice} required />
                </div>
                <hr />
                <div className="input_div">
                    <label> 설명 </label>
                    <br />
                    <textarea name="productDesc" onChange={onChangeInput} value={productDesc} required />
                </div>
                <hr />

                <button> 등록 </button>
            </form>
        </div>
    )
}

export default ProductRegister
