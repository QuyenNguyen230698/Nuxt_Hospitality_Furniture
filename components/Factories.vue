<template>
    <div class="flex flex-col w-full h-full bg-black p-0 md:py-6">
        <h2 class="text-center text-3xl lg:text-5xl font-bold p-6 text-white">{{ $t('app.factories.ourfactories') }}</h2>
        <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-10" style="height: 1px"></div>
        <div class="flex flex-col w-full px-2 lg:p-0 justify-center items-center">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full h-72 overflow-hidden">
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative bg-cover bg-center h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110">
                        <NuxtImg quality="75" loading="eager" src="/image/factory/Wood.jpg" alt="Wood" class="w-full h-full object-cover absolute inset-0"/>
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">
                            <nuxt-link to="/capabilities/woodenfurniture">{{ $t('app.factories.wood') }}</nuxt-link>
                        </h3>
                    </div>
                </div>
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative bg-cover bg-center h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110">
                        <NuxtImg quality="75" loading="eager" src="/image/factory/Veneer.jpg" alt="Veneer" class="w-full h-full object-cover absolute inset-0"/>
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">{{ $t('app.factories.veneer') }}</h3>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full h-72 overflow-hidden">
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110">
                        <NuxtImg quality="75" loading="eager" src="/image/factory/Metal.jpg" alt="Metal" class="w-full h-full object-cover absolute inset-0"/>
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">
                            <nuxt-link to="/capabilities/metalfurniture">{{ $t('app.factories.metal') }}</nuxt-link>
                        </h3>
                    </div>
                </div>
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110">
                        <NuxtImg quality="75" loading="eager" src="/image/factory/Upholstery.jpg" alt="Upholstery" class="w-full h-full object-cover absolute inset-0"/>
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">
                            <nuxt-link to="/capabilities/ulpholstery">{{ $t('app.factories.upholstery') }}</nuxt-link>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full h-72 overflow-hidden">
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative bg-cover bg-center h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110">
                        <NuxtImg quality="75" loading="eager" src="/image/factory/Painting.jpg" alt="Painting" class="w-full h-full object-cover absolute inset-0"/>
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">{{ $t('app.factories.painting') }}</h3>
                    </div>
                </div>
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative bg-cover bg-center h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110">
                        <NuxtImg quality="75" loading="eager" src="/image/factory/coating.jpg" alt="Coating" class="w-full h-full object-cover absolute inset-0"/>
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">
                            <nuxt-link to="/capabilities/metalfurniture">{{ $t('app.factories.coating') }}</nuxt-link>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 items-center justify-center w-full h-36 md:h-72 overflow-hidden">
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative bg-cover bg-center h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110">
                        <NuxtImg quality="75" loading="eager" src="/image/factory/Finishing.jpg" alt="Finishing" class="w-full h-full object-cover absolute inset-0"/>
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">
                            <nuxt-link to="/capabilities/finishing">{{ $t('app.factories.finishing') }}</nuxt-link>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full h-72 overflow-hidden">
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative bg-cover bg-center h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110">
                        <NuxtImg quality="75" loading="eager" src="/image/factory/Shape.jpg" alt="Shape" class="w-full h-full object-cover absolute inset-0"/>
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">{{ $t('app.factories.shape') }}</h3>
                    </div>
                </div>
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative bg-cover bg-center h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110">
                        <NuxtImg quality="75" loading="eager" src="/image/factory/Assemble.jpg" alt="Assemble" class="w-full h-full object-cover absolute inset-0"/>
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">{{ $t('app.factories.assemble') }}</h3>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full h-72 overflow-hidden">
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative bg-cover bg-center h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110">
                        <NuxtImg quality="75" loading="eager" src="/image/factory/Delivery.jpg" alt="Delivery" class="w-full h-full object-cover absolute inset-0"/>
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000"></div>
                        <h3 class="text-white text-3xl font-bold z-10">{{ $t('app.factories.delivery') }}</h3>
                    </div>
                </div>
                <div class="col-span-1 h-full flex justify-center items-center overflow-hidden">
                    <div class="relative bg-cover bg-center h-full w-full flex justify-center items-center transition-transform duration-1000 transform hover:scale-110">
                        <NuxtImg quality="75" loading="eager" src="/image/factory/Art.jpg" alt="Art" class="w-full h-full object-cover absolute inset-0"/>
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