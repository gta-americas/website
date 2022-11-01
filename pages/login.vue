<template>
  <section class="relative h-[calc(100vh-62px)]">
    <div class="grid grid-cols-1 md:grid-cols-[600px_auto] h-full">
      <div class="relative h-full">
        <img src="~assets/images/backgrounds/3360902d782314fee48567a8a70bb9996e569698.jpg" alt="" class="h-full object-cover" />
        <div class="absolute top-0 right-0 bottom-0 left-0"></div>
      </div>

      <div class="bg-black h-full flex items-center py-12 md:py-6 px-6 md:px-24">
        <form @submit.prevent="" class="max-w-lg">
          <div class="mb-8">
            <h1 class="text-white font-display font-bold text-4xl md:text-6xl mb-2 md:mb-4">
              Inicia sesión
            </h1>

            <h2 class="text-white/70 font-medium text-lg">
              Para crear una cuenta necesitas entrar a GTA Americas y crear tu personaje para vincularlo con tu email.
            </h2>
          </div>

          <div class="mb-4">
            <label class="text-white text-lg font-medium block mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Tu email"
              class="disabled:opacity-50 text-white placeholder-white/50 bg-white/10 border-1 border-white/5 outline-none rounded focus:bg-white/20 transition duration-300 ease-out px-4 inline w-full py-3"
              disabled={loading}
              required
            />
          </div>

          <div class="mb-8">
            <label class="text-white text-lg font-medium block mb-1">
              Contraseña
            </label>

            <input
              type="password"
              placeholder="Tu contraseña"
              class="disabled:opacity-50 text-white placeholder-white/50 bg-white/10 border-1 border-white/5 outline-none rounded focus:bg-white/20 transition duration-300 ease-out px-4 inline w-full py-3"
              disabled={loading}
              required
            />
          </div>

          <div class="flex justify-end">
            <v-button type="submit" classs="py-3 uppercase w-full">
              <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="#000" stroke-width="4"></circle>
                <path class="opacity-75" fill="#000" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span v-else>Iniciar sesión</span>
            </v-button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  }
}
</script>
