<template>
  <div>
     <!-- header -->
    <header class="flex bg-word">
      <div class="flex items-center justify-between w-full h-full shadow-xl p-0 md:p-2">
        <div class="w-1/3 md:w-1/5 lg:w-1/4 flex flex-start md:justify-evenly lg:justify-center lg:p-1">
          <a href="/">
            <img src="/public/image/logo/Tranduc-Furnishings-compress.png"
              alt=""
              class="h-fit p-0 lg:pb-1 xl:pb-1 md:h-12 xl:h-12 max-w-full max-h-full"/>
          </a>
        </div>
        <div class="h-full flex flex-col lg:flex-row items-center lg:justify-end w-1/3 md:w-4/5 lg:w-4/6 xl:w-2/4 2xl:w-2/5 color-text">
          <div @click="toggleMenu"
            :class="{ flex: menu, hidden: !menu }"
            class="cursor-pointer justify-end w-full p-4 lg:hidden">
            <i class="fa-solid fa-xmark hover:text-orange-500 text-xl"></i>
          </div>
          <div @click="toggleMenu"
            :class="{ hidden: menu, flex: !menu }"
            class="cursor-pointer justify-end w-full p-4 lg:hidden">
            <i class="fa-solid fa-bars hover:text-orange-500 text-xl"></i>
          </div>
          <!-- Mobile Menu -->
          <div v-if="menu" class="text-sm flex flex-col bg-menu w-full px-4 lg:hidden">
            <div class="hover:text-orange-500 py-2 text-nowrap cursor-pointer">
              {{ $t('app.menu.aboutus') }}
            </div>
            <div class="navbar-center text-nowrap flex cursor-pointer py-2">
              <ul class="menu">
                <li>
                  <details>
                    <summary class="hover:text-orange-500 text-sm">
                      {{ $t('app.menu.capabilities') }}
                    </summary>
                    <ul>
                      <li class="hover:text-orange-500 text-sm">
                        <a>{{ $t('app.menu.woodenfurniture') }}</a>
                      </li>
                      <li class="hover:text-orange-500 text-sm">
                        <a>{{ $t('app.menu.metalfurniture') }}</a>
                      </li>
                      <li class="hover:text-orange-500 text-sm">
                        <a>{{ $t('app.menu.upholstery') }}</a>
                      </li>
                      <li class="hover:text-orange-500 text-sm"><a>{{ $t('app.menu.door') }}</a></li>
                      <li class="hover:text-orange-500 text-sm">
                        <a>{{ $t('app.menu.finishing') }}</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <div class="hover:text-orange-500 py-2 text-nowrap cursor-pointer">
              {{ $t('app.menu.projects') }}
            </div>
            <div class="hover:text-orange-500 py-2 text-nowrap cursor-pointer">
              {{ $t('app.menu.referenceprice') }}
            </div>
            <div class="hover:text-orange-500 py-2 text-nowrap cursor-pointer">
              {{ $t('app.menu.news') }}
            </div>
            <div class="hover:text-orange-500 py-2 text-nowrap cursor-pointer">
              {{ $t('app.menu.contact') }}
            </div>
          </div>
          <!-- Desktop Menu -->
          <div class="hidden lg:flex lg:flex-row justify-end lg:w-full lg:text-sm xl:text-base font-medium">
              <div class="grid grid-cols-6 w-full text-center">
              <!-- About Us Menu Item -->
              <div class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer">
                {{ $t('app.menu.aboutus') }}
                </div>

              <!-- Capabilities Dropdown Menu Item -->
                <div class="relative">
                <div class="navbar-center text-nowrap flex cursor-pointer py-2 hover:border-b hover:border-orange-500 justify-center">
                  <ul class="menu">
                    <li>
                      <details>
                        <summary class="lg:text-sm xl:text-base text-center cursor-pointer">
                          {{ $t('app.menu.capabilities') }}
                        </summary>
                        <ul class="absolute left-0 top-full mt-1 bg-menu bg-white shadow-md rounded-md p-2 w-48 text-left z-50">
                          <li class="hover:text-orange-500 text-xs text-nowrap">
                            <a>{{ $t('app.menu.woodenfurniture') }}</a>
                          </li>
                          <li class="hover:text-orange-500 text-xs">
                            <a>{{ $t('app.menu.metalfurniture') }}</a>
                          </li>
                          <li class="hover:text-orange-500 text-xs">
                            <a>{{ $t('app.menu.upholstery') }}</a>
                          </li>
                          <li class="hover:text-orange-500 text-xs">
                            <a>{{ $t('app.menu.door') }}</a>
                          </li>
                          <li class="hover:text-orange-500 text-xs">
                            <a>{{ $t('app.menu.finishing') }}</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Other Menu Items -->
              <div class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer">
                {{ $t('app.menu.projects') }}
              </div>
              <div class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer">
                {{ $t('app.menu.referenceprice') }}
              </div>
              <div class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer">
                {{ $t('app.menu.news') }}
              </div>
              <div class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer">
                {{ $t('app.menu.contact') }}
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
            {{ $t('app.clients.clients') }}
          </h2>
          <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5" style="height: 1px"></div>
          <p class="text-sm text-center color-section">
            {{ $t('app.clients.withover') }}
            <br />
            {{ $t('app.clients.bespokefurniture') }}
          </p>
        </div>
      </div>
      <!-- Communicate -->
      <Communicate/>
      <!-- Solution -->
       <Solution/>
       <!-- Factories -->
        <Factories/>
       <!-- Projects -->
       <Projects/>
       <!-- OverView -->
       <Overview/>
      <!-- members -->
      <OurMembers />
    </div>
    <!-- footer -->
    <footer>
      <div class="flex flex-col justify-between md:flex-row bg-black px-5">
        <div
          class="w-full md:w-1/2 flex justify-center items-center color-text text-xs p-2"
        >
          <p>
            Copyright 2024 © All rights Reserved. Design by Tran Duc Furnishings
          </p>
        </div>
        <div
          class="w-full md:w-1/2 flex justify-center items-center color-text gap-5 p-2"
        >
          <span
            ><a href="/"
              ><i class="fab fa-facebook-f hover:text-orange-500 h-4"></i></a
          ></span>
          <span
            ><a href="/"
              ><i class="fab fa-youtube hover:text-orange-500 h-4"></i></a
          ></span>
          <span
            ><a href="/"
              ><i class="fab fa-instagram hover:text-orange-500 h-4"></i></a
          ></span>
          <span
            ><a href="/"
              ><i class="fab fa-linkedin hover:text-orange-500 h-4"></i></a
          ></span>
          <LanguageSwitch/>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menu = ref(false);

function toggleMenu() {
  menu.value = !menu.value;
}

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
  font-size: 1rem;
  line-height: 1.5rem;
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
</style>
