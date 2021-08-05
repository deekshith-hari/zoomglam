import React from "react";

import ImgImg1 from "../assets/img/img1.png";
import ImgImg2 from "../assets/img/img2.png";
import ImgImg3 from "../assets/img/img3.png";
import ImgImg4 from "../assets/img/img4.png";
import ImgImg5 from "../assets/img/img5.png";
import ImgImg6 from "../assets/img/img6.png";
import ImgSearch from "../assets/img/icon-search.svg";

export default function SearchList() {
  return (
    <div>
      <section class="section2">
        <div class="search-box">
          <div class="search-box-inner">
            <input type="text" placeholder="Office Space" />
            <img src={ImgSearch} alt="" />
          </div>
        </div>
        <div class="search-result">
          <p>Search</p>
          <p>
            {" "}
            <b>"Office Space"</b>
          </p>
        </div>
        <ul class="image-list">
          <li>
            <img src={ImgImg1} alt="" />
          </li>
          <li>
            <img src={ImgImg2} alt="" />
          </li>
          <li>
            <img src={ImgImg3} alt="" />
          </li>
          <li>
            <img src={ImgImg4} alt="" />
          </li>
          <li>
            <img src={ImgImg5} alt="" />
          </li>
          <li>
            <img src={ImgImg6} alt="" />
          </li>
          <li>
            <img src={ImgImg1} alt="" />
          </li>
          <li>
            <img src={ImgImg2} alt="" />
          </li>
          <li>
            <img src={ImgImg3} alt="" />
          </li>
          <li>
            <img src={ImgImg4} alt="" />
          </li>
          <li>
            <img src={ImgImg5} alt="" />
          </li>
          <li>
            <img src={ImgImg6} alt="" />
          </li>
        </ul>
        <div class="show-more">
          <input type="submit" value="Show more" />
        </div>
      </section>
    </div>
  );
}
