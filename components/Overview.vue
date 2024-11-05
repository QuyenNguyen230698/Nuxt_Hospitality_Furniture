<template>
    <div class="bg-overview flex flex-col w-full h-full p-6">
        <div class="text-center ">
            <h2 class="text-center text-5xl font-bold p-6 text-white">{{ $t('app.overview.productmanufacturingoverview') }}</h2>
            <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-10" style="height: 1px"></div>
        </div>
        <div class="flex flex-col md:flex-row w-full h-full">
            <div class="items-center justify-center w-1/3 h-full hidden md:flex flex-col">
                <h2 class="text-white text-2xl font-bold py-4 w-full border-b-2 border-b-orange-500 uppercase">{{ $t('app.overview.playlist') }}</h2>
                <ul class="space-y-2 w-full">
                    <li
                        v-for="item in playlist"
                        :key="item.id"
                        @click="selectPlaylist(item)"
                        class="p-2 cursor-pointer text-white hover:text-orange-500 hover:bg-gray-200"
                    >
                        {{ item.name }}
                    </li>
                </ul>
            </div>
            <div class="flex items-center justify-center w-full h-full md:w-2/3">
                <h2 v-if="!selectedPlaylist" class="text-2xl font-bold text-center">
                </h2>
                <iframe
                    v-else
                    :src="getEmbedUrl(selectedPlaylist.src)"
                    class="w-full max-w-full min-w-full h-96 object-contain"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <div class="flex flex-col items-center justify-center w-full h-full md:hidden">
                <h2 class="text-white text-2xl font-bold py-4 w-full border-b-2 border-b-orange-500 uppercase">{{ $t('app.overview.playlist') }}</h2>
                <ul class="space-y-2 w-full">
                    <li
                        v-for="item in playlist"
                        :key="item.id"
                        @click="selectPlaylist(item)"
                        class="p-2 cursor-pointer text-white hover:text-orange-500 hover:bg-gray-200"
                    >
                        {{ item.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

// khởi tạo playlist
const playlist = ref([
  { id: 1, name: 'Hotel Furniture Manufacturer', src: 'https://youtu.be/SD0Wpexdhu0?si=QC8d-GoGNYXmFWDa' },
  { id: 2, name: 'Nightstands', src: 'https://youtu.be/aYZqSfvjMR4?si=qDJF7UcdDSRcEsws' },
  { id: 3, name: 'The Wink', src: 'https://youtu.be/-67K6nlJkf0?si=QUUa3qSRXHdq5Uss' },
  { id: 4, name: 'Conrad City Center DC', src: 'https://youtu.be/vz6UWNLJG8o?si=yk1VGvpMTXMjZxoZ' },
  { id: 5, name: 'Flamingo Las Vegas', src: 'https://youtu.be/TbZ7EBZWmho?si=AS4o5sh2DOreO-pX' },
  { id: 6, name: 'RITZ CARLTON ATLANTA', src: 'https://youtu.be/C3xKIXZzIgc?si=lZEep1DVmBMr0A37' }
]);
// khởi tạo selectedPlaylist
const selectedPlaylist = ref(playlist.value[0]); // Set default to the first item
// Hàm chọn video và chuyển đổi URL thành dạng nhúng của YouTube
const selectPlaylist = (item) => {
  selectedPlaylist.value = item;
};
const getEmbedUrl = (url) => {
  const videoId = url.split("v=")[1]?.split("&")[0] || url.split("youtu.be/")[1];
  return `https://www.youtube.com/embed/${videoId}`;
};
</script>

<style scoped>
.bg-overview {
    background-color: #0D0E12;
}
</style>