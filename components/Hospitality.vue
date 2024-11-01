<template>
  <div>
    <header class="flex bg-word">
      <div class="flex items-center justify-between w-full h-full shadow-xl p-2">
        <div class="w-1/3 md:w-1/5 lg:w-2/5 flex flex-start md:justify-center lg:justify-center p-2">
          <a href="/">
            <img
              src="/public/image/logo/Tranduc-Furnishings-compress.png"
              alt=""
              class="h-12 min-h-12 object-contain max-w-full max-h-full"
            />
          </a>
        </div>
        <div class="h-full flex flex-col lg:flex-row items-center lg:justify-end w-1/3 md:w-4/5 lg:w-3/5 color-text">
          <div @click="toggleMenu" :class="{'flex' : menu, 'hidden' : !menu}" class="cursor-pointer flex justify-end w-full p-2">
            <i class="fa-solid fa-xmark hover:text-orange-500 text-2xl"></i>
          </div>
          <div @click="toggleMenu" :class="{'hidden' : menu, 'flex' : !menu}" class="cursor-pointer flex justify-end w-full p-2">
            <i class="fa-solid fa-bars hover:text-orange-500 text-2xl"></i>
          </div>
          <div v-if="menu" class="text-sm flex flex-col lg:flex-row bg-menu w-full px-4 lg:gap-4 lg:text-base">
            <div class="hover:text-orange-500 py-2 text-nowrap cursor-pointer">About Us</div>
            <div class="navbar-center text-nowrap flex cursor-pointer py-2 lg:text-base">
              <ul class="menu">
                <li>
                  <details>
                    <summary class="hover:text-orange-500">Capabilities</summary>
                    <ul>
                      <li class="hover:text-orange-500"><a>Submenu 1</a></li>
                      <li class="hover:text-orange-500"><a>Submenu 2</a></li>
                      <li class="hover:text-orange-500"><a>Submenu 2</a></li>
                      <li class="hover:text-orange-500"><a>Submenu 2</a></li>
                      <li class="hover:text-orange-500"><a>Submenu 2</a></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <div class="hover:text-orange-500 py-2 text-nowrap cursor-pointer">Projects</div>
            <div class="hover:text-orange-500 py-2 text-nowrap cursor-pointer">Reference Price</div>
            <div class="hover:text-orange-500 py-2 text-nowrap cursor-pointer">News</div>
            <div class="hover:text-orange-500 py-2 text-nowrap cursor-pointer">Contact</div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref(false);

function toggleMenu() {
  menu.value = !menu.value;
}
</script>

<style scoped>
.bg-word {
  background-image: url('/public/image/logo/The-World-Map-scaled.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.color-text {
  color: #ABABAB;
}
.bg-menu {
  background-color: #444444;
}
.menu {
  padding: 0;
  font-size: 1rem;
  line-height: 1.5rem;
}
.menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  padding: 0;
}
.menu :where(li ul) {
  padding: 0;
  margin: 0;
  box-shadow: none;
}
</style>
