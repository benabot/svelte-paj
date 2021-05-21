<script>
  import { filtered } from "./stores.js";
</script>

{#each $filtered as jouet}
  <a href={jouet.link} class="jouet">
    <div>
      <img src={jouet.acf.photo.sizes.medium} alt={jouet.acf.photo.alt} />
    </div>
    <h3>{jouet.title.rendered}</h3>

    {#if jouet.acf.tout_age}
      <span>Tout âge</span>
    {:else}
      <span>
        {jouet.acf.age_min}
        {jouet.acf.age_min <= 1 ? "an" : "ans"}
        {#if jouet.acf.age_max > 1}
          - {jouet.acf.age_max} ans
        {/if}
      </span>
    {/if}
    <span>&#9825;</span>
  </a>
{/each}

<style>
  .jouet {
    display: block;
  }
</style>
