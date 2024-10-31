<template>
  <div>
    <header class="flex justify-between items-center">
      <div class="flex items-center w-full shadow-xl p-2">
        <div class="h-12 min-h-12 w-3/5 flex flex-start">
          <a href="/">
            <img
            src="/public/image/logo/Tranduc-Furnishings-compress.png"
            alt=""
            class="w-fit h-full object-contain max-w-full max-h-full"
          />
          </a>
        </div>
        <div class="h-10 flex items-center justify-end w-2/5 lg:hidden p-2">
          <span class="text-gray-500 cursor-pointer">
            <i class="fa-solid fa-bars hover:text-orange-500 text-xl"></i>
          </span>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup></script>

<style scoped>
.color-orange {
  color: #f5833e;
}
</style>
