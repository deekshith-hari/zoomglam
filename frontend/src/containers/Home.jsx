import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchImages } from "../reducks/images/operations";
import { getImages, getHasNext } from "../reducks/images/selectors";

import ImgBackground from "../assets/img/section1-bg.png";
import ImgSearch from "../assets/img/icon-search.svg";
import Preview from "../components/Common/Preview";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const images = getImages(selector);
  const hasNext = getHasNext(selector);
  const [page, setPage] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(null);

  useEffect(() => {
    dispatch(fetchImages(page));
    setPage(page + 1);
  }, []);

  const clickImage = (imageId) => {
    setSelectedImageId(imageId);
    setShowPreview(true);
  };

  const clickShowMore = () => {
    dispatch(fetchImages(page));
    setPage(page + 1);
  };

  return (
    <div>
      {showPreview && (
        <Preview
          setShowPreview={setShowPreview}
          selectedImageId={selectedImageId}
        />
      )}
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
          {images.map((image) => (
            <li key={image.id} onClick={() => clickImage(image.id)}>
              <img src={image.image} alt="" />
            </li>
          ))}
        </ul>
        {hasNext && (
          <div class="show-more">
            <input type="submit" value="Show more" onClick={clickShowMore} />
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
