import React, { useState } from 'react'

function ProductSell() {

    const [inputs, setInputs] = useState({
        productName: '',
        productPrice: '',
        productDesc: '',
    });

    const { productName, productPrice, productDesc } = inputs;

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onChangeFile = (e) => {
        const { file } = e.target.files;
    }


    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className="Sell">
            <form className="form_sell" onSubmit={submitHandler}>
                <div className="input_div">
                    <label> 파일 </label>
                    <input type="file" accept="image/*" onChange={onChangeFile} multiple />
                </div>
                <hr />
                <div className="input_div">
                    <label> 상품이름 </label>
                    <br />
                    <input type="text" name="productName" onChange={onChangeInput} value={productName} required />
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

export default ProductSell
