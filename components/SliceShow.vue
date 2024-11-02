<template>
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
</template>

<script setup>

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