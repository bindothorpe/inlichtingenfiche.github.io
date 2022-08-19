"use strict";

export function inputChangeError(array) {
  array.forEach((field) => {
    field.oninput = (e) => {
      if (!field.value || !field.value.trim()) {
        field.classList.add("error_empty");
      } else {
        if (field.classList.contains("error_empty")) {
          field.classList.remove("error_empty");
        }
      }
    };
  });
}

export function inputChangeErrorField(field) {
  field.oninput = (e) => {
    if (!field.value || !field.value.trim()) {
      field.classList.add("error_empty");
    } else {
      if (field.classList.contains("error_empty")) {
        field.classList.remove("error_empty");
      }
    }
  };
}

function isFieldRequiredAndEmpty(fields) {
  let field;
  fields.forEach((f) => {
    if (f.tagname === "SELECT") {
      if (f.required && !getSelectText(f)) {
        if (!field) field = f;
        f.classList.add("error_empty");
        f.onchange = () => {
          if (f.required && !getSelectText(f)) return;
          f.classList.remove("error_empty");
        };
      }
    } else {
      if (f.required && !f.value) {
        if (!field) field = f;
        f.classList.add("error_empty");
        f.onchange = () => {
          if (f.required && !f.value) return;
          f.classList.remove("error_empty");
        };
      }
    }
  });

  if (field && field.required) {
    if (!field.value) {
      field.focus();
      return true;
    }
  }
  return false;
}
