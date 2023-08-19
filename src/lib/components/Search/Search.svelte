<script lang="ts">
  import { browser } from "$app/environment";
  import { SearchIcon } from "$lib/assets/icons";
  import { debounce } from "$lib/utils";
  import { selectedLocation } from "$lib/client/stores/selectedLocation.ts";
  import type { LocationData } from "$lib/server/stores/locationCacheStore";

  const debounceTime = 350;

  let searchValue = "";
  let suggestionsList: LocationData[] = [];
  let isSuggestionsListOpen = false;

  const searchLocations = async (value: string) => {
    const userLang = browser ? navigator.language.split("-")[0] : "en-US";

    const response = await fetch("/api/v1/locations", {
      method: "POST",
      body: JSON.stringify({
        query: value,
        language: userLang
      })
    });

    suggestionsList = await response.json();
    isSuggestionsListOpen = true;
  };

  const debouncedSearch = debounce(searchLocations, debounceTime);

  const handleInputChange = () => {
    if (!searchValue || searchValue?.length < 3) {
      suggestionsList = [];
      isSuggestionsListOpen = false;
      return debouncedSearch.cancel();
    }

    debouncedSearch(searchValue);
  };

  const handleSelectLocation = (location) => {
    searchValue = location.name;
    $selectedLocation = location;

    isSuggestionsListOpen = false;
    suggestionsList = [];
  };

</script>

<div class="searchWrapper">
  <span class="iconWrapper">{@html SearchIcon}</span>
  <input
    type="text"
    bind:value={searchValue}
    on:input={handleInputChange}
    on:click={handleInputChange}
    placeholder="Search location here"
  >
  <ul class="propositionsList">
    {#if isSuggestionsListOpen}
      {#if suggestionsList.length === 0}
        <li class="propositionItem">No results</li>
      {:else}
        {#each suggestionsList as location}
          <li
            class="propositionItem"
            role="presentation"
            on:click={() => handleSelectLocation(location)}
          >
            <div class="itemName">{location.name}, {location.country}</div>
            <div class="itemCoords">{location.latitude}, {location.longitude}</div>
          </li>
        {/each}
      {/if}
    {/if}
  </ul>
</div>

<style lang="scss">
  .searchWrapper {
    position: relative;
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
      font-size: 18px;
    }
  }

  .propositionsList {
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    background-color: var(--white);

    .propositionItem {
      list-style: none;
      padding: 8px 16px;
      border: 1px solid var(--dark-gray);
      border-bottom: 0;
      transition: background-color var(--transition-ease);

      &:last-child {
        border-bottom: 1px solid var(--dark-gray);
      }

      &:hover {
        background-color: var(--light-gray);
        cursor: pointer;
      }
    }

    .itemCoords {
      font-size: 14px;
    }
  }
</style>