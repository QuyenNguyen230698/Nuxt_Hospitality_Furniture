<template>
    <div class="bg-image-member w-full h-full pb-5 px-4 relative">
        <div class="absolute inset-0 bg-black opacity-40 h-full w-full"></div>
        <div class="container mx-auto text-center flex flex-col w-full h-full text-white py-6">
            <h2 class="text-center text-2xl lg:text-5xl font-bold p-6 text-white leading-normal z-10">{{ $t('app.members.ourmembers') }}</h2>
            <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-10 z-10" style="height: 1px"></div>
            <div class="flex flex-col md:flex-row gap-10 mb:gap-4 z-10">
               <div class="flex flex-col items-center justify-center w-full min-h-52 bg-member gap-4 text-gray-300">
                <NuxtLink aria-label="tranduchomes" to="https://tranduchomes.com/" target="_blank" rel="noopener noreferrer">
                    <NuxtImg quality="75" loading="eager" aria-label="tranduchomes" src="/image/logo/TranDuc-homes.png" alt="" class="h-16 lg:h-20"></NuxtImg>
                </NuxtLink>
                <p>{{ $t('app.members.totalsolutionforgreenprojects') }}</p>
               </div>
               <div class="flex flex-col items-center justify-center w-full min-h-52 bg-member gap-4 text-gray-300">
                <NuxtLink aria-label="moduluxhomes" to="https://moduluxhomes.com/" target="_blank" rel="noopener noreferrer">
                    <NuxtImg quality="75" loading="eager" aria-label="moduluxhomes" src="/image/logo/Modulux-White-ByTranduc-768x600.png" alt="" class="h-28"></NuxtImg>
                </NuxtLink>
                <p>{{ $t('app.members.sustainabledevelopment') }}</p>
               </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.bg-member {
    background-color: #54595F;
}
.bg-image-member {
    background-image: url('/image/logo/TDF-bg.jpg');
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
</style>