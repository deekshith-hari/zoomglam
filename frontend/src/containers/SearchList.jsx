import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ImgSearch from "../assets/img/icon-search.svg";

import { fetchImages } from "../reducks/images/operations";
import { getImages } from "../reducks/images/selectors";

import queryString from "query-string";

export default function SearchList() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const parsed = queryString.parse(window.location.search);
  const images = getImages(selector);
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  console.log(parsed);

  useEffect(() => {
    if (parsed.page != undefined) {
      setPage(parsed.page);
    }
    if (parsed.search != undefined) {
      setSearch(parsed.search);
    }
  }, []);

  useEffect(() => {
    dispatch(fetchImages(page, search));
  }, [page, search]);

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
          <p></p>
        </div>
        <ul class="image-list">
          {images.map((image) => (
            <li key={image.id}>
              <img src={image.image} alt="" />
            </li>
          ))}
        </ul>
        <div class="show-more">
          <input type="submit" value="Show more" />
        </div>
      </section>
    </div>
  );
}
