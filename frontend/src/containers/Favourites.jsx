import React, { useEffect } from "react";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";
import { useDispatch, useSelector } from "react-redux";

import ImgSearch from "../assets/img/icon-search.svg";
import ImgFavourites from "../assets/img/favourities-image1.png";
import { getFavourites } from "../reducks/favourites/selectors";

export default function Favourites() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);

  useEffect(() => {
    dispatch(fetchFromLocalStorage());
  }, []);

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
          {favourites &&
            favourites.map((favourite) => (
              <div>
                <div class="fav-image" key={favourite.id}>
                  <img src={favourite.image} alt="" />
                </div>
                <div class="fav-btn">
                  <input
                    type="submit"
                    value="Download"
                    class="fav-download-btn"
                  />
                  <input type="submit" value="Remove" class="fav-remove-btn" />
                </div>
              </div>
            ))}
          ;
        </div>
      </section>
    </div>
  );
}
