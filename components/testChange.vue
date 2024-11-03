<template>
    <div
      :style="{ backgroundImage: `url(${currentImage.src})` }"
      class="bg-slice h-96 w-full"
      ref="imageElement"
    ></div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  // Danh sách hình ảnh
  const slideImage = [
    { src: '/image/project/project1.jpg' },
    { src: '/image/project/project2.jpg' },
    { src: '/image/project/project3.jpg' },
    { src: '/image/project/project4.jpg' },
    { src: '/image/project/project5.jpg' },
  ]
  
  // Khởi tạo biến cho ảnh hiện tại
  const currentImage = ref(slideImage[0])
  let currentIndex = 0
  
  // Tham chiếu đến phần tử hình ảnh
  const imageElement = ref(null)
  
  // Hàm tự động chuyển đổi ảnh
  function changeImage() {
    currentIndex = (currentIndex + 1) % slideImage.length
    currentImage.value = slideImage[currentIndex]
  }
  
  // Hàm resetScale
  function resetScale() {
    if (imageElement.value) {
      // Đặt scale về kích thước ban đầu
      imageElement.value.style.transform = 'scale(1)'
  
      // Tắt animation
      imageElement.value.style.animation = 'none'
  
      // Buộc trình duyệt render lại để cập nhật
      void imageElement.value.offsetWidth
  
      // Bật lại animation
      imageElement.value.style.animation = 'scaleUp 3s ease-in-out forwards'
    }
  }
  
  // Khi thành phần được tải, thực hiện chuyển đổi và reset animation mỗi 3 giây
  onMounted(() => {
    setInterval(() => {
      changeImage() // Đổi ảnh
      resetScale()  // Reset lại animation
    }, 3000)
  })
  </script>
  
  <style scoped>
  .bg-slice {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    animation: scaleUp 3s ease-in-out forwards; /* Tự động scale trong 3 giây */
  }
  
  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
  </style>
  