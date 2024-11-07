<template>
    <div>
        <SliceShow/>
        <!-- Our Story -->
        <div class="flex flex-col w-full h-full items-center justify-center bg-black">
            <div class="flex flex-col items-center justify-center md:container py-10">
                <div class="py-2 px-10 md:px-0">
                    <h2 class="text-center text-5xl font-bold p-6 text-white">{{ $t("app.aboutUs.ourStory") }}</h2>
                    <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5" style="height: 1px"></div>
                </div>
                <div class="flex flex-col md:flex-row justify-center gap-10 p-4 md:p-0">
                    <div class="w-full md:w-1/2 order-1">
                        <p class="text-base color-section text-justify leading-loose">
                        {{ $t("app.aboutUs.esbtablished") }}
                        <br /><br />
                        {{ $t("app.aboutUs.combination") }}
                        <br /><br />
                        {{ $t("app.aboutUs.capacity") }}
                    </p>
                    </div>
                    <div class="w-full md:w-1/2 order-2">
                        <img src="/public/image/about/about1.jpg" alt="about-us-1" class="w-full h-full object-cover">
                    </div>
                </div>
            </div>
        </div>
        <!-- Philosophy -->
        <div class="flex flex-col w-full h-full items-center justify-center bg-philosophy bg-fixed group">
            <div class="flex flex-col items-center justify-center md:container py-10">
                <div class="py-2 px-10 md:px-0">
                    <h2 class="text-center text-5xl font-bold p-6 text-white">{{ $t("app.aboutUs.philosophy") }}</h2>
                    <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5" style="height: 1px"></div>
                </div>
                <div class="flex flex-col md:flex-row justify-center gap-10 p-4 md:p-0">
                    <div class="w-full md:w-1/2 order-2">
                        <p class="text-base color-section text-justify leading-loose">
                        {{ $t("app.aboutUs.quality") }}
                        <br /><br />
                        {{ $t("app.aboutUs.furthermore") }}
                    </p>
                    </div>
                    <div class="w-full md:w-1/2 order-1 overflow-hidden">
                        <img src="/public/image/about/about2.jpg" alt="about-us-2" class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110">
                    </div>
                </div>
            </div>
        </div>
        <!-- Technology -->
        <div class="flex flex-col w-full h-full items-center justify-center bg-black">
            <div class="flex flex-col items-center justify-center md:container py-10">
                <div class="py-2 px-10 md:px-0">
                    <h2 class="text-center text-5xl font-bold p-6 text-white">{{ $t("app.aboutUs.technology") }}</h2>
                    <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5" style="height: 1px"></div>
                </div>
                <div class="flex flex-col md:flex-row justify-center gap-10 p-4 md:p-0">
                    <div class="w-full md:w-1/2 order-1">
                        <p class="text-base color-section text-justify leading-loose">
                        {{ $t("app.aboutUs.tranDuc") }}
                        <br /><br />
                        {{ $t("app.aboutUs.skilled") }}
                        <br /><br />
                        {{ $t("app.aboutUs.investment") }}
                    </p>
                    </div>
                    <div class="w-full md:w-1/2 order-2 grid grid-cols-2 gap-2">
                        <div class="relative">
                            <img src="/public/image/about/about3.jpg" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-1000"></div>
                        </div>
                        <div class="relative">
                            <img src="/public/image/about/about4.jpg" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-1000"></div>
                        </div>
                        <div class="relative">
                            <img src="/public/image/about/about5.jpg" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-1000"></div>
                        </div>
                        <div class="relative">
                            <img src="/public/image/about/about6.jpg" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-1000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Offering -->
        <div class="flex flex-col w-full h-full items-center justify-center bg-offering bg-fixed">
            <div class="flex flex-col items-center justify-center md:container py-20">
                <div class="flex flex-col md:flex-row justify-center items-center gap-5 p-6 md:p-0">
                    <div class="w-full md:w-1/2 order-3 ">
                        <ul class="text-base color-text text-justify leading-loose">
                            <li>{{ $t("app.aboutUs.days") }}</li>
                            <li>{{ $t("app.aboutUs.loading") }}</li>
                            <li>{{ $t("app.aboutUs.veneer") }}</li>
                            <li>{{ $t("app.aboutUs.metal") }}</li>
                            <li>{{ $t("app.aboutUs.upholstery") }}</li>
                            <li>{{ $t("app.aboutUs.independent") }}</li>
                            <li>{{ $t("app.aboutUs.years") }}</li>
                        </ul>
                    </div>
                    <div class="h-60 bg-orange-500 ml-10 mr-4 order-2 hidden md:block" style="width: 1px;"></div>
                    <div class="w-full md:w-1/3 order-1">
                        <h2 class="text-center text-5xl font-bold p-6 text-white uppercase leading-snug">{{ $t("app.aboutUs.offering") }}</h2>
                        <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5 md:hidden" style="height: 1px"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.bg-philosophy {
    background-image: url('/public/image/about/about8.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.bg-offering {
    background-image: url('/public/image/about/about7.jpg');
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
ul {
    list-style-type: disc;
}
</style>