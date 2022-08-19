"use strict";

export function applyMasks() {
  const telefoonArr = document.getElementsByClassName("telefoon");

  [...telefoonArr].forEach((element) => {
    Inputmask("9999 99 99 99").mask(element);
  });

  const rijksregArr = document.getElementsByClassName("rijksregisternummer");

  [...rijksregArr].forEach((element) => {
    Inputmask("99.99.99-999.99").mask(element);
  });
}
