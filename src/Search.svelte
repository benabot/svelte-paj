<script>
  import { util } from "./stores.js";
  import { lieu } from "./stores.js";
  import { type } from "./stores.js";
  import { nombre } from "./stores.js";
  let valQui = "";
  let valOu = "";
  let valQuoi = "";
  let valCombien = "";

  $: util.set(valQui);
  $: lieu.set(valOu);
  $: type.set(valQuoi);
  $: nombre.set(valCombien);

  let currentAge;
  let currentOu;
  let currentQuoi;
  let currentCombien;
  let qui = [
    { nom: "Premier âge", age: "prem" },
    { nom: "Enfants", age: "enf" },
    { nom: "Ados", age: "ado" },
    { nom: "Adultes", age: "adu" },
    { nom: "Tout le monde", age: "" },
  ];
  let ou = [
    { nom: "Dehors", lieu: "dehors" },
    { nom: "Dedans", lieu: "dedans" },
    { nom: "Partout", lieu: "" },
  ];
  let quoi = [
    { nom: "Jeu de société", type: "soc" },
    { nom: "Musique", type: "mus" },
    { nom: "Sport", type: "spo" },
    { nom: "Découverte", type: "dec" },
  ];
  let combien = [
    { nom: "Seul", nbr: "solo" },
    { nom: "avec les copains", nbr: "cop" },
    { nom: "en famille", nbr: "fam" },
  ];
</script>

<div class="sidenav">
  <h3>Pour qui ?</h3>

  <ul>
    {#each qui as qui}
      <li
        class:selected={currentAge === qui.age}
        on:click={() =>
          currentAge === qui.age ? (currentAge = null) : (currentAge = qui.age)}
        on:click={() =>
          currentAge === qui.age ? (valQui = qui.age) : (valQui = "")}
      >
        {qui.nom}
      </li>
    {/each}
  </ul>
  <h3>Où ça ?</h3>
  <ul>
    {#each ou as ou}
      <li
        class:selected={currentOu === ou.nom}
        on:click={() =>
          currentOu === ou.nom ? (currentOu = null) : (currentOu = ou.nom)}
        on:click={() =>
          currentOu === ou.nom ? (valOu = ou.lieu) : (valOu = "")}
      >
        {ou.nom}
      </li>
    {/each}
  </ul>
  <h3>On fait quoi ?</h3>
  <ul>
    {#each quoi as quoi}
      <li
        class:selected={currentQuoi === quoi.nom}
        on:click={() =>
          currentQuoi === quoi.nom
            ? (currentQuoi = null)
            : (currentQuoi = quoi.nom)}
        on:click={() =>
          currentQuoi === quoi.nom ? (valQuoi = quoi.type) : (valQuoi = "")}
      >
        {quoi.nom}
      </li>
    {/each}
  </ul>
  <h3>À combien ?</h3>
  <ul>
    {#each combien as combien}
      <li
        class:selected={currentCombien === combien.nom}
        on:click={() =>
          currentCombien === combien.nom
            ? (currentCombien = null)
            : (currentCombien = combien.nom)}
        on:click={() =>
          currentCombien === combien.nom
            ? (valCombien = combien.nbr)
            : (valCombien = "")}
      >
        {combien.nom}
      </li>
    {/each}
  </ul>
</div>

<style>
  li {
    display: block;
    list-style-type: none;
    background: blue;
    margin: 0.5rem;
    color: chartreuse;
  }

  .selected {
    background-color: #ff3e00;
    color: white;
  }
</style>
