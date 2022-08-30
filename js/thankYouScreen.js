"use strict";
export function thankYouScreenToHTML() {
  const div = document.getElementById("container");

  div.innerHTML = "";

  div.insertAdjacentHTML(
    "beforeend",
    `<div class="text">
  <h1 class="h1 text-serif">Bedankt</h1>
  <p>We hebben je inlichtingenfiche goed ontvangen. We verwerken dit zo snel mogelijlk.</p>
</div>`
  );
}
