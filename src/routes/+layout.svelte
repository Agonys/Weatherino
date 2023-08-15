<script>
  import Sidebar from "$lib/sidebar/Sidebar.svelte";
  import "../styles/global.scss";
</script>

<Sidebar />
<div class="content">
  <slot />
</div>
