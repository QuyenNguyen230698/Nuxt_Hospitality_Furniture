<template>
    <div class="bg-image-member w-full h-full pb-5 pt-10 px-14">
        <div class="container mx-auto text-center font-bold  flex flex-col w-full h-full text-xl md:text-2xl lg:text-3xl text-white py-6">
            <h2 class="p-4">Our members</h2>
            <div class="flex flex-col md:flex-row gap-16 mb:gap-10">
               <div class="flex flex-col items-center justify-center w-full min-h-52 bg-member gap-4 text-gray-300">
                <a href="/">
                    <img src="/public/image/logo/TranDuc-homes.png" alt="" class="h-20">
                </a>
                <p>Total Solution for Green Projects</p>
               </div>
               <div class="flex flex-col items-center justify-center w-full min-h-52 bg-member gap-4 text-gray-300">
                <a href="/">
                    <img src="/public/image/logo/Modulux-White-ByTranduc-768x600.png" alt="" class="h-28">
                </a>
                <p>Sustainable  Living Solution</p>
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
}
</style>