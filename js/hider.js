"use strict";

import { applyMasks } from "./inputmaskHandler.js";

// List of all selects that can hide a part

const boolean_array = [
  document.getElementById("kind_medicatie_boolean"),
  document.getElementById("kind_alergieen_boolean"),
  document.getElementById("kind_kinderziektes_boolean"),
  document.getElementById("kind_speciale_zorgen_boolean"),
  document.getElementById("kind_bijzonderheden_gezin_boolean"),
  document.getElementById("kind_voedingsgewoontes_boolean"),
  document.getElementById("kind_slapen_speciaal_boolean"),
  document.getElementById("betaling_domiciliering_boolean"),
];

boolean_array.forEach((e) => {
  // When the user changes the value
  e.onchange = () => {
    // Get the element that has to be hidden / shown
    const hider = document.getElementById(e.dataset.hider);
    // If the option is "Ja": show the element that was hidden
    if (e.value === "ja") {
      if (hider.classList.contains("hide")) {
        hider.classList.remove("hide");
      }

      // In any other case hide the element
    } else {
      if (!hider.classList.contains("hide")) {
        hider.classList.add("hide");
      }
    }
  };
});

// const kind_allerg = document.getElementById("kind_alergieen_boolean");
// hideAndShow(kind_allerg, allergieen, "hider_allergieen");

// const kind_ziektes = document.getElementById("kind_kinderziektes_boolean");
// hideAndShow(kind_ziektes, kinderziektes);

// const kind_speciale_zorgen = document.getElementById(
//   "kind_speciale_zorgen_boolean"
// );
// hideAndShow(kind_speciale_zorgen, specialezorgen);

// const bijzonderheden_gezin = document.getElementById(
//   "kind_bijzonderheden_gezin_boolean"
// );
// hideAndShow(bijzonderheden_gezin, bijzonderhedengezin);

// const kind_voedingsgewoontes = document.getElementById(
//   "kind_voedingsgewoontes_boolean"
// );
// hideAndShow(kind_voedingsgewoontes, voedingsgewoontes);

// const kind_slapen_speciaal = document.getElementById(
//   "kind_slapen_speciaal_boolean"
// );
// hideAndShow(kind_slapen_speciaal, slaapspeciaal);

// const betaling = document.getElementById("betaling_domiciliering_boolean");
// hideAndShow(betaling, domicilie);

// function hideAndShow(element, callback, id) {
//   element.onchange = () => {
//     const hider = document.getElementById(element.dataset.hider);
//     if (element.value === "ja") {
//       hider.insertAdjacentHTML("beforeend", callback());
//       console.log(id);

//       document.querySelectorAll(`div#${id} input`).forEach((field) => {
//         inputChangeErrorField(field);
//         addToCheckList(field);
//       });

//       if (element.dataset.hider === "hider_betaling") {
//         setupSignature();
//       }
//     } else {
//       hider.innerHTML = "";
//     }
//   };
// }

// // Kind Medicatie
// const kind_med = document.getElementById("kind_medicatie_boolean");
// let counter = 1;
// let val = [["", ""]];

// kind_med.onchange = () => {
//   const div = document.getElementById("hider_medicatie");
//   if (kind_med.value === "ja") {
//     updateList(div);
//   } else {
//     div.innerHTML = "";
//   }
// };

// function updateList(div) {
//   div.innerHTML = "";
//   for (let i = 0; i < counter; i++) {
//     div.insertAdjacentHTML("beforeend", medicatie(i + 1, val[i][0], val[i][1]));
//   }
//   div.insertAdjacentHTML(
//     "beforeend",
//     `<div class="row align-items-end">
//   <div class="col col-12 col-sm-6 col-md-6 col-lg-3">
//     <div class="form-group">
//       <input id="voeg_med_toe" class="form-control" type="button" value="Voeg medicatie toe" />
//     </div>
//   </div>
// </div>`
//   );

//   const b = document.getElementById("voeg_med_toe");

//   b.onclick = () => {
//     saveDataInArray();
//     val.push(["", ""]);
//     counter++;
//     updateList(div);
//   };

//   const verwijder_knoppen = [
//     ...document.getElementsByClassName("verwijder_med_knop"),
//   ];

//   verwijder_knoppen.forEach((element) => {
//     element.onclick = () => {
//       saveDataInArray();
//       val.splice(element.dataset.remove - 1, 1);
//       counter--;
//       updateList(div);
//     };
//   });
// }

// function saveDataInArray() {
//   const arrNaam = [...document.getElementsByClassName("kind_med_naam")];
//   const arrSchema = [...document.getElementsByClassName("kind_med_schema")];

//   val = [];
//   arrNaam.forEach((e, i) => {
//     val.push([e.value, arrSchema[i].value]);
//   });
// }

// // Afhalers

// const voeg_pers_toe_knop = document.getElementById("voeg_pers_toe");
// const pers_data = [];

// voeg_pers_toe_knop.onclick = () => {
//   // Add an empty entry
//   pers_data.push(["", "", "", ""]);
//   saveHTMLtoData();
//   persDataToHTML();
// };

// function saveHTMLtoData() {
//   const voornaam = document.getElementsByClassName("persoon_voornaam");
//   const achternaam = document.getElementsByClassName("persoon_achternaam");
//   const verwandschap = document.getElementsByClassName("persoon_verwandschap");
//   const telefoon = document.getElementsByClassName("persoon_telefoon");

//   if (voornaam.length > 0) {
//     [...voornaam].forEach((element, index) => {
//       pers_data[index] = [
//         element.value,
//         achternaam[index].value,
//         verwandschap[index].value,
//         telefoon[index].value,
//       ];
//     });
//   }
// }

// function persDataToHTML() {
//   const div = document.getElementById("personen_afhalen");

//   // Clear html and add html again
//   div.innerHTML = "";

//   pers_data.forEach((entry, index) => {
//     div.insertAdjacentHTML(
//       "beforeend",
//       afhalen(index + 1, entry[0], entry[1], entry[2], entry[3])
//     );
//   });

//   const knoppen = document.getElementsByClassName("verwijder_persoon_knop");

//   if (knoppen.length > 0) {
//     [...knoppen].forEach((element) => {
//       element.onclick = () => {
//         saveHTMLtoData();
//         pers_data.splice(element.dataset.remove - 1, 1);
//         persDataToHTML();
//       };
//     });
//   }

//   applyMasks();
// }

window.onload = applyMasks();
