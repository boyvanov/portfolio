import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/parallax-mountain";
import "./scripts/skills"; 
import "./scripts/slider";
import "./scripts/reviews__slider";
import "./scripts/popup-menu";

import Validate from "./scripts/form";

const form = document.querySelector('.j-form');

if (form) {
  const validate = new Validate({
    element: '.j-form'
  });

  validate.init(); 
}