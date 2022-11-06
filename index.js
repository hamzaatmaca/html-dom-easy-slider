import { SliderObject } from "./lib/slider.js";

const EasySlider = (props, layoutProps, exp) => {
  let typeControl;

  if (props.length === 0 || props === "" || props.length === undefined) {
    typeControl = false;
    console.error("Image urls cannot be undefined");
  } else if (props.length > 0) {
    props.forEach((el) => {
      if (typeof el !== "string") {
        typeControl = false;
        console.error(
          "Image urls must be string. Please check your image urls paths"
        );
      }
    });
  }

  if (typeof exp.exp !== "number") {
    typeControl = false;
    console.error("Exp time must be integer");
  }

  if (typeControl !== false) {
    return new SliderObject(props, layoutProps, exp).run();
  }
};

export { EasySlider };
