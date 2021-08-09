import API from "../../API";
import { fetchImagesAction, fetchImageAction } from "./actions";

const api = new API();

export const fetchImages = () => {
  return async (dispatch) => {
    return api
      .getImages()
      .then((images) => {
        dispatch(fetchImagesAction(images));
      })
      .catch((error) => {
        alert("Failed to connect API: /images/");
      });
  };
};
