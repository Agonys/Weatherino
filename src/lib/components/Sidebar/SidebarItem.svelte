<script lang="ts">
  import { fade } from "svelte/transition";

  export let src = "";
  export let name = "";
  export let link = "";
  export let isActive = false;
  export let isLogout = false;
  export let isSidebarOpen = false;
</script>

<a
  href={link}
  class="itemWrapper"
  class:isActive={isActive}
  class:isLogout={isLogout}
>
  <div class="svgWrapper">
    {@html src}
  </div>
  {#if isSidebarOpen}
    <span transition:fade>{name}</span>
  {/if}
</a>

<style lang="scss">
  .itemWrapper {
    display: flex;
    gap: 8px;
    color: var(--gray);
    transition: color var(--transition-ease);
    text-decoration: none;
    align-items: center;
    font-weight: 500;

    .svgWrapper {
      display: flex;
      flex-shrink: 0;
    }

    &.isActive {
      color: var(--primary-color);
    }

    &.isLogout {
      color: var(--red);
    }

    span {
      white-space: nowrap;
    }
  }
</style>