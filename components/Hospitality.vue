<template>
  <div>
    <!-- header -->
    <header class="flex bg-word">
      <div class="flex items-center justify-between w-full h-full shadow-xl p-0 md:p-2">
        <div class="w-1/3 md:w-1/5 lg:w-1/4 flex flex-start md:justify-evenly lg:justify-center lg:p-1">
          <a href="/">
            <img
              src="/public/image/logo/Tranduc-Furnishings-compress.png"
              alt=""
              class="h-fit p-0 lg:pb-1 xl:pb-1 md:h-12 xl:h-12 max-w-full max-h-full"
            />
          </a>
        </div>
        <div class="h-full flex flex-col lg:flex-row items-center lg:justify-end w-1/3 md:w-4/5 lg:w-4/6 xl:w-2/4 2xl:w-2/5 color-text">
          <div @click="toggleMenu" :class="{'flex' : menu, 'hidden' : !menu}" class="cursor-pointer justify-end w-full p-4 lg:hidden">
            <i class="fa-solid fa-xmark hover:text-orange-500 text-xl"></i>
          </div>
          <div @click="toggleMenu" :class="{'hidden' : menu, 'flex' : !menu}" class="cursor-pointer justify-end w-full p-4 lg:hidden">
            <i class="fa-solid fa-bars hover:text-orange-500 text-xl"></i>
          </div>
          <!-- Mobile Menu -->
          <div v-if="menu" class="text-sm flex flex-col bg-menu w-full px-4 lg:hidden">
            <div class="hover:text-orange-500 py-2 text-nowrap cursor-pointer">About Us</div>
            <div class="navbar-center text-nowrap flex cursor-pointer py-2">
              <ul class="menu">
                <li>
                  <details>
                    <summary class="hover:text-orange-500 text-sm">Capabilities</summary>
                    <ul>
                      <li class="hover:text-orange-500 text-xs"><a>Wooden Furniture</a></li>
                      <li class="hover:text-orange-500 text-xs"><a>Metal Furniture</a></li>
                      <li class="hover:text-orange-500 text-xs"><a>Upholstery</a></li>
                      <li class="hover:text-orange-500 text-xs"><a>Door</a></li>
                      <li class="hover:text-orange-500 text-xs"><a>Finishing</a></li>
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
          <!-- Desktop Menu -->
          <div class=" hidden lg:flex lg:flex-row justify-end lg:w-full lg:text-sm xl:text-base font-medium">
            <div class="grid grid-cols-6 w-full text-center">
              <div class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer ">About Us</div>
            <div class="navbar-center text-nowrap flex cursor-pointer py-2 hover:border-b hover:border-orange-500 justify-center">
              <ul class="menu">
                <li>
                  <details>
                    <summary class="lg:text-sm xl:text-base text-center">Capabilities</summary>
                    <ul class="bg-menu">
                      <li class="hover:text-orange-500 text-xs text-nowrap"><a>Wooden Furniture</a></li>
                      <li class="hover:text-orange-500 text-xs"><a>Metal Furniture</a></li>
                      <li class="hover:text-orange-500 text-xs"><a>Upholstery</a></li>
                      <li class="hover:text-orange-500 text-xs"><a>Door</a></li>
                      <li class="hover:text-orange-500 text-xs"><a>Finishing</a></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <div class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer">Projects</div>
            <div class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer">Reference Price</div>
            <div class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer">News</div>
            <div class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer">Contact</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- main -->
     <div class="flex flex-col w-full">
        <!-- SlideShow -->
         <div class="py-10 md:py-14 border-y border-y-orange-500 bg-slice relative">
            <div class="absolute inset-0 bg-slice-2"></div>
            <div class="flex flex-col w-full h-full relative z-20">
              <div class="flex flex-col justify-center items-center text-white container m-8 mx-auto">
                <h2 class=" font-black text-center leading-snug tracking-widest uppercase" style="line-height: 3.5;">
                  <span class="text-5xl">Top Hospitality Furniture Manufacturer </span>
                  <br>
                  <span class="text-5xl">in Vietnam</span>
                </h2>
              </div>
              <div class="flex flex-col md:flex-row justify-center items-center gap-4">
                <button class="bg-none btn-hover hover:border-white hover:text-white transition-colors duration-300 border-2 px-12 lg:px-14 py-3 lg:py-4 text-md leading-none border-orange-500 text-orange-500 rounded-md uppercase">Factory Tour</button>
                <button class="transition-colors duration-300 border-2 px-7 lg:px-8 py-3 lg:py-4 text-md leading-none btn-hover2 rounded-md uppercase">Capability Profile</button>
              </div>
            </div>
         </div>
        <!-- members -->
         <MembersOurMembers />
     </div>
     <footer>
        <div class="flex flex-col justify-between md:flex-row bg-black px-5">
            <div class="w-full md:w-1/2 flex justify-center items-center color-text text-xs p-2">
                <p>Copyright 2024 © All rights Reserved. Design by Tran Duc Furnishings</p>
            </div>
            <div class="w-full md:w-1/2 flex justify-center items-center color-text gap-5 p-2">
                <span><a href="/"><i class="fab fa-facebook-f hover:text-orange-500 h-4"></i></a></span>
                <span><a href="/"><i class="fab fa-youtube hover:text-orange-500 h-4"></i></a></span>
                <span><a href="/"><i class="fab fa-instagram hover:text-orange-500 h-4"></i></a></span>
                <span><a href="/"><i class="fab fa-linkedin hover:text-orange-500 h-4"></i></a></span>
            </div>
        </div>
     </footer>
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
.bg-slice {
  background-image:  url('/public/image/project/project1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.bg-slice-2 {
  background-color: #1b1b24;
  opacity: 0.76;
  transition: background 0.3s, border-radius 0s, opacity 0.3s;
}
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
.btn-hover:hover {
  background-color: #7A7A7A;
}
.btn-hover2 {
  background-color: #7B7051;
  border-color: #B9A97A;
  color: white
}
.btn-hover2:hover {
  background-color: rgba(255,255,255,0);
  color:#B9A97A;
  border-color: #B9A97A;
}
</style>
