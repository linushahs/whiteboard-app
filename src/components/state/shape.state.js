import { atom, selector } from "recoil";

export const rectanglesListState = atom({
  key: "rectangles",
  default: [],
});

export const circlesListState = atom({
  key: "cirlces",
  default: [],
});

export const linesListState = atom({
  key: "lines",
  default: [],
});

export const cursorStyleState = atom({
  key: "cursorStyle",
  default: {
    type: "default",
    shape: "",
    visibility: "hidden",
  },
});

export const selectedShapeState = atom({
  key: "selectedShape",
  default: "",
});
