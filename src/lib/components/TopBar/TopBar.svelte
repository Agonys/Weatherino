<script>
  import { browser } from "$app/environment";

  import { dateTimeFormat } from "$lib/utils";

  import { Search } from "$lib/components";
  import { AccountIcon } from "$lib/assets/icons";

  const currentDate = new Date();
  const userLang = browser ? navigator.language : "en-US";

  const options = {
    language: userLang,
    year: "numeric",
    month: "long",
    date: currentDate
  };

  const formattedDateShort = dateTimeFormat(options);
  const formattedDateLong = dateTimeFormat({
    ...options,
    month: "short",
    weekday: "long",
    day: "numeric"
  });
</script>

<div class="topbarWrapper">
  <div class="topbarLeftPanel">
    <h2>{formattedDateShort}</h2>
    <h4>{formattedDateLong}</h4>
  </div>
  <div class="topbarRightPanel">
    <Search />
    <div class="accountIconWrapper">
      {@html AccountIcon}
    </div>
  </div>
</div>

<style lang="scss">
  @import "$lib/styles/colors.scss";

  .topbarWrapper {
    width: 100%;
    display: flex;
    padding: 32px;
    gap: 32px;
    height: fit-content;
    border-bottom: 2px solid transparentize($dark-gray, .5);

    .topbarLeftPanel, .topbarRightPanel {
      display: flex;
    }

    .topbarLeftPanel {
      flex-direction: column;
      gap: 8px;
      align-items: center;
      flex-shrink: 0;

      h2 {
        font-size: 40px;
        font-weight: 700;
        color: var(--black);
      }

      h4 {
        color: var(--dark-gray);
        font-size: 26px;
        font-weight: 500;
      }
    }

    .topbarRightPanel {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 32px;

      .accountIconWrapper {
        display: flex;
        height: fit-content;
        padding: 16px;
        color: var(--dark-gray);
        background-color: var(--panel);
      }
    }
  }
</style>