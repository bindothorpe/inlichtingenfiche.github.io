"use strict";
export function medicatie(teller, naam, schema) {
  return `<div class="row align-items-end">
    <div class="col col-12 col-sm-6 col-md-6 col-lg-3">
      <div class="form-group">
        <label
          class="form-check-label"
          for="kind_medicatie${teller}_naam"
        >
          Medicatie ${teller} - naam*
        </label>
        <input
          class="form-control kind_med_naam"
          type="text"
          name="kind_medicatie${teller}_naam"
          id="kind_medicatie${teller}_naam"
          value="${naam}"
          required
        />
      </div>
    </div>
    <div class="col col-12 col-sm-12 col-md-12 col-lg-8">
      <div class="form-group">
        <label
          class="form-check-label"
          for="kind_medicatie${teller}_schema"
        >
          Medicatie ${teller} - inname schema*
        </label>
        <input
          class="form-control kind_med_schema"
          type="text"
          name="kind_medicatie${teller}_schema"
          id="kind_medicatie${teller}_schema"
          value="${schema}"
          required
        />
      </div>
    </div>
    <div class="col col-1 col-sm-1 col-md-1 col-lg-1">
      <div class="form-group">
        
        <input
          class="form-control verwijder_med_knop"
          type="button"
          id="verwijder_med_${teller}"
          data-remove="${teller}"
          value="X"
        />
      </div>
    </div>
  </div>`;
}

export function allergieen() {
  return `<div class="row align-items-end">
  <div class="col col-12 col-sm-12 col-md-12 col-lg-3">
    <div class="form-group">
      <label class="form-check-label" for="kind_alergieen_naam">
        Indien ja, welke?*
      </label>
      <input
        class="form-control"
        type="text"
        name="kind_alergieen_naam"
        id="kind_alergieen_naam"
        required
      />
    </div>
  </div>
  <div class="col col-12 col-sm-12 col-md-12 col-lg-9">
    <div class="form-group">
      <label
        class="form-check-label"
        for="kind_alergieen_behandeling"
      >
        Behandelingswijze?*
      </label>
      <input
        class="form-control"
        type="text"
        name="kind_alergieen_behandeling"
        id="kind_alergieen_behandeling"
        required
      />
    </div>
  </div>
</div>`;
}

export function kinderziektes() {
  return `<div class="row align-items-end">
  <div class="col col-12">
    <div class="form-group">
      <label
        class="form-check-label"
        for="kind_kinderziektes_naam"
      >
        Indien ja, welke?*
      </label>
      <input
        class="form-control"
        type="text"
        name="kind_kinderziektes_naam"
        id="kind_kinderziektes_naam"
      />
    </div>
  </div>
</div>`;
}

export function specialezorgen() {
  return `<div class="row align-items-end">
  <div class="col col-12 col-md-12">
    <div class="form-group">
      <label
        class="form-check-label"
        for="kind_speciale_zorgen_naam"
      >
        Indien ja, welke?*
      </label>
      <input
        class="form-control"
        type="text"
        name="kind_speciale_zorgen_naam"
        id="kind_speciale_zorgen_naam"
        required
      />
    </div>
  </div>
</div>`;
}

export function bijzonderhedengezin() {
  return `<div class="row align-items-end">
  <div class="col col-12 col-md-12">
    <div class="form-group">
      <label
        class="form-check-label"
        for="bijzonderheden_gezin_naam"
      >
        Indien ja, welke?*
      </label>
      <input
        class="form-control"
        type="text"
        name="bijzonderheden_gezin_naam"
        id="bijzonderheden_gezin_naam"
        required
      />
    </div>
  </div>
</div>`;
}

export function voedingsgewoontes() {
  return `<div class="row align-items-end">
  <div class="col col-12 col-md-12">
    <div class="form-group">
      <label
        class="form-check-label"
        for="kind_voedingsgewoontes"
      >
        Indien ja, welke voedingsmiddelen mag het kind wel/niet
        nuttigen?*
      </label>
      <input
        class="form-control"
        type="text"
        name="kind_voedingsgewoontes"
        id="kind_voedingsgewoontes"
        required
      />
    </div>
  </div>
</div>`;
}

export function slaapspeciaal() {
  return `<div class="row align-items-end">
  <div class="col col-12">
    <div class="form-group">
      <label
        class="form-check-label"
        for="kind_slaap_speciaal_lijst"
      >
        Indien ja, welke?*
      </label>
      <input
        class="form-control"
        type="text"
        name="kind_slaap_speciaal_lijst"
        id="kind_slaap_speciaal_lijst"
        required
      />
    </div>
  </div>
</div>`;
}

export function afhalen(teller, voornaam, naam, verwandschap, telefoon) {
  return `<div class="row align-items-end">
  <div class="col col-12 col-sm-6 col-md-6 col-lg-3">
    <div class="form-group">
      <label class="form-check-label" for="afhalen${teller}_voornaam">
        Voornaam ${teller}*
      </label>
      <input
        class="form-control persoon_voornaam"
        type="text"
        name="afhalen${teller}_voornaam"
        id="afhalen${teller}_voornaam"
        value="${voornaam}"
        required
      />
    </div>
  </div>
  <div class="col col-12 col-sm-6 col-md-6 col-lg-3">
    <div class="form-group">
      <label class="form-check-label" for="afhalen${teller}_naam">
        Achternaam ${teller}*
      </label>
      <input
        class="form-control persoon_achternaam"
        type="text"
        name="afhalen${teller}_naam"
        id="afhalen${teller}_naam"
        value="${naam}"
        required
      />
    </div>
  </div>
  <div class="col col-12 col-sm-5 col-md-5 col-lg-2">
    <div class="form-group">
      <label class="form-check-label" for="afhalen${teller}_verwantschap">
        Verwandschap ${teller}*
      </label>
      <input
        class="form-control persoon_verwandschap"
        type="text"
        name="afhalen${teller}_verwantschap"
        id="afhalen${teller}_verwantschap"
        value="${verwandschap}"
        required
      />
    </div>
  </div>

  <div class="col col-12 col-sm-6 col-md-6 col-lg-3">
    <div class="form-group">
      <label class="form-check-label" for="afhalen${teller}_telefoon">
        Telefoonnummer/GSM ${teller}*
      </label>
      <input
        class="form-control persoon_telefoon telefoon"
        type="text"
        name="afhalen${teller}_telefoon"
        id="afhalen${teller}_telefoon"
        value="${telefoon}"
        required
      />
    </div>
  </div>
  <div class="col col-12 col-sm-1 col-md-1 col-lg-1">
    <div class="form-group">
      <input
      class="form-control verwijder_persoon_knop"
      type="button"
      id="verwijder_persoon_${teller}"
      data-remove="${teller}"
      value="X"
    />
    </div>
  </div>
</div>
<div class="spacer3"></div>`;
}

export function domicilie() {
  return `<div class="row align-items-end">
  <div class="col col-12 col-sm-6 col-md-6 col-lg-6">
    <div class="form-group">
      <label class="form-check-label" for="iban"> IBAN* </label>
      <input
        class="form-control"
        type="text"
        name="iban"
        id="iban"
        placeholder="BE71 0961 2345 6769"
        required
      />
    </div>
  </div>
  <div class="col col-12 col-sm-6 col-md-6 col-lg-6">
    <div class="form-group">
      <label class="form-check-label" for="bic"> BIC* </label>
      <input
        class="form-control"
        type="text"
        name="bic"
        id="bic"
        placeholder="KRED BE BB"
        required
      />
    </div>
  </div>
</div>
<div class="row align-items-end">
  <div class="col col-12 col-sm-6 col-md-6 col-lg-6">
    <div class="form-group">
      <label class="form-check-label" for="bic">
        Handtekening*
      </label>
      <div id="signature"></div>
    </div>
  </div>
</div>
<div class="row align-items-end">
  <div class="col col-1 col-sm-1 col-md-1 col-lg-1">
    <div class="form-group">
      <input class="form-control" type="button" value="↺" id="btn_clear"/>
    </div>
  </div>
</div>`;
}
