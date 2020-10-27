import React from "react";
import { render } from "react-dom";

render(
  React.createElement("div", {class: "menu"}, ""),
  React.createElement("a", {}, "Servicios"),
  React.createElement("a", {}, "Ofertas"),
  React.createElement("a", {}, "Productos"),
  

  document.getElementById("root")
);
