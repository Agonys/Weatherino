<script>
  import { SearchIcon } from "$lib/assets/icons";

  let searchValue = "";
</script>

<div class="searchWrapper">
  <span class="iconWrapper">{@html SearchIcon}</span>
  <input type="text" bind:value={searchValue} placeholder="Search location here">
</div>

<style lang="scss">
  .searchWrapper {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--panel);
    color: var(--dark-gray);
    padding: 16px;
    height: 72px;

    .iconWrapper {
      display: flex;
      flex-shrink: 0;
    }

    input {
      width: 100%;
      height: 100%;
      border: none;
      background: transparent;
      font-family: 'Poppins', sans-serif;
      outline: none;
      font-size: 20px;
    }
  }
</style>