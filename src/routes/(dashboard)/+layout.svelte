<script lang="ts">
  import { Sidebar } from "$lib/components/index.js";
  import "$lib/styles/global.scss";
</script>

<Sidebar />
<main class="content">
  <slot />
</main>

<style>
  .content {
    display: flex;
    width: 100%;
    color: var(--black);
    background-color: var(--white);
  }
</style>