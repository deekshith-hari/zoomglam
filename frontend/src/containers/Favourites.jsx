import React from "react";

import ImgSearch from "../assets/img/icon-search.svg";
import ImgFavourites from "../assets/img/favourities-image1.png";

export default function Favourites() {
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
          <p>Favourites</p>
        </div>

        <div class="fav-box">
          <div class="fav-image">
            <img src={ImgFavourites} alt="" />
          </div>
          <div class="fav-btn">
            <input type="submit" value="Download" class="fav-download-btn" />
            <input type="submit" value="Remove" class="fav-remove-btn" />
          </div>
        </div>

        <div class="fav-box">
          <div class="fav-image">
            <img src={ImgFavourites} alt="" />
          </div>
          <div class="fav-btn">
            <input type="submit" value="Download" class="fav-download-btn" />
            <input type="submit" value="Remove" class="fav-remove-btn" />
          </div>
        </div>

        <div class="fav-box">
          <div class="fav-image">
            <img src={ImgFavourites} alt="" />
          </div>
          <div class="fav-btn">
            <input type="submit" value="Download" class="fav-download-btn" />
            <input type="submit" value="Remove" class="fav-remove-btn" />
          </div>
        </div>
      </section>
    </div>
  );
}
