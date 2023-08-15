<script>
  import { Sidebar } from "$lib/components";
  import "../lib/styles/global.scss";
</script>

<Sidebar />
<main class="content">
  <slot />
</main>

<style>
  .content {
    display: flex;
    width: 100%;
    background-color: var(--white);
  }
</style>