import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImgImg1 from "../assets/img/img1.png";
import ImgImg2 from "../assets/img/img2.png";
import ImgImg3 from "../assets/img/img3.png";
import ImgImg4 from "../assets/img/img4.png";
import ImgImg5 from "../assets/img/img5.png";
import ImgImg6 from "../assets/img/img6.png";
import ImgBackground from "../assets/img/section1-bg.png";
import ImgSearch from "../assets/img/icon-search.svg";

import { fetchPosts } from "../reducks/posts/operations";
import { getPosts } from "../reducks/posts/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const posts = getPosts(selector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <section class="section1">
        <div class="p1">
          <p>Find your zoom</p>
        </div>
        <div class="p2">
          <p>background</p>
        </div>
        <div class="search-box">
          <div class="search-box-inner">
            <input type="text" placeholder="Type here.." />
            <img src={ImgSearch} alt="" />
          </div>
        </div>
        <img src={ImgBackground} class="section1-bg" />
        <div class="section1-bg-cover"></div>
      </section>

      <section class="section2">
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
};

export default Home;
