<template>
    <section>
        <div class="flex flex-col items-center justify-center w-full h-full text-white bg-black">
            <!-- map & form -->
            <div class="grid grid-cols-12 w-full h-full items-center justify-center gap-4 py-0 lg:py-4">
                <!-- map -->
                <div class="col-span-12 lg:col-span-6 w-full h-full">
                    <iframe class="w-full h-full object-cover" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.689917234233!2d106.72432117546735!3d10.9867614552779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174da745643807b%3A0xc8e56f91fd61f757!2zQ8O0bmcgVHkgVHLhuqduIMSQ4bupYw!5e0!3m2!1svi!2s!4v1731330369530!5m2!1svi!2s" style="border:0;" allowfullscreen="" loading="eager" title="TranDucLocation" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <!-- form -->
                <div class="col-span-12 lg:col-span-6 w-full h-full">
                    <section class="w-full px-4">
                    <div class="flex flex-col gap-6 w-full">
                        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4 w-full">
                            <div class="col-span-2">
                                <h2 class="text-center text-3xl lg:text-5xl font-bold p-6 text-white">
                                    {{ $t('app.contact.leaveus') }}
                                </h2>
                                <p class="text-center text-sm text-gray-400">
                                    {{ $t('app.contact.and') }}
                                </p>
                                <div
                                    class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto my-5"
                                    style="height: 1px"
                                ></div>
                            </div>
                        <div  class="col-span-2 lg:col-span-1">
                          <label class="block mb-1 font-light text-base">
                            <span class="text-base flex items-center text-center">
                              {{ $t('form.fullName') }}
                            </span>
                          </label>
                          <input type="text" v-model="fullName" :placeholder="$t('form.placeHolderName')" class="w-full bg-transparent border-b border-gray-500 focus:outline-none py-1 text-base">
                        </div>
                        <div  class="col-span-2 lg:col-span-1">
                          <label class="block mb-1 font-light text-base">
                            <span class="text-base flex items-center text-center">
                              {{ $t('form.email') }}
                            </span>
                          </label>
                          <input type="email" v-model="email" :placeholder="$t('form.placeHolderEmail')" class="w-full bg-transparent border-b border-gray-500 focus:outline-none py-1 text-base">
                        </div>
                        <div  class="col-span-2 lg:col-span-1">
                          <label class="block mb-1 font-light text-base">
                            <span class="text-base text-center flex items-center">
                              {{ $t('form.phone') }}
                            </span>
                          </label>
                          <input type="tel" v-model="phone" :placeholder="$t('form.placeHolderPhone')" class="w-full bg-transparent border-b border-gray-500 focus:outline-none py-1 text-base">
                        </div>
                        <div  class="col-span-2 lg:col-span-1">
                          <label class="block mb-1 font-light text-base">
                            <span class="text-base flex items-center text-center">{{ $t('form.companyName') }}</span>
                          </label>
                          <input type="text" v-model="companyName" :placeholder="$t('form.companyName')" class="w-full bg-transparent border-b border-gray-500 focus:outline-none py-1 text-base">
                        </div>
                        <div class="col-span-2">
                          <label class="block mb-1 font-light text-base">
                            <span class="text-base flex items-center text-center">{{ $t('app.contact.furnitureProject') }}</span>
                          </label>
                          <select v-model="projectType" class="select select-bordered select-sm w-full text-black">
                            <option disabled selected>{{ $t('app.contact.pickone') }}</option>
                            <option>{{ $t('app.contact.5star') }}</option>
                            <option>{{ $t('app.contact.4star') }}</option>
                            <option>{{ $t('app.contact.3star') }}</option>
                            <option>{{ $t('app.contact.luxuryResort') }}</option>
                            <option>{{ $t('app.contact.restaurant') }}</option>
                          </select>
                        </div>
                        <div class="col-span-2">
                          <label class="inline-flex items-center">
                            <span class="text-sm text-gray-400 text-justify">
                                {{ $t('app.contact.message') }}
                            </span>
                          </label>
                          <textarea v-model="message" 
                                    :placeholder="$t('app.contact.yourMessage')" 
                                    class="w-full bg-transparent border border-gray-300 focus:outline-none focus:border-gray-500 rounded-md p-2 text-sm" 
                                    rows="4">
                          </textarea>
                        </div>
                        <div class="col-span-2 flex justify-center">
                          <button :disabled="disabledBtnSubmit" @click="submitForm" type="button" class="w-full btn bg-white rounded-none border-none text-black py-1 md:py-2 hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">{{ $t('app.contact.sendMessage') }}</button>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
            </div>
            <!-- contact -->
            <div class="flex flex-col justify-center w-full h-full">
                <div class="flex flex-col lg:flex-row justify-center h-full w-full gap-4 px-4">
                    <div class="flex flex-col text-center w-full lg:w-1/4 h-full">
                    <h2 class="text-2xl lg:text-3xl font-extrabold py-6">{{ $t('app.contact.representative') }}</h2>
                    <p class="text-gray-400">{{ $t('app.contact.sale') }}</p>
                    <p class="text-gray-400">(+84-274) 3 718 111</p>
                    <p class="text-orange-500"><NuxtLink aria-label="email" to="mailto:sales@tranducfurnishings.com">sales@tranducfurnishings.com</NuxtLink></p>
                </div>
                <div class="flex flex-col text-center w-full lg:w-1/4 h-full">
                    <h2 class="text-2xl lg:text-3xl font-extrabold py-6">{{ $t('app.contact.workingHours') }}</h2>
                    <p class="text-gray-400">{{ $t('app.contact.hours') }}</p>
                    <p class="text-gray-400">{{ $t('app.contact.saturday') }}</p>
                </div>
                <div class="flex flex-col text-center w-full lg:w-1/4 h-full">
                    <h2 class="text-2xl lg:text-3xl font-extrabold py-6">{{ $t('app.contact.address') }}</h2>
                    <div class="text-left w-full mx-auto">
                        <span class="inline-block w-1/5 text-orange-500 align-top">{{ $t('app.contact.office') }}</span>
                    <span class="text-gray-400 inline-block w-3/4 align-top">
                    : {{ $t('app.contact.unit') }}
                        </span>
                        <span class="inline-block w-1/5 text-orange-500 align-top">{{ $t('app.contact.factory') }}</span>
                        <span class="text-gray-400 inline-block w-3/4 align-top">
                        : {{ $t('app.contact.binhDuong') }}
                        </span></div>
                    </div>
                </div>
                <div class="flex flex-row w-full h-full items-center justify-center py-4 gap-10">
                    <span>
                        <NuxtLink to="https://www.facebook.com/TranDucFurnishings" target="_blank" aria-label="facebook"><i class="fab fa-facebook-f hover:text-orange-500 text-gray-400 text-xl hover:scale-125 transition-transform duration-300 ease-in-out" aria-hidden="true"></i></NuxtLink>
                    </span>
                    <span>
                        <NuxtLink to="https://www.youtube.com/@TranDucCorporation" target="_blank" aria-label="youtube"><i class="fab fa-youtube hover:text-orange-500 text-gray-400 text-xl hover:scale-125 transition-transform duration-300 ease-in-out" aria-hidden="true"></i></NuxtLink>
                    </span>
                    <span>
                        <NuxtLink to="https://www.instagram.com/tranducfurnishings/" target="_blank" aria-label="instagram"><i class="fab fa-instagram hover:text-orange-500 text-gray-400 text-xl hover:scale-125 transition-transform duration-300 ease-in-out" aria-hidden="true"></i></NuxtLink>
                    </span>
                    <span>
                        <NuxtLink to="https://www.linkedin.com/company/tranduc/" target="_blank" aria-label="linkedin"><i class="fab fa-linkedin hover:text-orange-500 text-gray-400 text-xl hover:scale-125 transition-transform duration-300 ease-in-out" aria-hidden="true"></i></NuxtLink>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const fullName = ref('');
const email = ref('');
const phone = ref('');
const companyName = ref('');
const projectType = ref('');
const message = ref('');
const agreedToPolicy = ref(true);

const resetForm = () => {
  fullName.value = '';
  email.value = '';
  phone.value = '';
  companyName.value = '';
  projectType.value = '';
  message.value = '';
  agreedToPolicy.value = true;
}

const cleanData = () => {
    const sanitizeInput = (input) => {
        return input
            .replace(/<script.*?>.*?<\/script>/gi, '') // Loại bỏ các thẻ <script>
            .replace(/<.*?javascript:.*?>/gi, '') // Loại bỏ các thẻ có thuộc tính javascript
            .replace(/<.*?on\w+=".*?"/gi, ''); // Loại bỏ các thuộc tính sự kiện như onclick, onmouseover, etc.
    }
    message.value = sanitizeInput(message.value.trim());
    fullName.value = sanitizeInput(fullName.value.trim());
    phone.value = sanitizeInput(phone.value.trim());
    email.value = sanitizeInput(email.value.trim());
    companyName.value = sanitizeInput(companyName.value.trim());
    projectType.value = sanitizeInput(projectType.value.trim());
};

const submitForm = () => {
  cleanData();
  const formData = {
    fullName: fullName.value,
    email: email.value,
    phone: phone.value,
    companyName: companyName.value,
    projectType: projectType.value,
    message: message.value,
    agreedToPolicy: agreedToPolicy.value,
  }
  console.log(formData);
  resetForm();
}

useSeoMeta({
    title: 'Contact - Hospitality Furniture',
    ogTitle: 'Contact - Hospitality Furniture',
    description: 'Description',
    ogDescription: 'Description',
    ogImage: 'https://nuxt-hospitality-furniture.vercel.app/_vercel/image?url=%2Fimage%2Flogo%2FTranDuc-homes.png&w=1536&q=75',
    ogUrl: 'https://nuxt-hospitality-furniture.vercel.app/contact',
    ogType: 'event',
    ogSiteName: 'Contact - Hospitality Furniture',
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Contact - Hospitality Furniture',
    twitterDescription: 'Description',
    twitterImage: 'https://nuxt-hospitality-furniture.vercel.app/_vercel/image?url=%2Fimage%2Flogo%2FTranDuc-homes.png&w=1536&q=75',
    keywords: 'Contact, Hospitality Furniture',
})
</script>

<style scoped>
.color-text {
  color: #ababab;
}
</style>