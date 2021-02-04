import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="Main">
      <p id="HotItem">
        <b>중고거래 인기매물</b>
      </p>
      <div className="cardWrap">
        <article className="FlatCard" id="1">
          <Link to={`/detail`}>
            <div className="cardPhoto">
              <img src="/images/pic1.png" alt="test" className="cardPhoto" />
            </div>
            <div className="cardInfo">
              <h2 className="cardTitle"> title </h2>
              <div className="cardPrice"> 60,000원 </div>
              <div className="cardRegionName"> 반포1동, 서초구 </div>
            </div>
          </Link>
        </article>

        <article className="FlatCard">
          <div className="cardPhoto">
            <img src="/images/pic1.png" alt="test" className="cardPhoto" />
          </div>
          <div className="cardInfo">
            <h2 className="cardTitle"> title </h2>
            <div className="cardPrice"> 60,000원 </div>
            <div className="cardRegionName"> 반포1동, 서초구 </div>
          </div>
        </article>

        <article className="FlatCard">
          <div className="cardPhoto">
            <img src="/images/pic1.png" alt="test" className="cardPhoto" />
          </div>
          <div className="cardInfo">
            <h2 className="cardTitle"> title </h2>
            <div className="cardPrice"> 60,000원 </div>
            <div className="cardRegionName"> 반포1동, 서초구 </div>
          </div>
        </article>

        <article className="FlatCard">
          <div className="cardPhoto">
            <img src="/images/pic1.png" alt="test" className="cardPhoto" />
          </div>
          <div className="cardInfo">
            <h2 className="cardTitle"> title </h2>
            <div className="cardPrice"> 60,000원 </div>
            <div className="cardRegionName"> 반포1동, 서초구 </div>
          </div>
        </article>

        <article className="FlatCard">
          <div className="cardPhoto">
            <img src="/images/pic1.png" alt="test" className="cardPhoto" />
          </div>
          <div className="cardInfo">
            <h2 className="cardTitle"> title </h2>
            <div className="cardPrice"> 60,000원 </div>
            <div className="cardRegionName"> 반포1동, 서초구 </div>
          </div>
        </article>

        <article className="FlatCard">
          <div className="cardPhoto">
            <img src="/images/pic1.png" alt="test" className="cardPhoto" />
          </div>
          <div className="cardInfo">
            <h2 className="cardTitle"> title </h2>
            <div className="cardPrice"> 60,000원 </div>
            <div className="cardRegionName"> 반포1동, 서초구 </div>
          </div>
        </article>

        <article className="FlatCard">
          <div className="cardPhoto">
            <img src="/images/pic1.png" alt="test" className="cardPhoto" />
          </div>
          <div className="cardInfo">
            <h2 className="cardTitle"> title </h2>
            <div className="cardPrice"> 60,000원 </div>
            <div className="cardRegionName"> 반포1동, 서초구 </div>
          </div>
        </article>

        <article className="FlatCard">
          <div className="cardPhoto">
            <img src="/images/pic1.png" alt="test" className="cardPhoto" />
          </div>
          <div className="cardInfo">
            <h2 className="cardTitle"> title </h2>
            <div className="cardPrice"> 60,000원 </div>
            <div className="cardRegionName"> 반포1동, 서초구 </div>
          </div>
        </article>

        <article className="FlatCard">
          <div className="cardPhoto">
            <img src="/images/pic1.png" alt="test" className="cardPhoto" />
          </div>
          <div className="cardInfo">
            <h2 className="cardTitle"> title </h2>
            <div className="cardPrice"> 60,000원 </div>
            <div className="cardRegionName"> 반포1동, 서초구 </div>
          </div>
        </article>

        <article className="FlatCard">
          <div className="cardPhoto">
            <img src="/images/pic1.png" alt="test" className="cardPhoto" />
          </div>
          <div className="cardInfo">
            <h2 className="cardTitle"> title </h2>
            <div className="cardPrice"> 60,000원 </div>
            <div className="cardRegionName"> 반포1동, 서초구 </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Main;
