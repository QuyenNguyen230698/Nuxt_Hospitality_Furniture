<template>
  <div>
    
    <!-- main -->
    <div class="flex flex-col w-full h-full">
      <!-- SlideShow -->
      <SliceShow />
      <!-- Section -->
      <Section />
      <!-- Clients -->
      <div class="flex flex-col items-center justify-center bg-black p-6">
        <div class="py-2 px-10 md:px-0">
          <h2 class="text-center text-3xl lg:text-5xl font-bold p-6 text-white">
            {{ $t("app.clients.clients") }}
          </h2>
          <div
            class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5"
            style="height: 1px"
          ></div>
          <p class="text-sm color-section text-justify leading-loose">
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

    </div>
   
  </div>
</template>

<script setup>

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

</style>
