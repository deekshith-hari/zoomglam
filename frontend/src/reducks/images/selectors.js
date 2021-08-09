import { createSelector } from "reselect";

const imagesSelector = (state) => state.images;

export const getImages = createSelector(
  [imagesSelector],
  (state) => state.list
);
