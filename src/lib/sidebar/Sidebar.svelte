<script>
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";

  import SidebarItem from "$lib/sidebar/SidebarItem.svelte";

  import { MAIN_NAVIGATION_ITEMS, SETTINGS_NAVIGATION_ITEMS } from "$lib/constants.js";

  import { ArrowRightIcon, LogoIcon } from "$lib/assets/icons";

  let isSidebarOpen = true;
</script>

<aside class="sidebar" class:isOpen={isSidebarOpen}>
  <div class="sidebarContent">
    <div class="upperContent">
      <div class="logoWrapper">
        <div class="logo">
          {@html LogoIcon}
        </div>
        {#if isSidebarOpen}
          <span transition:fade>Weatherino</span>
        {/if}
      </div>
      <div class="links">
        {#each MAIN_NAVIGATION_ITEMS as item}
          <SidebarItem
            {...item}
            isActive={item.link === $page.url.pathname}
            isSidebarOpen={isSidebarOpen}
          />
        {/each}
      </div>
    </div>
    <div class="lowerContent">
      <span transition:fade>System</span>
      <div class="links">
        {#each SETTINGS_NAVIGATION_ITEMS as item}
          <SidebarItem
            {...item}
            isActive={!item.isLogout && item.link === $page.url.pathname}
            isSidebarOpen={isSidebarOpen}
          />
        {/each}
      </div>
    </div>
  </div>
  <div
    class="openCloseArrow"
    role="presentation"
    class:isOpen={isSidebarOpen}
    on:click={() => isSidebarOpen = !isSidebarOpen}
  >
    <span>{@html ArrowRightIcon}</span>
  </div>
</aside>

<style lang="scss">
  .sidebar {
    display: flex;

    &.isOpen {
      .sidebarContent {
        width: 350px;
      }

      .links {
        padding-left: 12px;
        align-items: flex-start;
      }
    }

    .sidebarContent {
      display: flex;
      max-width: 350px;
      width: 96px;
      padding: 32px 16px;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      background: var(--sidebar);
      transition: width 0.3s ease-in-out;
    }

    .openCloseArrow {
      background: var(--sidebar);
      padding: 24px 10px 24px 8px;
      height: min-content;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      align-self: center;
      cursor: pointer;

      span {
        transition: transform 0.3s ease-in-out;
        display: flex;
        transform: rotate(0deg);
      }

      &.isOpen span {
        transform: rotate(180deg);
      }
    }

    .upperContent, .lowerContent {
      display: flex;
      flex-direction: column;
      gap: 32px;
      color: var(--gray);
    }

    .lowerContent {
      font-weight: 500;
    }

    .links {
      display: flex;
      flex-direction: column;
      gap: 32px;
      padding-left: 12px;
    }

    .logoWrapper {
      color: #2F69FE;
      font-size: 30px;
      font-weight: 700;
      display: flex;
      gap: 16px;
      align-items: center;

      .logo {
        display: flex;
        width: 64px;
        height: 64px;
      }
    }
  }
</style>