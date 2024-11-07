<template>
    <div class="w-full h-screen flex justify-center items-center">
      <main class="relative overflow-hidden z-10">
        <div class="container p-12 lg:p-20 md:p-7 text-module">
          <div class="flex flex-col mx-auto gap-5 text-center justify-center items-center">
            <h1 class="text-7xl ">Sorry,</h1>
            <h2 class="text-6xl font-bold text-red-500">{{ error.statusCode }}</h2>
            <p style="text-align:center;">{{ errorMessage }}</p>
            <NuxtLink to="/"
              class="btnTDC-md w-32 ">
              Go Home
            </NuxtLink>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['error'])
  const errorMessages = {
    400: 'Bad Request: The server could not understand the request.',
    401: 'Unauthorized: Access is denied due to invalid credentials.',
    403: 'Forbidden: You do not have permission to access this resource.',
    404: 'Not Found: The requested resource could not be found.',
    500: 'Internal Server Error: Something went wrong on our end.',
    502: 'Bad Gateway: Received an invalid response from the upstream server.',
    503: 'Service Unavailable: The server is currently unavailable.',
    504: 'Gateway Timeout: The server took too long to respond.',
    // Add more status codes and messages as needed
  }
  
  const errorMessage = computed(() => {
    return errorMessages[props.error.statusCode] || 'An unexpected error occurred.'
  })
  </script>
  
  <style>
  /* Additional styles if needed */
  </style>