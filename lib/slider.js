import itemStyles from "./itemStyles/itemStyles.js";
import sliderEngine from "./sliderEngine/sliderEngine.js";

class SliderObject {
  constructor(props, layoutProps, exp) {
    this.layout = document.createElement("DIV");
    this.urls = props;
    this.layoutProps = layoutProps;
    this.exp = exp;
  }
  run() {
    return this.#createSliderLayout();
  }
  #createSliderLayout() {
    const imageArray = this.urls.map((param, key) => {
      let i = document.createElement("IMG");
      this.#createSliderItemStyle(i);
      i.src = param;
      this.layout.appendChild(i);
      return i;
    });
    this.#createSliderItemStyle(this.layout);
    sliderEngine(imageArray, this.exp);

    return this.layout;
  }
  #createSliderItemStyle(param) {
    return itemStyles(param, this.layoutProps);
  }
}

export { SliderObject };
