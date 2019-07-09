import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/parallax-mountain";
import "./scripts/skills"; 
import "./scripts/slider";
import "./scripts/widget";
// import "./scripts/parallax-budda";