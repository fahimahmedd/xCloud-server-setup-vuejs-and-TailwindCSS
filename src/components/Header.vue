<script setup>
import Dropdown from "./common/Dropdown.vue";
import ThemeToggle from "./ThemeToggle.vue";

const menuItems = [
  { label: "Account settings", link: "/" },
  { label: "Support", link: "/" },
  { label: "License", link: "/" },
  { label: "Sign out", link: "/" },
];
</script>

<template>
  <header class="bg-white dark:bg-darkBackgroundSecondary border-b border-lightBorder dark:border-[#313a6cbd]">
    <div class="container mx-auto flex justify-between items-center py-2 md:py-3">
      <a href="/" class="h-8 md:h-10 hidden dark:block">
        <img src="/public/images/logo/logo-dark.png" alt="" class="h-full" />
      </a>
      <a href="/" class="flex items-center h-8 md:h-10 visible dark:hidden">
        <img src="/public/images/logo/logo-light.png" alt="" class="h-full" />
      </a>
      <div class="flex items-center gap-1 md:gap-3">
        <ThemeToggle />
        <div class="relative">
          <button
            class="bg-lightBackgroundSecondary hover:bg-lightSecondaryBgHover dark:hover:bg-darkSecondaryBgHover dark:bg-gray-700 text-lightText dark:text-white h-10 w-10 rounded-full flex items-center justify-center hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-blue-100"
          >
            <ion-icon name="notifications-outline" class="text-2xl"></ion-icon>
          </button>
          <span
            class="absolute -top-1.5 -right-1.5 bg-green-500 text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center"
          >
            5</span
          >
        </div>
        <Dropdown
          avatar="/public/images/profile.png"
          text="Mark Adam"
          :menuItems="menuItems"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
