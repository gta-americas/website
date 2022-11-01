<template>
  <div v-if="!isOpen" @click="toggleModal" class="fixed bottom-5 right-5 z-40 bg-[#5865F2] rounded-full p-3 shadow-md hover:shadow-xl hover:brightness-110 hover:-translate-y-1 hover:scale-110 transform transition duration-300 ease-out cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 640 512" fill="#fff" class="hover:animate-pulse">
      <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
    </svg>
  </div>

  <div v-else class="fixed left-0 right-0 top-0 bottom-0 z-50 flex items-center justify-center">
    <div onClick={toggleModal} class="absolute top-0 left-0 right-0 bottom-0 bg-black/40 backdrop-blur h-full w-full"></div>

    <div class="relative bg-black max-w-md xl:max-w-6xl rounded-xl shadow-2xl border border-white/[0.1] mx-4 md:mx-0 md:h-auto">
      <div class="grid grid-cols-1 md:grid-cols-[440px_auto] h-full md:h-auto">
        <div class="flex flex-col justify-between md:justify-around px-4 py-6 md:p-6">
          <div class="text-center">
            <div class="flex items-center justify-center mb-4">
              <Logo height="h-20" />
            </div>
            <h4 class="text-white/80 font-medium">Te han invitado a unirte</h4>
            <h3 class="text-white font-extrabold text-2xl mb-4">GTA Americas</h3>

            <p class="text-white/80 mb-4">
              Nuestro discord oficial para anuncios y actualizaciones de GTA Americas, lanzamientos, screenshots, eventos, discusiones entre la comunidad y mucho más.
            </p>
          </div>

          <div>
            <Button href="https://discord.gg/qfTs5DWR9q" target="_blank" class="w-full mb-4">
              Aceptar Invitación
            </Button>

            <div class="text-center">
              <span @click="toggleModal" class="text-white text-sm font-medium border-b border-transparent hover:border-white transition duration-300 ease-out cursor-pointer">
                No, gracias
              </span>
            </div>
          </div>
        </div>

        <div class="hidden xl:block">
          <img src="~assets/images/discord.jpg" class="object-cover rounded-tr-xl rounded-br-xl h-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
