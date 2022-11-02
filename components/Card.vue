<template>
  <article class="bg-black border border-white/20 rounded-lg hover:bg-black/90 p-4 cursor-pointer h-full">
    <div class="mb-5">
      <img v-if="image" :src="image" :alt="name" class="h-[250px] w-full object-cover rounded" />
      <span v-else class="bg-white/10 h-[250px] w-full block rounded" />
    </div>

    <div class="grid grid-cols-3">
      <div class="col-span-2">
        <h4 class="text-white font-display font-medium">
          {{ name }}
        </h4>

        <h6 class="text-white/40 text-sm font-medium">
          Vehiculo en Stock
        </h6>

        <h5 class="text-white text-sm font-medium">
          Efectivo
          <span class="text-[#79e76c] ml-1">
              GTA$ {{ price }}
            </span>
        </h5>
      </div>

      <div class="flex flex-col justify-between">
        <div class="flex justify-end">
          <img src="~assets/images/icons/dollar.svg" alt="GTA$" class="h-6" />
          <img src="~assets/images/icons/rp-circle.svg" alt="Reputation" class="h-6 ml-1"/>
        </div>

        <div v-if="likes" class="fill-white text-white text-sm font-bold font-display tracking-wider flex items-center justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 640 512">
            <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"/>
          </svg>

          <span class="ml-1">
            {{likes}}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    price: {
      type: String,
      required: false
    },
    likes: {
      type: String,
      required: false
    }
  }
}
</script>
