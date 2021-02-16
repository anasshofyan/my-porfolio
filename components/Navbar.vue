<template>
    <nav class="fixed bg-ansomarfa-light shadow-md z-50 w-full top-0">
    <div class="container mx-auto my-3 px-16">
    <div class="flex items-center justify-between">
          <a href="/">
            <img class="" src="../assets/img/logo.svg" alt="Workflow">
          </a>
          <div class="">
            <div class="ml-10">
              <a href="#" v-scroll-to="'#home'" class="text-ansomarfa-dark text-base hover:text-gray-700 px-3 font-normal">Home</a>
              <a href="#" v-scroll-to="'#portfolio'" class="text-ansomarfa-dark text-base hover:text-gray-700 px-3 font-normal">Portfolio</a>
              <a href="#" v-scroll-to="'#contact'" class="text-ansomarfa-dark text-base hover:text-gray-700 px-3 font-normal">Contact</a>
            </div>
          </div>
        </div>
    </div>
  </nav>
</template>