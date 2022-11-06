const itemStyles = (sliderItem, layoutProps) => {
  let styleObj = {
    width: null,
    height: null,
    borderRadius: null,
    backgroundColor: null,
    overflow: null,
    display: null,
    justifyContent: null,
    alignItems: null,
    flexDirection: null,
    position: null,
    flexShrink: null,
    transition: null,
    boxShadow: null,
  };

  let sliderObj = Object.create(styleObj);
  const toCollect = (x, y) => {
    return Object.assign(x, y);
  };
  switch (String(sliderItem.nodeName)) {
    case "IMG":
      sliderObj.display = "none";
      sliderObj.width = "100%";
      sliderObj.height = "100%";
      sliderObj.borderRadius = "10px";
      sliderObj.position = "relative";
      sliderObj.flexShrink = "0";
      sliderObj.transition = "2s";
      toCollect(sliderItem.style, sliderObj);
      break;
    case "DIV":
      sliderObj.width = `${String(layoutProps?.width)}`;
      sliderObj.height = `${String(layoutProps?.height)} `;
      sliderObj.display = "flex";
      sliderObj.justifyContent = "center";
      sliderObj.alignItems = "center";
      sliderObj.overflow = "hidden";
      sliderObj.borderRadius = "10px";
      sliderObj.position = "relative";
      sliderObj.boxShadow = "2px 0 4px grey";

      toCollect(sliderItem.style, sliderObj);
      break;
  }
};

export default itemStyles;
