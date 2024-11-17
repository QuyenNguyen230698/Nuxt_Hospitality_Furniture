<template>
    <div>
        <!-- members -->
        <OurMembers />
         <!-- footer -->
        <footer>
            <div class="flex flex-col justify-between md:flex-row bg-black px-5">
                <div
          class="w-full md:w-1/2 flex justify-center items-center color-text p-2"
        >
          <p class="text-xs text-center md:text-sm">
            Copyright 2024 © All rights Reserved. Design by Tran Duc Furnishings
          </p>
        </div>
        <div
          class="w-full md:w-1/2 flex justify-center items-center color-text gap-5 p-2"
        >
          <span
            ><NuxtLink href="https://www.facebook.com/TranDucFurnishings" aria-label="facebook" target="_blank" rel="noopener noreferrer"
              ><i class="fab fa-facebook-f hover:text-orange-500 h-4"></i></NuxtLink
          ></span>
          <span
            ><NuxtLink href="https://www.youtube.com/@TranDucCorporation" aria-label="youtube" target="_blank" rel="noopener noreferrer"
              ><i class="fab fa-youtube hover:text-orange-500 h-4"></i></NuxtLink
          ></span>
          <span
            ><NuxtLink href="https://www.instagram.com/tranducfurnishings/" aria-label="instagram" target="_blank" rel="noopener noreferrer"
              ><i class="fab fa-instagram hover:text-orange-500 h-4"></i></NuxtLink
          ></span>
          <span
            ><NuxtLink href="https://vn.linkedin.com/company/tranduccorp" aria-label="linkedin" target="_blank" rel="noopener noreferrer"
              ><i class="fab fa-linkedin hover:text-orange-500 h-4"></i></NuxtLink
          ></span>
          <LanguageSwitch />
        </div>
            </div>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
.color-text {
  color: #ababab;
}
.color-section {
  color: #bfbfbf;
}
</style>