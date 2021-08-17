import React, { useEffect, useState } from "react";
import { addFavourite } from "../../reducks/favourites/operations";

import ImgCloseButton from "../../assets/img/close-button.svg";
import ImgFavButton from "../../assets/img/fav-button.svg";
import ImageWomam from "../../assets/img/woman110.png";
import API from "../../API";
import { useDispatch, useSelector } from "react-redux";

const api = new API();

export default function Preview({ selectedImageId, setShowPreview }) {
  const dispatch = useDispatch();
  const [image, setImage] = useState({});
  const [showFavourite, setShowFavourite] = useState(true);

  useEffect(() => {
    api
      .getImage(selectedImageId)
      .then((response) => {
        setImage(response);
      })
      .catch((error) => {
        alert("Failed to connect API: ImageDetail");
      });
  }, []);

  const clickCloseButton = () => {
    setShowPreview(false);
  };

  const clickFavourite = (image) => {
    setShowFavourite(false);
    dispatch(addFavourite(image));
  };

  return (
    <section class="preview">
      <div class="preview-inner">
        <div class="close-button">
          <img src={ImgCloseButton} onClick={() => clickCloseButton()} alt="" />
        </div>

        <div class="main-image">
          {showFavourite && (
            <img
              class="fav-btn"
              src={ImgFavButton}
              onClick={() => clickFavourite(image)}
            />
          )}
          <img class="preview-img" src={image.image} />
          <div class="image-description">
            <p class="tag-title">{image.name}</p>
            <p class="description">{image.description}</p>
          </div>
        </div>

        <div class="download-preview">
          <p>Preview</p>
          <img class="checker" src={ImageWomam} alt="" />
          <img class="img-preview" src={image.image} />

          <input type="submit" value="Download" />
        </div>
      </div>
    </section>
  );
}
