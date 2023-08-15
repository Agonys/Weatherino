import {
    CalendarIcon,
    CogIcon,
    HomeIcon,
    MapIcon,
    NavigateIcon,
    SignOutIcon
  } from "$lib/assets/icons";

export const MAIN_NAVIGATION_ITEMS = [
    {
      name: "Dashboard",
      src: HomeIcon,
      link: "/"
    },
    {
      name: "Calendar",
      src: CalendarIcon,
      link: "/calendar"
    },
    {
      name: "Map",
      src: MapIcon,
      link: "/map"
    },
    {
      name: "Saved Locations",
      src: NavigateIcon,
      link: "/saved-locations"
    }
  ];
  export const SETTINGS_NAVIGATION_ITEMS = [
    {
      name: "Settings",
      src: CogIcon,
      link: "/settings",
    },
    {
      name: "Logout Account",
      src: SignOutIcon,
      link: "/logout",
      isLogout: true
    }
  ];