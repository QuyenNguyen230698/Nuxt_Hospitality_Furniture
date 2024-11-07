<template>
    <div>
        <SliceShowCapability/>
        <div class="flex flex-col w-full h-full">
            <!-- Wooden Furniture -->
            <div class="flex flex-col md:flex-row h-full w-full bg-black">
                <div class="w-full md:w-3/5">
                    <img src="/public/image/capability/capWooden.jpg" class="w-full h-fit object-cover ">
                </div>
                <div class="w-full md:w-2/5 flex flex-col p-10">
                    <h2 class="text-center text-5xl font-bold p-6 text-white">
                        {{ $t("app.capability.wooden") }}
                    </h2>
                    <div
                        class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5"
                        style="height: 1px"
                    ></div>
                    <p class="text-base color-section text-justify">
                        {{ $t("app.capability.23years") }}
                    </p>
                </div>
            </div>
            <!-- Metal Furniture -->
            <div class="flex flex-col md:flex-row h-full w-full bg-metal">
                <div class="w-full md:w-2/5 flex flex-col p-10">
                    <h2 class="text-center text-5xl font-bold p-6 text-white">
                        {{ $t("app.capability.metal") }}
                    </h2>
                    <div
                        class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5"
                        style="height: 1px"
                    ></div>
                    <p class="text-base color-section text-justify">
                        {{ $t("app.capability.tranDucMetal") }}
                    </p>
                </div>
                <div class="w-full md:w-3/5 overflow-hidden" style="height: 500px;">
                    <img src="/public/image/capability/cap5.jpg" class="w-full h-full object-cover ">
                </div>
            </div>
            <!-- Ulpholstery -->
            <div class="flex flex-col md:flex-row h-full w-full bg-black">
                <div class="w-full md:w-3/5 overflow-hidden" style="height: 500px;">
                    <img src="/public/image/capability/capUlpho.jpg" class="w-full h-full object-cover ">
                </div>
                <div class="w-full md:w-2/5 flex flex-col p-10">
                    <h2 class="text-center text-5xl font-bold p-6 text-white">
                        {{ $t("app.capability.upholstery") }}
                    </h2>
                    <div
                        class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5"
                        style="height: 1px"
                    ></div>
                    <p class="text-base color-section text-justify">
                        {{ $t("app.capability.tranDucUpholstery") }}
                    </p>
                </div>
            </div>
            <!-- Door -->
            <div class="flex flex-col md:flex-row h-full w-full bg-metal">
                <div class="w-full md:w-2/5 flex flex-col p-10">
                    <h2 class="text-center text-5xl font-bold p-6 text-white">
                        {{ $t("app.capability.door") }}
                    </h2>
                    <div
                        class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5"
                        style="height: 1px"
                    ></div>
                    <p class="text-base color-section text-justify">
                        {{ $t("app.capability.tranDucDoor") }}
                    </p>
                </div>
                <div class="w-full md:w-3/5 overflow-hidden" style="height: 500px;">
                    <img src="/public/image/capability/capDoor.jpg" class="w-full h-full object-cover ">
                </div>
            </div>
            <!-- Finishing -->
            <div class="flex flex-col md:flex-row h-full w-full bg-black">
                <div class="w-full md:w-3/5 overflow-hidden" style="height: 500px;">
                    <img src="/public/image/capability/capFinishing.jpg" class="w-full h-full object-cover ">
                </div>
                <div class="w-full md:w-2/5 flex flex-col p-10">
                    <h2 class="text-center text-5xl font-bold p-6 text-white">
                        {{ $t("app.capability.finishing") }}
                    </h2>
                    <div
                        class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5"
                        style="height: 1px"
                    ></div>
                    <p class="text-base color-section text-justify">
                        {{ $t("app.capability.tranDucFinishing") }}
                    </p>
                </div>
            </div>
        </div>
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
.bg-metal {
    background-color: #54595E;
}
</style>