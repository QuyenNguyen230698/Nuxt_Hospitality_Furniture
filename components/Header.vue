<template>
    <header class="sticky top-0 z-50 bg-word border-b border-b-orange-500">
      <div
        class="navbar justify-between items-center w-full h-full shadow-xl color-text "
      >
        <div
          class="w-1/3 md:w-1/5 lg:w-1/4 h-12 md:h-fit flex flex-start md:justify-evenly lg:justify-center "
        >
          <NuxtLink aria-label="logo" to="/" @click="closeDropdown">
            <NuxtImg
              quality="75"
              loading="eager"
              src="/image/logo/Tranduc-Furnishings-compress.png"
              aria-label="logo"
              alt="logo"
              class="h-fit p-1 md:p-1 md:h-12 xl:h-12 max-w-full max-h-full"
            ></NuxtImg>
          </NuxtLink>
        </div>

        <div
          class="h-full flex flex-col lg:flex-row items-center lg:justify-end lg:w-4/6 xl:w-2/4 2xl:w-2/5"
        >
          <!-- Mobile Menu -->
          <div class="flex-none lg:hidden">
            <div class="drawer">
              <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="isDrawerOpen"/>
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
                  class="menu bg-menu text-base min-h-full w-4/5 p-4"
                >
                  <!-- Sidebar content here -->
                   <li class="border-b border-orange-500 p-3"><NuxtLink aria-label="logo" to="/" @click="closeDrawer">
                      <NuxtImg
                        quality="75"
                        loading="eager"
                        src="/image/logo/Tranduc-Furnishings-compress.png"
                        aria-label="logo"
                        alt="logo"
                        class="w-40 h-auto object-contain"
                      ></NuxtImg>
                    </NuxtLink>
                  </li>
                  <li class=" py-2 text-nowrap">
                    <NuxtLink to="/aboutus" aria-label="Sidebar Item 1" @click="closeDrawer">{{
                      $t("app.menu.aboutus")
                    }}</NuxtLink>
                  </li>
                  <li @click="isCollapseOpen = !isCollapseOpen" class="cursor-pointer text-nowrap">
                    <div class="collapse bg-transparent">
                      <input
                        type="checkbox"
                        id="collapse-toggle"
                        v-model="isCollapseOpen"
                        aria-expanded="false"
                        class="hidden"
                      />
                      <label
                      @click="isCollapseOpen = !isCollapseOpen"
                        for="collapse-toggle"
                        class="collapse-title py-1 px-0 min-h-0 text-base"
                      >
                        {{ $t("app.menu.capabilities") }}
                        <i class="fa-solid fa-caret-down"></i>
                      </label>
                      <div
                        class="collapse-content p-0 min-h-0 flex flex-col gap-4"
                        v-show="isCollapseOpen"
                      >
                      <NuxtLink aria-label="capabilities" to="/capabilities" class=" py-2 text-nowrap" @click="closeDrawer">{{
                          $t("app.menu.capabilities")
                        }}</NuxtLink>
                        <NuxtLink aria-label="woodenfurniture" to="/capabilities/woodenfurniture" @click="closeDrawer" class=" py-2 text-nowrap">{{
                          $t("app.menu.woodenfurniture")
                        }}</NuxtLink>
                        <NuxtLink aria-label="metalfurniture" to="/capabilities/metalfurniture" @click="closeDrawer" class=" py-2 text-nowrap">{{
                          $t("app.menu.metalfurniture")
                        }}</NuxtLink>
                        <NuxtLink aria-label="upholstery" to="/capabilities/ulpholstery" @click="closeDrawer" class=" py-2 text-nowrap">{{
                          $t("app.menu.upholstery")
                        }}</NuxtLink>
                        <NuxtLink aria-label="door" to="/capabilities/door" class="py-2 text-nowrap" @click="closeDrawer">{{
                          $t("app.menu.door")
                        }}</NuxtLink>
                        <NuxtLink aria-label="finishing" to="/capabilities/finishing" class=" py-2 text-nowrap" @click="closeDrawer">{{
                          $t("app.menu.finishing")
                        }}</NuxtLink>
                      </div>
                    </div>
                  </li>
                  <li class=" py-2 text-nowrap">
                    <NuxtLink aria-label="projects" to="/projects" @click="closeDrawer">{{
                      $t("app.menu.projects")
                    }}</NuxtLink>
                  </li>
                  <li class=" py-2 text-nowrap">
                    <NuxtLink aria-label="referenceprice" to="/referenceprice" @click="closeDrawer">{{
                      $t("app.menu.referenceprice")
                    }}</NuxtLink>
                  </li>
                  <li class=" py-2 text-nowrap">
                    <NuxtLink aria-label="news" to="/news" @click="closeDrawer">{{
                      $t("app.menu.news")
                    }}</NuxtLink>
                  </li>
                  <li class=" py-2 text-nowrap">
                    <NuxtLink aria-label="contact" to="/contact" @click="closeDrawer">{{
                      $t("app.menu.contact")
                    }}</NuxtLink>
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
                <NuxtLink aria-label="aboutus" to="/aboutus" @click="closeDropdown">{{ $t("app.menu.aboutus") }}</NuxtLink>
              </div>

              <!-- Capabilities Dropdown Menu Item -->
              <div class="relative">
                <div
                  class="navbar-center text-nowrap flex cursor-pointer py-2 hover:border-b hover:border-orange-500 justify-center"
                >
                  <ul class="menu">
                    <li>
                      <details :open="isDropdownOpen" @toggle="handleToggle">
                        <summary
                          class="lg:text-sm xl:text-base text-center cursor-pointer"
                        >
                          {{ $t("app.menu.capabilities") }}
                        </summary>
                        <ul
                          class="absolute left-0 top-full mt-1 bg-menu bg-white shadow-md rounded-md p-2 w-48 text-left z-50"
                        >
                         <li class="hover:text-orange-500 text-sm text-nowrap">
                            <NuxtLink aria-label="capabilities" to="/capabilities" @click="closeDropdown">{{ $t("app.menu.capabilities") }}</NuxtLink>
                          </li>
                          <li class="hover:text-orange-500 text-sm text-nowrap">
                            <NuxtLink aria-label="woodenfurniture" to="/capabilities/woodenfurniture" @click="closeDropdown">{{ $t("app.menu.woodenfurniture") }}</NuxtLink>
                          </li>
                          <li class="hover:text-orange-500 text-sm">
                            <NuxtLink aria-label="metalfurniture" to="/capabilities/metalfurniture" @click="closeDropdown">{{ $t("app.menu.metalfurniture") }}</NuxtLink>
                          </li>
                          <li class="hover:text-orange-500 text-sm">
                            <NuxtLink aria-label="upholstery" to="/capabilities/ulpholstery" @click="closeDropdown">{{ $t("app.menu.upholstery") }}</NuxtLink>
                          </li>
                          <li class="hover:text-orange-500 text-sm">
                            <NuxtLink aria-label="door" to="/capabilities/door" @click="closeDropdown">{{ $t("app.menu.door") }}</NuxtLink>
                          </li>
                          <li class="hover:text-orange-500 text-sm">
                            <NuxtLink aria-label="finishing" to="/capabilities/finishing" @click="closeDropdown">{{ $t("app.menu.finishing") }}</NuxtLink>
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
                <NuxtLink aria-label="projects" to="/projects" @click="closeDropdown">{{ $t("app.menu.projects") }}</NuxtLink>
              </div>
              <div
                class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer"
              >
                <NuxtLink aria-label="referenceprice" to="/referenceprice" @click="closeDropdown">{{ $t("app.menu.referenceprice") }}</NuxtLink>
              </div>
              <div
                class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer"
              >
                <NuxtLink aria-label="news" to="/news" @click="closeDropdown">{{ $t("app.menu.news") }}</NuxtLink>
              </div>
              <div
                class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer"
              >
                <NuxtLink aria-label="contact" to="/contact" @click="closeDropdown">{{ $t("app.menu.contact") }}</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
const localePath = useLocalePath()
// Trạng thái cho menu collapse
const isCollapseOpen = ref(false);
// Trạng thái mở/đóng của drawer
const isDrawerOpen = ref(false);
// Biến quản lý trạng thái mở/tắt dropdown
const isDropdownOpen = ref(false);
// Hàm xử lý khi toggle trạng thái của dropdown
const handleToggle = (event) => {
  isDropdownOpen.value = event.target.open;
};

// Hàm để đóng drawer
function closeDrawer() {
  isDrawerOpen.value = false;
}
// Hàm đóng dropdown (khi click vào NuxtLink)
const closeDropdown = () => {
  isDropdownOpen.value = false;
};
</script>


<style scoped>
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
</style>