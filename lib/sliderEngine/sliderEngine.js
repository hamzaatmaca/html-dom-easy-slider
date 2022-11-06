const sliderEngine = (params, exp) => {
  let i = 0;

  params[0].style.display = "block";

  setInterval(function () {
    params.forEach((img, k) => {
      img.style.display = "none";
    });

    if (i == params.length) {
      i = 0;
    }

    params[i].style.display = "block";

    i++;
  }, exp.exp);
  return params;
};

export default sliderEngine;
