<template>
  <div class="bg-black font-body">
    <Navbar/>
    <Discord/>

    <div class="flex">
      <Navigation/>
      <main class="w-full">
        <Nuxt/>
        <Footer/>
      </main>
    </div>
  </div>
</template>

<style>
:root {
  --swiper-theme-color: #fff;
}
</style>
