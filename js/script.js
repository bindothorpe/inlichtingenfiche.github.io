const emptySlash = function (input) {
  if (input.trim()) {
    return input.trim();
  } else {
    return "/";
  }
};

const getSelectText = function (field) {
  return field.options[field.selectedIndex].text;
};

// Kind
const kind_voornaam = document.getElementById("kind_voornaam");
const kind_naam = document.getElementById("kind_naam");
const kind_geboortedatum_dag = document.getElementById(
  "kind_geboortedatum_dag"
);
const kind_geboortedatum_maand = document.getElementById(
  "kind_geboortedatum_maand"
);
const kind_geboortedatum_jaar = document.getElementById(
  "kind_geboortedatum_jaar"
);
const kind_prematuur_boolean = document.getElementById(
  "kind_prematuur_boolean"
);
const kind_geboorteplaats = document.getElementById("kind_geboorteplaats");
const kind_rijksregisternummer = document.getElementById(
  "kind_rijksregisternummer"
);
const kind_taal = document.getElementById("kind_taal");

const kind_geslacht_boolean = document.getElementById("kind_geslacht_boolean");

// Nood
const nood_voornaam = document.getElementById("nood_voornaam");
const nood_naam = document.getElementById("nood_naam");
const nood_verwantschap = document.getElementById("nood_verwantschap");
const nood_telefoon = document.getElementById("nood_telefoon");

// Afhalen
const afhalen1_voornaam = document.getElementById("afhalen1_voornaam");
const afhalen1_naam = document.getElementById("afhalen1_naam");
const afhalen1_verwantschap = document.getElementById("afhalen1_verwantschap");
const afhalen1_telefoon = document.getElementById("afhalen1_telefoon");

const afhalen2_voornaam = document.getElementById("afhalen2_voornaam");
const afhalen2_naam = document.getElementById("afhalen2_naam");
const afhalen2_verwantschap = document.getElementById("afhalen2_verwantschap");
const afhalen2_telefoon = document.getElementById("afhalen2_telefoon");

const afhalen3_voornaam = document.getElementById("afhalen3_voornaam");
const afhalen3_naam = document.getElementById("afhalen3_naam");
const afhalen3_verwantschap = document.getElementById("afhalen3_verwantschap");
const afhalen3_telefoon = document.getElementById("afhalen3_telefoon");

const afhalen_niet_naam = document.getElementById("afhalen_niet_naam");

// Medisch
const huisarts_naam = document.getElementById("huisarts_naam");
const huisarts_adres = document.getElementById("huisarts_adres");
const huisarts_telefoon = document.getElementById("huisarts_telefoon");

const kind_medicatie_boolean = document.getElementById(
  "kind_medicatie_boolean"
);
const kind_medicatie1_naam = document.getElementById("kind_medicatie1_naam");
const kind_medicatie1_schema = document.getElementById(
  "kind_medicatie1_schema"
);
const kind_medicatie2_naam = document.getElementById("kind_medicatie2_naam");
const kind_medicatie2_schema = document.getElementById(
  "kind_medicatie2_schema"
);

const kind_alergieen_boolean = document.getElementById(
  "kind_alergieen_boolean"
);
const kind_alergieen_naam = document.getElementById("kind_alergieen_naam");
const kind_alergieen_behandeling = document.getElementById(
  "kind_alergieen_behandeling"
);

const kind_kinderziektes_boolean = document.getElementById(
  "kind_kinderziektes_boolean"
);
const kind_kinderziektes_naam = document.getElementById(
  "kind_kinderziektes_naam"
);

const kind_speciale_zorgen_boolean = document.getElementById(
  "kind_speciale_zorgen_boolean"
);
const kind_speciale_zorgen_naam = document.getElementById(
  "kind_speciale_zorgen_naam"
);
const kind_koortswerend_boolean = document.getElementById(
  "kind_koortswerend_boolean"
);
const kind_bijzonderheden_gezin_boolean = document.getElementById(
  "kind_bijzonderheden_gezin_boolean"
);
const bijzonderheden_gezin_naam = document.getElementById(
  "bijzonderheden_gezin_naam"
);

// Voeding
const kind_voedingsgewoontes_boolean = document.getElementById(
  "kind_voedingsgewoontes_boolean"
);
const kind_voedingsgewoontes = document.getElementById(
  "kind_voedingsgewoontes"
);

// Slapen
const kind_slapen_knuffel_boolean = document.getElementById(
  "kind_slapen_knuffel_boolean"
);
const kind_slapen_fopspeen_boolean = document.getElementById(
  "kind_slapen_fopspeen_boolean"
);
const kind_slapen_zij = document.getElementById("kind_slapen_zij");
const kind_slapen_buik = document.getElementById("kind_slapen_buik");
const kind_slapen_rug = document.getElementById("kind_slapen_rug");
const kind_slapen_speciaal_boolean = document.getElementById(
  "kind_slapen_speciaal_boolean"
);
const kind_slaap_speciaal_lijst = document.getElementById(
  "kind_slaap_speciaal_lijst"
);

// Troosten
const kind_troosten = document.getElementById("kind_troosten");
const kind_troosten_woorden = document.getElementById("kind_troosten_woorden");
const kind_troosten_wanneer = document.getElementById("kind_troosten_wanneer");

// Opmerkingen
const kind_opmerking = document.getElementById("kind_opmerking");
const kind_op_stap_boolean = document.getElementById("kind_op_stap_boolean");
const kind_vervoeren_boolean = document.getElementById(
  "kind_vervoeren_boolean"
);

// Beeld
const kind_beeldmateriaal_intern_boolean = document.getElementById(
  "kind_beeldmateriaal_intern_boolean"
);
const kind_beeldmateriaal_extern_boolean = document.getElementById(
  "kind_beeldmateriaal_extern_boolean"
);

// IBAN
const betaling_domiciliering_boolean = document.getElementById(
  "betaling_domiciliering_boolean"
);
const iban = document.getElementById("iban");
const bic = document.getElementById("bic");

$(document).ready(function () {
  // TODO: Check als alles ingevuld is

  // Initialisering van de signature
  setupSignature();

  // lijst met alle velden die verplicht zijn
  let arr = [
    kind_voornaam,
    kind_naam,
    kind_geslacht_boolean,
    kind_geboortedatum_dag,
    kind_geboortedatum_maand,
    kind_geboortedatum_jaar,
    kind_geboorteplaats,
    kind_rijksregisternummer,
    kind_taal,
    nood_naam,
    nood_voornaam,
    nood_verwantschap,
    nood_telefoon,
    huisarts_naam,
    huisarts_adres,
    huisarts_telefoon,
    kind_medicatie_boolean,
    kind_alergieen_boolean,
    kind_kinderziektes_boolean,
    kind_speciale_zorgen_boolean,
    kind_koortswerend_boolean,
    kind_bijzonderheden_gezin_boolean,
    kind_voedingsgewoontes_boolean,
    kind_slapen_knuffel_boolean,
    kind_slapen_fopspeen_boolean,
    kind_slapen_speciaal_boolean,
    kind_speciale_zorgen_boolean,
    kind_op_stap_boolean,
    kind_vervoeren_boolean,
    kind_beeldmateriaal_intern_boolean,
    kind_beeldmateriaal_extern_boolean,
    kind_prematuur_boolean,
    betaling_domiciliering_boolean,
  ];

  // Registreer een event zodat wanneer een veld aangepast wordt maar niet correct
  // dat het de error display is.
  inputChangeError(arr);

  // Verstuur button to create and download the excel file
  $("#btn_verstuur").click(function () {
    console.log("btn clicked");

    if (isFieldRequiredAndEmpty(arr)) {
      console.log("Niet ingevuld");
      return;
    }

    // Data voor excel file opmaken
    var data = [
      [
        iban.value,
        bic.value,
        kind_naam.value,
        kind_voornaam.value,
        getSelectText(kind_geslacht_boolean),
        kind_rijksregisternummer.value,
        kind_geboortedatum_dag.value,
        kind_geboortedatum_maand.value,
        kind_geboortedatum_jaar.value,
        kind_geboorteplaats.value,
        kind_taal.value,
        getSelectText(kind_medicatie_boolean),
        emptySlash(kind_medicatie1_naam.value),
        emptySlash(kind_medicatie1_schema.value),
        emptySlash(kind_medicatie2_naam.value),
        emptySlash(kind_medicatie2_schema.value),
        getSelectText(kind_koortswerend_boolean),
        getSelectText(kind_speciale_zorgen_boolean),
        emptySlash(kind_speciale_zorgen_naam.value),
        getSelectText(kind_alergieen_boolean),
        emptySlash(kind_alergieen_naam.value),
        emptySlash(kind_alergieen_behandeling.value),
        huisarts_naam.value,
        huisarts_adres.value,
        huisarts_telefoon.value,
        getSelectText(kind_kinderziektes_boolean),
        emptySlash(kind_kinderziektes_naam.value),
        getSelectText(kind_voedingsgewoontes_boolean),
        emptySlash(kind_voedingsgewoontes.value),
        getSelectText(kind_slapen_knuffel_boolean),
        getSelectText(kind_slapen_knuffel_boolean),
        kind_slapen_zij.value,
        kind_slapen_buik.value,
        kind_slapen_rug.value,
        getSelectText(kind_slapen_speciaal_boolean),
        emptySlash(kind_slaap_speciaal_lijst.value),
        nood_naam.value,
        nood_voornaam.value,
        nood_verwantschap.value,
        nood_telefoon.value,
        emptySlash(afhalen1_naam.value),
        emptySlash(afhalen1_voornaam.value),
        emptySlash(afhalen1_verwantschap.value),
        emptySlash(afhalen1_telefoon.value),
        emptySlash(afhalen2_naam.value),
        emptySlash(afhalen2_voornaam.value),
        emptySlash(afhalen2_verwantschap.value),
        emptySlash(afhalen2_telefoon.value),
        emptySlash(afhalen3_naam.value),
        emptySlash(afhalen3_voornaam.value),
        emptySlash(afhalen3_verwantschap.value),
        emptySlash(afhalen3_telefoon.value),
        emptySlash(afhalen_niet_naam.value),
        emptySlash(kind_troosten.value),
        emptySlash(kind_troosten_woorden.value),
        emptySlash(kind_troosten_wanneer.value),
        emptySlash(bijzonderheden_gezin_naam.value),
        getSelectText(kind_prematuur_boolean),
        getSelectText(kind_op_stap_boolean),
        getSelectText(kind_vervoeren_boolean),
        getSelectText(kind_beeldmateriaal_intern_boolean),
        getSelectText(kind_beeldmateriaal_extern_boolean),
        emptySlash(kind_opmerking.value),
      ],
    ];

    // Create the workbook
    var workbook = XLSX.utils.book_new();

    // Create the worksheet with the data we created.
    var worksheet = XLSX.utils.aoa_to_sheet(data);

    // Put the worksheet we created on the workbook and give it a name.
    workbook.SheetNames.push("First");
    workbook.Sheets["First"] = worksheet;

    var xlsbin = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "binary",
    });

    const buffer = new ArrayBuffer(xlsbin.length);
    const array = new Uint8Array(buffer);

    for (var i = 0; i < xlsbin.length; i++) {
      array[i] = xlsbin.charCodeAt(i) & 0xff;
    }
    var xlsblob = new Blob([buffer], { type: "application/octet-stream" });

    // Force the download and give it a name.
    const url = window.URL.createObjectURL(xlsblob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${document.getElementById("kind_naam").value}_${
      document.getElementById("kind_voornaam").value
    }.xlsx`;
    anchor.click();
    window.URL.revokeObjectURL(url);
  });
});

function inputChangeError(array) {
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

    field.addEventListener("focusout", (e) => {
      if (!field.value || !field.value.trim()) {
        field.classList.add("error_empty");
      }
    });
  });
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

function setupSignature() {
  // Generate the signature field
  $("#signature").jSignature();

  // Reset button to clear the signature field
  $("#btn_clear").click(function () {
    $("#signature").jSignature("clear");
  });
}
