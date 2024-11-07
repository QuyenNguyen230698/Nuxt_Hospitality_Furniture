<template>
    <div class="flex flex-col w-full h-full bg-black p-0 md:py-6">
        <h2 class="text-center text-5xl font-bold p-6 text-white"><a href="/Capabilities">{{ $t('app.factories.ourfactories') }}</a></h2>
        <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-10" style="height: 1px"></div>
        <div class="flex flex-col w-full px-2 lg:p-0 justify-center items-center">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full h-72 overflow-hidden">
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110"
                        style="background-image: url('/image/factory/Wood.jpg'); background-size: cover; background-position: center;">
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">{{ $t('app.factories.wood') }}</h3>
                    </div>
                </div>
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110"
                        style="background-image: url('/image/factory/Veneer.jpg'); background-size: cover; background-position: center;">
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">{{ $t('app.factories.veneer') }}</h3>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full h-72 overflow-hidden">
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110"
                        style="background-image: url('/image/factory/Metal.jpg'); background-size: cover; background-position: center;">
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">{{ $t('app.factories.metal') }}</h3>
                    </div>
                </div>
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110"
                        style="background-image: url('/image/factory/Upholstery.jpg'); background-size: cover; background-position: center;">
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">{{ $t('app.factories.upholstery') }}</h3>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full h-72 overflow-hidden">
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110"
                        style="background-image: url('/image/factory/Painting.jpg'); background-size: cover; background-position: center;">
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">{{ $t('app.factories.painting') }}</h3>
                    </div>
                </div>
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110"
                        style="background-image: url('/image/factory/Coating.jpg'); background-size: cover; background-position: center;">
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">{{ $t('app.factories.coating') }}</h3>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 items-center justify-center w-full h-36 md:h-72 overflow-hidden">
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110"
                        style="background-image: url('/image/factory/Finishing.jpg'); background-size: cover; background-position: center;">
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">{{ $t('app.factories.finishing') }}</h3>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full h-72 overflow-hidden">
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110"
                        style="background-image: url('/image/factory/Shape.jpg'); background-size: cover; background-position: center;">
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">{{ $t('app.factories.shape') }}</h3>
                    </div>
                </div>
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110"
                        style="background-image: url('/image/factory/Assemble.jpg'); background-size: cover; background-position: center;">
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">{{ $t('app.factories.assemble') }}</h3>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full h-72 overflow-hidden">
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110"
                        style="background-image: url('/image/factory/Delivery.jpg'); background-size: cover; background-position: center;">
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">{{ $t('app.factories.delivery') }}</h3>
                    </div>
                </div>
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110"
                        style="background-image: url('/image/factory/Art.jpg'); background-size: cover; background-position: center;">
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">{{ $t('app.factories.art') }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.text-factory {
    color: #F9F9F975;
}
</style>