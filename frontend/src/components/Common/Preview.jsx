import React, { useEffect, useState } from "react";

import ImgCloseButton from "../../assets/img/close-button.svg";
import ImgFavButton from "../../assets/img/fav-button.svg";
import ImgPreview from "../../assets/img/preview-main.png";
import ImageWomam from "../../assets/img/woman110.png";
import ImgDownload from "../../assets/img/preview-download.png";
import API from "../../API";

const api = new API();

export default function Preview({ selectedImageId, setShowPreview }) {
  const [image, setImage] = useState({});

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

  return (
    <section class="preview">
      <div class="preview-inner">
        <div class="close-button">
          <img src={ImgCloseButton} onClick={() => clickCloseButton()} alt="" />
        </div>

        <div class="main-image">
          <img class="fav-btn" src={ImgFavButton} />
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
