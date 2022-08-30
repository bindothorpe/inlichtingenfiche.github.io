"use strict";

export function createAndDownloadXmlFile(
  iban,
  bic,
  kind_achternaam,
  kind_voornaam,
  kind_geslacht,
  kind_rijksregisternummer,
  kind_geboorte_dag,
  kind_geboorte_maand,
  kind_geboorte_jaar,
  kind_geboorte_plaats,
  kind_gesproken_taal,
  kind_medicatie_boolean,
  kind_medicatie1_naam,
  kind_medicatie1_schema,
  kind_medicatie2_naam,
  kind_medicatie2_schema,
  kind_koortswerendmiddel_boolean,
  kind_speciale_zorg_boolean,
  kind_speciale_zorg_naam,
  kind_allergie_boolean,
  kind_allergie_naam,
  kind_allergie_behandeling,
  huisarts_naam,
  huisarts_adres,
  huisarts_telefoon,
  kind_kinderziektes_boolean,
  kind_kinderziektes_naam,
  kind_dieet_boolean,
  kind_dieet_naam,
  kind_slaap_knuffel_boolean,
  kind_slaap_fopspeen_boolean,
  kind_slaap_positie_zij_boolean,
  kind_slaap_positie_buik_boolean,
  kind_slaap_positie_rug_boolean,
  kind_slaap_speciaal_boolean,
  kind_slaap_speciaal_naam,
  contant_nood_naam,
  contact_nood_voornaam,
  contact_nood_verwantschap,
  contact_nood_telefoon,
  contact_afhalen_1_naam,
  contact_afhalen_1_voornaam,
  contact_afhalen_1_verwantschap,
  contact_afhalen_1_telefoon,
  contact_afhalen_2_naam,
  contact_afhalen_2_voornaam,
  contact_afhalen_2_verwantschap,
  contact_afhalen_2_telefoon,
  contact_afhalen_3_naam,
  contact_afhalen_3_voornaam,
  contact_afhalen_3_verwantschap,
  contact_afhalen_3_telefoon,
  contact_afhalen_niet,
  kind_troosten_hoe,
  kind_troosten_woorden,
  kind_troosten_wanneer,
  bijzonderheden_gezin,
  kind_prematuur_boolean,
  kind_op_stap_boolean,
  kind_vervoer_boolean,
  beeldmateriaal_intern_boolean,
  beeldmateriaal_extern_boolean,
  kind_opmerking,
  handtekening
) {
  const xmlString = `<inlichtingenfiche><betaling><iban>${iban}</iban><bic>${bic}</bic></betaling><handtekening>${handtekening}</handtekening><kind><algemeen><naam>${kind_achternaam}</naam><voornaam>${kind_voornaam}</voornaam><geslacht>${kind_geslacht}</geslacht><rijksregisternummer>${kind_rijksregisternummer}</rijksregisternummer><geboorte><dag>${kind_geboorte_dag}</dag><maand>${kind_geboorte_maand}</maand><jaar>${kind_geboorte_jaar}</jaar><plaats>${kind_geboorte_plaats}</plaats></geboorte><taal>${kind_gesproken_taal}</taal></algemeen><medisch><medicatie><boolean>${kind_medicatie_boolean}</boolean><medicatie id="1"><naam>${kind_medicatie1_naam}</naam><schema>${kind_medicatie1_schema}</schema></medicatie><medicatie id="2"><naam>${kind_medicatie2_naam}</naam><schema>${kind_medicatie2_schema}</schema></medicatie></medicatie><koortswerendmiddel>${kind_koortswerendmiddel_boolean}</koortswerendmiddel><specialezorg><boolean>${kind_speciale_zorg_boolean}</boolean><naam>${kind_speciale_zorg_naam}</naam></specialezorg><allergie><boolean>${kind_allergie_boolean}</boolean><naam>${kind_allergie_naam}</naam><behandeling>${kind_allergie_behandeling}</behandeling></allergie><huisarts><naam>${huisarts_naam}</naam><adres>${huisarts_adres}</adres><telefoon>${huisarts_telefoon}</telefoon></huisarts><kinderziektes><boolean>${kind_kinderziektes_boolean}</boolean><naam>${kind_kinderziektes_naam}</naam></kinderziektes></medisch><voeding><boolean>${kind_dieet_boolean}</boolean><naam>${kind_dieet_naam}</naam></voeding><slaap><knuffel>${kind_slaap_knuffel_boolean}</knuffel><fopspeen>${kind_slaap_fopspeen_boolean}</fopspeen><positie><zij>${kind_slaap_positie_zij_boolean}</zij><buik>${kind_slaap_positie_buik_boolean}</buik><rug>${kind_slaap_positie_rug_boolean}</rug></positie><speciaal><boolean>${kind_slaap_speciaal_boolean}</boolean><naam>${kind_slaap_speciaal_naam}</naam></speciaal></slaap></kind><contact><nood><naam>${contant_nood_naam}</naam><voornaam>${contact_nood_voornaam}</voornaam><verwantschap>${contact_nood_verwantschap}</verwantschap><telefoon>${contact_nood_telefoon}</telefoon></nood><afhalen id="1"><naam>${contact_afhalen_1_naam}</naam><voornaam>${contact_afhalen_1_voornaam}</voornaam><verwantschap>${contact_afhalen_1_verwantschap}</verwantschap><telefoon>${contact_afhalen_1_telefoon}</telefoon></afhalen><afhalen id="2"><naam>${contact_afhalen_2_naam}</naam><voornaam>${contact_afhalen_2_voornaam}</voornaam><verwantschap>${contact_afhalen_2_verwantschap}</verwantschap><telefoon>${contact_afhalen_2_telefoon}</telefoon></afhalen><afhalen id="3"><naam>${contact_afhalen_3_naam}</naam><voornaam>${contact_afhalen_3_voornaam}</voornaam><verwantschap>${contact_afhalen_3_verwantschap}</verwantschap><telefoon>${contact_afhalen_3_telefoon}</telefoon></afhalen><niet>${contact_afhalen_niet}</niet></contact><beeld><troosten><hoe>${kind_troosten_hoe}</hoe><woorden>${kind_troosten_woorden}</woorden><wanneer>${kind_troosten_wanneer}</wanneer></troosten><bijzonderhedenGezin>${bijzonderheden_gezin}</bijzonderhedenGezin><prematuur>${kind_prematuur_boolean}</prematuur><opStap><boolean>${kind_op_stap_boolean}</boolean><vervoer>${kind_vervoer_boolean}</vervoer></opStap><beeldmateriaal><intern>${beeldmateriaal_intern_boolean}</intern><extern>${beeldmateriaal_extern_boolean}</extern></beeldmateriaal><opmerking>${kind_opmerking}</opmerking></beeld></inlichtingenfiche>`;

  var filename = `${kind_achternaam}_${kind_voornaam}.xml`;
  var pom = document.createElement("a");
  var bb = new Blob([xmlString], { type: "text/plain" });

  pom.setAttribute("href", window.URL.createObjectURL(bb));
  pom.setAttribute("download", filename);

  pom.dataset.downloadurl = ["text/plain", pom.download, pom.href].join(":");
  pom.draggable = true;
  pom.classList.add("dragout");

  pom.click();
  pom.remove();
}
