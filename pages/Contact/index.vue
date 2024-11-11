<template>
    <section>
        <div class="flex flex-col items-center justify-center w-full h-full text-white bg-black">
            <!-- map & form -->
            <div class="grid grid-cols-12 w-full h-full items-center justify-center gap-4 py-0 lg:py-4">
                <!-- map -->
                <div class="col-span-12 lg:col-span-6 w-full h-full">
                    <iframe class="w-full h-full object-cover" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.689917234233!2d106.72432117546735!3d10.9867614552779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174da745643807b%3A0xc8e56f91fd61f757!2zQ8O0bmcgVHkgVHLhuqduIMSQ4bupYw!5e0!3m2!1svi!2s!4v1731330369530!5m2!1svi!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <!-- form -->
                <div class="col-span-12 lg:col-span-6 w-full h-full">
                    <section class="w-full px-4">
                    <div class="flex flex-col gap-6 w-full">
                        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4 w-full">
                            <div class="col-span-2">
                                <h2 class="text-center text-3xl lg:text-5xl font-bold p-6 text-white">
                                    Leave us your info!
                                </h2>
                                <p class="text-center text-sm text-gray-400">and we will get back to you</p>
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
                          <input type="text" :placeholder="$t('form.placeHolderName')" class="w-full bg-transparent border-b border-gray-500 focus:outline-none py-1 text-base">
                        </div>
                        <div  class="col-span-2 lg:col-span-1">
                          <label class="block mb-1 font-light text-base">
                            <span class="text-base flex items-center text-center">
                              {{ $t('form.email') }}
                            </span>
                          </label>
                          <input type="email" :placeholder="$t('form.placeHolderEmail')" class="w-full bg-transparent border-b border-gray-500 focus:outline-none py-1 text-base">
                        </div>
                        <div  class="col-span-2 lg:col-span-1">
                          <label class="block mb-1 font-light text-base">
                            <span class="text-base text-center flex items-center">
                              {{ $t('form.phone') }}
                            </span>
                          </label>
                          <input type="tel" :placeholder="$t('form.placeHolderPhone')" class="w-full bg-transparent border-b border-gray-500 focus:outline-none py-1 text-base">
                        </div>
                        <div  class="col-span-2 lg:col-span-1">
                          <label class="block mb-1 font-light text-base">
                            <span class="text-base flex items-center text-center">{{ $t('form.companyName') }}</span>
                          </label>
                          <input type="text" :placeholder="$t('form.companyName')" class="w-full bg-transparent border-b border-gray-500 focus:outline-none py-1 text-base">
                        </div>
                        <div class="col-span-2">
                          <label class="block mb-1 font-light text-base">
                            <span class="text-base flex items-center text-center">Furniture Project (Required)</span>
                          </label>
                          <select class="select select-bordered select-sm w-full text-black">
                            <option>5-star Hotel</option>
                            <option>4-star Hotel</option>
                            <option>3-star Hotel</option>
                            <option>Luxury Resort</option>
                            <option>Restaurant</option>
                          </select>
                        </div>
                        <div  class="col-span-2">
                          <label class="block mb-1 font-light text-base">
                            <span class="text-base flex items-center text-center">[Max 5Mb/file] Specs, Documents, Images, zip... to get quotation</span>
                          </label>
                          <input type="file" class="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                        </div>
                        <div  class="col-span-2">
                          <label class="inline-flex items-center">
                            <span class="text-sm text-gray-400 text-justify">
                                Message (Required) 
                            </span>
                          </label>
                          <textarea class="w-full bg-transparent border border-gray-300 focus:outline-none focus:border-gray-500 rounded-md p-2 text-sm" name="form_fields[message]" id="form-field-message" rows="4" placeholder="Your message" required aria-required="true"></textarea>
                        </div>
                        <div  class="col-span-2 flex justify-center">
                          <button class="w-full btn bg-white rounded-none border-none text-black py-1 md:py-2 hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Send message</button>
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
                    <h2 class="text-2xl lg:text-3xl font-extrabold py-6">Representative</h2>
                    <p class="text-gray-400">Sale Department</p>
                    <p class="text-gray-400">(+84-274) 3 718 111</p>
                    <p class="text-orange-500"><a href="mailto:sales@tranducfurnishings.com">sales@tranducfurnishings.com</a></p>
                </div>
                <div class="flex flex-col text-center w-full lg:w-1/4 h-full">
                    <h2 class="text-2xl lg:text-3xl font-extrabold py-6">Working Hours</h2>
                    <p class="text-gray-400">8:00 am – 5.00 pm Monday – Friday</p>
                    <p class="text-gray-400">8:00 am – 12.00 am  Saturday</p>
                </div>
                <div class="flex flex-col text-center w-full lg:w-1/4 h-full">
                    <h2 class="text-2xl lg:text-3xl font-extrabold py-6">Address</h2>
                    <div style="text-align: left; width: 100%; max-width: 600px; margin: 0 auto;"><span style="display: inline-block; width: 18%; color: #ff6600; vertical-align: top; font-weight: 500;">Office</span>
                    <span class="text-gray-400" style="display: inline-block; width: 75%; vertical-align: top;">
                    : Unit 901, The Waterfront Saigon, 1-1A Ton Duc Thang, District 1, Ho Chi Minh City, Vietnam
                        </span>
                        <span style="display: inline-block; width: 18%; color: #ff6600; vertical-align: top; font-weight: 500;">Factory</span>
                        <span class="text-gray-400" style="display: inline-block; width: 75%; vertical-align: top;">
                        : 69/13 Binh Chuan 42 Street, Binh Chuan Ward, Thuan An City, Binh Duong Province
                        </span></div>
                    </div>
                </div>
                <div class="flex flex-row w-full h-full items-center justify-center py-4 gap-10">
                    <span>
                        <a href="https://www.facebook.com/TranDucFurnishings" target="_blank"><i class="fab fa-facebook-f hover:text-orange-500 text-gray-400 text-xl hover:scale-125 transition-transform duration-300 ease-in-out" aria-hidden="true"></i></a>
                    </span>
                    <span>
                        <a href="https://www.youtube.com/@TranDucCorporation" target="_blank"><i class="fab fa-youtube hover:text-orange-500 text-gray-400 text-xl hover:scale-125 transition-transform duration-300 ease-in-out" aria-hidden="true"></i></a>
                    </span>
                    <span>
                        <a href="https://www.instagram.com/tranducfurnishings/" target="_blank"><i class="fab fa-instagram hover:text-orange-500 text-gray-400 text-xl hover:scale-125 transition-transform duration-300 ease-in-out" aria-hidden="true"></i></a>
                    </span>
                    <span>
                        <a href="https://www.linkedin.com/company/tranduc/" target="_blank"><i class="fab fa-linkedin hover:text-orange-500 text-gray-400 text-xl hover:scale-125 transition-transform duration-300 ease-in-out" aria-hidden="true"></i></a>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.color-text {
  color: #ababab;
}
</style>