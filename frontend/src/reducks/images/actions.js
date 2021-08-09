export const FETCH_IMAGES = "FETCH_IMAGES";
export const fetchImagesAction = (images) => {
  return {
    type: "FETCH_IMAGES",
    payload: images,
  };
};

export const FETCH_IMAGE = "FETCH_IMAGE";
export const fetchImageAction = (image) => {
  return {
    type: "FETCH_IMAGE",
    payload: image,
  };
};

// export const FETCH_TAG = "FETCH_TAG";
// export const fetchTagsAction = (tags) => {
//   return {
//     type: "FETCH_TAG",
//     payload: tags,
//   };
// };
