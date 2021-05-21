<script>
  import { onMount } from "svelte";

  // import { term } from "./stores.js";
  import { items } from "./stores.js";
  import Search from "./Search.svelte";
  import ListItems from "./ListItems.svelte";

  const apiURL = "http://localhost:8888/tutoWp/wp-json/wp/v2/jouets?_embed";
  //   let jouets = [];
  onMount(async function () {
    const response = await fetch(apiURL);
    $items = await response.json();
  });
</script>

<div id="boite">
  <Search />
  <ListItems />
</div>

<style>
  #boite {
    display: flex;
  }
</style>
