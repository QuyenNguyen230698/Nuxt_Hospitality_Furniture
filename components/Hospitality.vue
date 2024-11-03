<template>
  <div>
    <!-- header -->
    <header class="flex bg-word">
      <div
        class="flex items-center justify-between w-full h-full shadow-xl p-0 md:p-2"
      >
        <div
          class="w-1/3 md:w-1/5 lg:w-1/4 flex flex-start md:justify-evenly lg:justify-center lg:p-1"
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
          class="h-full flex flex-col lg:flex-row items-center lg:justify-end w-1/3 md:w-4/5 lg:w-4/6 xl:w-2/4 2xl:w-2/5 color-text"
        >
          <div
            @click="toggleMenu"
            :class="{ flex: menu, hidden: !menu }"
            class="cursor-pointer justify-end w-full p-4 lg:hidden"
          >
            <i class="fa-solid fa-xmark hover:text-orange-500 text-xl"></i>
          </div>
          <div
            @click="toggleMenu"
            :class="{ hidden: menu, flex: !menu }"
            class="cursor-pointer justify-end w-full p-4 lg:hidden"
          >
            <i class="fa-solid fa-bars hover:text-orange-500 text-xl"></i>
          </div>
          <!-- Mobile Menu -->
          <div
            v-if="menu"
            class="text-sm flex flex-col bg-menu w-full px-4 lg:hidden"
          >
            <div class="hover:text-orange-500 py-2 text-nowrap cursor-pointer">
              About Us
            </div>
            <div class="navbar-center text-nowrap flex cursor-pointer py-2">
              <ul class="menu">
                <li>
                  <details>
                    <summary class="hover:text-orange-500 text-sm">
                      Capabilities
                    </summary>
                    <ul>
                      <li class="hover:text-orange-500 text-xs">
                        <a>Wooden Furniture</a>
                      </li>
                      <li class="hover:text-orange-500 text-xs">
                        <a>Metal Furniture</a>
                      </li>
                      <li class="hover:text-orange-500 text-xs">
                        <a>Upholstery</a>
                      </li>
                      <li class="hover:text-orange-500 text-xs"><a>Door</a></li>
                      <li class="hover:text-orange-500 text-xs">
                        <a>Finishing</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <div class="hover:text-orange-500 py-2 text-nowrap cursor-pointer">
              Projects
            </div>
            <div class="hover:text-orange-500 py-2 text-nowrap cursor-pointer">
              Reference Price
            </div>
            <div class="hover:text-orange-500 py-2 text-nowrap cursor-pointer">
              News
            </div>
            <div class="hover:text-orange-500 py-2 text-nowrap cursor-pointer">
              Contact
            </div>
          </div>
          <!-- Desktop Menu -->
          <div
            class="hidden lg:flex lg:flex-row justify-end lg:w-full lg:text-sm xl:text-base font-medium"
          >
            <div class="grid grid-cols-6 w-full text-center">
              <div
                class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer"
              >
                About Us
              </div>
              <div
                class="navbar-center text-nowrap flex cursor-pointer py-2 hover:border-b hover:border-orange-500 justify-center"
              >
                <ul class="menu">
                  <li>
                    <details>
                      <summary class="lg:text-sm xl:text-base text-center">
                        Capabilities
                      </summary>
                      <ul class="bg-menu">
                        <li class="hover:text-orange-500 text-xs text-nowrap">
                          <a>Wooden Furniture</a>
                        </li>
                        <li class="hover:text-orange-500 text-xs">
                          <a>Metal Furniture</a>
                        </li>
                        <li class="hover:text-orange-500 text-xs">
                          <a>Upholstery</a>
                        </li>
                        <li class="hover:text-orange-500 text-xs">
                          <a>Door</a>
                        </li>
                        <li class="hover:text-orange-500 text-xs">
                          <a>Finishing</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
              <div
                class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer"
              >
                Projects
              </div>
              <div
                class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer"
              >
                Reference Price
              </div>
              <div
                class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer"
              >
                News
              </div>
              <div
                class="hover:border-orange-500 hover:border-b py-2 text-nowrap cursor-pointer"
              >
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- main -->
    <div class="flex flex-col w-full">
      <!-- SlideShow -->
      <SliceShow />
      <!-- Section -->
      <Section />
      <!-- Clients -->
      <div class="flex flex-col items-center justify-center bg-black">
        <div class="py-2 px-10 md:px-0">
          <h2 class="text-center text-5xl font-bold pb-4 text-white">
            Clients
          </h2>
          <p class="text-sm text-center color-section">
            With over 20 years of experience, having completed more than 400
            projects, and achieving an export milestone of over 200 containers
            each month.
            <br />
            Tran Duc Furnishings proudly stands as one of the leading providers
            of bespoke furniture solutions for the Hospitality and Resort
            industry, particularly in the U.S market
          </p>
        </div>
        <div class="py-4">
          <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto" style="height: 1px"></div>
        </div>
      </div>
      <!-- Communicate -->
      <div class="bg-fixed bg-word">
        <div
          class="flex flex-col md:flex-row justify-center items-center w-full gap-10"
          style="padding: 6% 10% 6% 10%"
        >
          <div
            class="lg:container mx-auto w-full my-3 grid grid-cols-3 md:grid-cols-5 gap-5"
          >
            <div
              v-for="(item, index) in communicate"
              :key="index"
              class="flex items-center justify-center"
            >
              <img
                :src="item.src"
                :alt="`client-${index}`"
                class="w-2/3 max-h-20 min-h-20 md:w-1/2 h-auto col-span-1 object-contain hover:scale-110 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Solution -->
       <Solution/>
      <!-- members -->
      <OurMembers />
    </div>
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

const communicate = [
  { src: "/image/communicate/1-Four-Season.png" },
  { src: "/image/communicate/2-Hyatt.png" },
  { src: "/image/communicate/3-Marriott_Logo.png" },
  { src: "/image/communicate/4-Sheraton-hotels-resorts-2-logo.png" },
  { src: "/image/communicate/5-ConradHotelsLogo.png" },
  { src: "/image/communicate/6-Fairmont_Logo.png" },
  { src: "/image/communicate/7-Ritz-carlton-1-logo-png-transparent.png" },
  { src: "/image/communicate/8-HiltonHotelsLogo.png" },
  {
    src: "/image/communicate/9-Kimpton-hotels-restaurants-logo-kimpton-hotels-restaurants-logo.png",
  },
  {
    src: "/image/communicate/10-Renaissance-hotels-resorts-logo-png-transparent.png",
  },
  { src: "/image/communicate/11-DoubletreeLogo.png" },
  { src: "/image/communicate/12-Westin.png" },
  {
    src: "/image/communicate/13-Embassy-suites-hotels-logo-png-transparent-embassy-suites.png",
  },
  { src: "/image/communicate/14-Flamingo_CUN-01_Sin_fondo.png" },
  { src: "/image/communicate/15-Graduate.png" },
  { src: "/image/communicate/16-Golden-Nugget.png" },
  { src: "/image/communicate/17-Delta_Hotels_logo.png" },
  { src: "/image/communicate/18-Aloft-Sunnyvale.png" },
  { src: "/image/communicate/19Postoak-stacked-white.png" },
  { src: "/image/communicate/20-The-Wink.png" },
];


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
