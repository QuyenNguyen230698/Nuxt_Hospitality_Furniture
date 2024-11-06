<template>
  <div>
    <!-- header -->
    <header class="sticky top-0 z-50 bg-word border-b border-b-orange-500">
      <div
        class="navbar justify-between items-center w-full h-full shadow-xl color-text "
      >
        <div
          class="w-1/3 md:w-1/5 lg:w-1/4 flex flex-start md:justify-evenly lg:justify-center"
        >
          <a href="/">
            <img
              src="/public/image/logo/Tranduc-Furnishings-compress.png"
              alt=""
              class="h-fit p-0 lg:pb-1 xl:pb-1 md:h-12 xl:h-12 max-w-full max-h-full"
            />
          </a>
        </div>

        <div
          class="h-full flex flex-col lg:flex-row items-center lg:justify-end lg:w-4/6 xl:w-2/4 2xl:w-2/5"
        >
          <!-- Mobile Menu -->
          <div class="flex-none lg:hidden">
            <div class="drawer">
              <input id="my-drawer" type="checkbox" class="drawer-toggle" />
              <div class="drawer-content">
                <!-- Page content here -->
                <label
                  for="my-drawer"
                  class="btn hover:bg-black bg-transparent border-none icon-section"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block h-7 w-7 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div class="drawer-side z-50">
                <label
                  for="my-drawer"
                  aria-label="close sidebar"
                  class="drawer-overlay"
                ></label>
                <ul
                  class="menu bg-menu text-base-conten text-xl min-h-full w-4/5 p-4"
                >
                  <!-- Sidebar content here -->
                  <li class="hover:text-orange-500 py-2 text-nowrap">
                    <a href="/AboutUs" aria-label="Sidebar Item 1">{{
                      $t("app.menu.aboutus")
                    }}</a>
                  </li>
                  <li>
                    <div class="collapse bg-transparent">
                      <input
                        type="checkbox"
                        id="collapse-toggle"
                        v-model="isCollapseOpen"
                        aria-expanded="false"
                      />
                      <label
                        for="collapse-toggle"
                        class="collapse-title py-1 px-0 min-h-0 text-xl hover:text-orange-500"
                      >
                        {{ $t("app.menu.capabilities") }}
                        <i class="fa-solid fa-caret-down"></i>
                      </label>
                      <div
                        class="collapse-content p-0 min-h-0 flex flex-col gap-4"
                        v-show="isCollapseOpen"
                      >
                      <a href="/Capabilities" class="hover:text-orange-500 py-2 text-nowrap">{{
                          $t("app.menu.capabilities")
                        }}</a>
                        <a href="/Capabilities/WoodenFurniture" class="hover:text-orange-500 py-2 text-nowrap">{{
                          $t("app.menu.woodenfurniture")
                        }}</a>
                        <a href="/Capabilities/MetalFurniture" class="hover:text-orange-500 py-2 text-nowrap">{{
                          $t("app.menu.metalfurniture")
                        }}</a>
                        <a href="/Capabilities/Ulpholstery" class="hover:text-orange-500 py-2 text-nowrap">{{
                          $t("app.menu.upholstery")
                        }}</a>
                        <a href="/Capabilities/Door" class="hover:text-orange-500 py-2 text-nowrap">{{
                          $t("app.menu.door")
                        }}</a>
                        <a href="/Capabilities/Finishing" class="hover:text-orange-500 py-2 text-nowrap">{{
                          $t("app.menu.finishing")
                        }}</a>
                      </div>
                    </div>
                  </li>
                  <li class="hover:text-orange-500 py-2 text-nowrap">
                    <a href="/Projects" aria-label="Sidebar Item 1">{{
                      $t("app.menu.projects")
                    }}</a>
                  </li>
                  <li class="hover:text-orange-500 py-2 text-nowrap">
                    <a href="/ReferencePrice" aria-label="Sidebar Item 1">{{
                      $t("app.menu.referenceprice")
                    }}</a>
                  </li>
                  <li class="hover:text-orange-500 py-2 text-nowrap">
                    <a href="/News" aria-label="Sidebar Item 1">{{
                      $t("app.menu.news")
                    }}</a>
                  </li>
                  <li class="hover:text-orange-500 py-2 text-nowrap">
                    <a href="/Contact" aria-label="Sidebar Item 1">{{
                      $t("app.menu.contact")
                    }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Desktop Menu -->
          <div
            class="hidden lg:flex lg:flex-row justify-end items-center lg:w-full lg:text-sm xl:text-base font-medium"
          >
            <div
              class="grid grid-cols-6 w-full text-center justify-center items-center"
            >
              <!-- About Us Menu Item -->
              <div
                class="hover:border-orange-500 hover:border-b py-2 text-nowrap"
              >
                <a href="/AboutUs">{{ $t("app.menu.aboutus") }}</a>
              </div>

              <!-- Capabilities Dropdown Menu Item -->
              <div class="relative">
                <div
                  class="navbar-center text-nowrap flex cursor-pointer py-2 hover:border-b hover:border-orange-500 justify-center"
                >
                  <ul class="menu">
                    <li>
                      <details>
                        <summary
                          class="lg:text-sm xl:text-base text-center cursor-pointer"
                        >
                          {{ $t("app.menu.capabilities") }}
                        </summary>
                        <ul
                          class="absolute left-0 top-full mt-1 bg-menu bg-white shadow-md rounded-md p-2 w-48 text-left z-50"
                        >
                         <li class="hover:text-orange-500 text-sm text-nowrap">
                            <a href="/Capabilities">{{ $t("app.menu.capabilities") }}</a>
                          </li>
                          <li class="hover:text-orange-500 text-sm text-nowrap">
                            <a href="/Capabilities/WoodenFurniture">{{ $t("app.menu.woodenfurniture") }}</a>
                          </li>
                          <li class="hover:text-orange-500 text-sm">
                            <a href="/Capabilities/MetalFurniture">{{ $t("app.menu.metalfurniture") }}</a>
                          </li>
                          <li class="hover:text-orange-500 text-sm">
                            <a href="/Capabilities/Ulpholstery">{{ $t("app.menu.upholstery") }}</a>
                          </li>
                          <li class="hover:text-orange-500 text-sm">
                            <a href="/Capabilities/Door">{{ $t("app.menu.door") }}</a>
                          </li>
                          <li class="hover:text-orange-500 text-sm">
                            <a href="/Capabilities/Finishing">{{ $t("app.menu.finishing") }}</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Other Menu Items -->
              <div
                class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer"
              >
                <a href="/Projects">{{ $t("app.menu.projects") }}</a>
              </div>
              <div
                class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer"
              >
                <a href="/ReferencePrice">{{ $t("app.menu.referenceprice") }}</a>
              </div>
              <div
                class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer"
              >
                <a href="/News">{{ $t("app.menu.news") }}</a>
              </div>
              <div
                class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer"
              >
                <a href="/Contact">{{ $t("app.menu.contact") }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- main -->
    <div class="flex flex-col w-full h-full">
      <!-- SlideShow -->
      <SliceShow />
      <!-- Section -->
      <Section />
      <!-- Clients -->
      <div class="flex flex-col items-center justify-center bg-black p-6">
        <div class="py-2 px-10 md:px-0">
          <h2 class="text-center text-5xl font-bold p-6 text-white">
            {{ $t("app.clients.clients") }}
          </h2>
          <div
            class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5"
            style="height: 1px"
          ></div>
          <p class="text-sm text-center color-section">
            {{ $t("app.clients.withover") }}
            <br />
            {{ $t("app.clients.bespokefurniture") }}
          </p>
        </div>
      </div>
      <!-- Communicate -->
      <Communicate />
      <!-- Solution -->
      <Solution />
      <!-- Factories -->
      <Factories />
      <!-- Projects -->
      <Projects />
      <!-- OverView -->
      <Overview />
      <!-- members -->
      <OurMembers />
    </div>
    <!-- footer -->
    <footer>
      <div class="flex flex-col justify-between md:flex-row bg-black px-5">
        <div
          class="w-full md:w-1/2 flex justify-center items-center color-text p-2"
        >
          <p class="text-xs md:text-sm">
            Copyright 2024 © All rights Reserved. Design by Tran Duc Furnishings
          </p>
        </div>
        <div
          class="w-full md:w-1/2 flex justify-center items-center color-text gap-5 p-2"
        >
          <span
            ><a href="https://www.facebook.com/TranDucFurnishings" target="_blank" rel="noopener noreferrer"
              ><i class="fab fa-facebook-f hover:text-orange-500 h-4"></i></a
          ></span>
          <span
            ><a href="https://www.youtube.com/@TranDucCorporation" target="_blank" rel="noopener noreferrer"
              ><i class="fab fa-youtube hover:text-orange-500 h-4"></i></a
          ></span>
          <span
            ><a href="https://www.instagram.com/tranducfurnishings/" target="_blank" rel="noopener noreferrer"
              ><i class="fab fa-instagram hover:text-orange-500 h-4"></i></a
          ></span>
          <span
            ><a href="https://vn.linkedin.com/company/tranduccorp" target="_blank" rel="noopener noreferrer"
              ><i class="fab fa-linkedin hover:text-orange-500 h-4"></i></a
          ></span>
          <LanguageSwitch />
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isCollapseOpen = ref(false);
</script>

<style scoped>
.bg-word {
  background-image: url("/public/image/logo/The-World-Map-scaled.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.color-text {
  color: #ababab;
}
.color-section {
  color: #bfbfbf;
}
.bg-menu {
  background-color: #444444;
}
.menu {
  padding: 0;
}
.menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
}
.menu :where(li ul) {
  padding: 0;
  margin: 0;
  box-shadow: none;
}
.menu :where(li ul):before {
  display: none;
}
.icon-section {
  color: #f5833e;
}
.collapse:focus-visible {
  outline: none;
}
.menu li > *:not(ul, .menu-title, details, .btn):active {
  background-color: transparent;
}
.collapse:not(.collapse-close)
  > :where(input[type="checkbox"]:checked ~ .collapse-content) {
  padding-bottom: 0;
}
</style>
