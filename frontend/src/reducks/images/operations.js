import API from "../../API";
import { fetchImagesAction, fetchImageAction } from "./actions";

const api = new API();

export const fetchImages = (page) => {
  return async (dispatch, getState) => {
    return api
      .getImages(page)
      .then((images) => {
        const prevImages = getState().images.list;
        const nextPosts = [...prevImages, ...images["results"]];
        let hasNext = false;
        if (images["next"]) {
          hasNext = true;
        }
        dispatch(fetchImagesAction(nextPosts, hasNext));
      })
      .catch((error) => {
        alert("Failed to connect API: /images/");
      });
  };
};
