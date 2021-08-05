import React from "react";
import ImgImg1 from "../assets/img/img1.png";
import ImgImg2 from "../assets/img/img2.png";
import ImgImg3 from "../assets/img/img3.png";
import ImgImg4 from "../assets/img/img4.png";
import ImgImg5 from "../assets/img/img5.png";
import ImgImg6 from "../assets/img/img6.png";
import ImgBackground from "../assets/img/section1-bg.png";
import ImgSearch from "../assets/img/icon-search.svg";
import ImgCloseButton from "../assets/img/close-button.svg";
import ImgFavButton from "../assets/img/fav-button.svg";
import ImgPreview from "../assets/img/preview-main.png";
import ImageWomam from "../assets/img/woman110.png";
import ImgDownload from "../assets/img/preview-download.png";

export default function Preview() {
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
      <section class="preview">
        <div class="preview-inner">
          <a href="" class="close-button">
            <img src={ImgCloseButton} alt="" />
          </a>

          <div class="main-image">
            <img class="fav-btn" src={ImgFavButton} />
            <img class="preview-img" src={ImgPreview} />
            <div class="image-description">
              <p class="tag-title">office #1</p>
              <p class="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
                sunt libero, officiis sit earum Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Pariatur ab quod ipsum dolor!quis
                eos ad voluptates impedit tempora.
              </p>
            </div>
          </div>

          <div class="download-preview">
            <p>Preview</p>
            <img class="checker" src={ImageWomam} alt="" />
            <img class="img-preview" src={ImgDownload} />

            <input type="submit" value="Download" />
          </div>
        </div>
      </section>
    </div>
  );
}
