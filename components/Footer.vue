<template>
  <footer class="relative py-12 border-y border-white/[0.2]">
    <div class="container mx-auto max-w-2xl px-6">

      <div class="flex items-center justify-center mb-5">
        <Logo height="h-20" />
      </div>

      <h4 class="text-display text-white text-xl font-bold text-center mb-4">
        Grand Theft Auto: Americas
      </h4>

      <ul class="flex justify-between gap-1 max-w-sm mb-3 mx-auto">
        <li v-for="(link, i) in links" class="text-center" :key="i">
          <NuxtLink :to="link.href" class="text-white/50 hover:text-white text-sm font-semibold uppercase transition duration-200 ease-linear">
            {{link.label}}
          </NuxtLink>
        </li>
      </ul>

      <p class="text-white/50 text-sm md:text-base text-center">
        Grand Theft Auto | Rockstar Games y R* son marcas y logotipos de Take-Two Interactive. Todos los derechos reservados. Todas las marcas comerciales mencionadas aquí pertenecen a sus respectivos titulares.
      </p>

    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          label: "Inicio",
          href: "/"
        },
        {
          label: "Mapa",
          href: "/map"
        },
        {
          label: "Mercado",
          href: "/market"
        },
        {
          label: "Descargar",
          href: "/download"
        },
        {
          label: "Aviso legal",
          href: "/legal"
        }
      ]
    }
  }
}
</script>
