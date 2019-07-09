import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/parallax-mountain.js";
import "./scripts/skills.js";
import "./scripts/slider.js";
// import "./scripts/parallax-budda.js";