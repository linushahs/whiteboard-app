import { atom } from "recoil";

export const rectanglesList = atom({
  key: "rectangles",
  default: [],
});

export const circlesList = atom({
  key: "cirlces",
  default: [],
});

export const linesList = atom({
  key: "cirlces",
  default: [],
});

export const cursorStyle = atom({
  key: "cursorStyle",
  default: {
    type: "default",
    shape: "",
    visibility: false,
  },
});
