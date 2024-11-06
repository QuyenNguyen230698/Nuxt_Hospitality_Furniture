<template>
    <div class="bg-image-member w-full h-full pb-5 px-14">
        <div class="container mx-auto text-center flex flex-col w-full h-full text-white py-6">
            <h2 class="p-6 font-black text-5xl">{{ $t('app.members.ourmembers') }}</h2>
            <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-10" style="height: 1px"></div>
            <div class="flex flex-col md:flex-row gap-10 mb:gap-4">
               <div class="flex flex-col items-center justify-center w-full min-h-52 bg-member gap-4 text-gray-300">
                <a href="https://tranduchomes.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/public/image/logo/TranDuc-homes.png" alt="" class="h-16 lg:h-20">
                </a>
                <p>{{ $t('app.members.totalsolutionforgreenprojects') }}</p>
               </div>
               <div class="flex flex-col items-center justify-center w-full min-h-52 bg-member gap-4 text-gray-300">
                <a href="https://timberhouse.vn/" target="_blank" rel="noopener noreferrer">
                    <img src="/public/image/logo/Modulux-White-ByTranduc-768x600.png" alt="" class="h-28">
                </a>
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