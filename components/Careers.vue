<template>
  <section class="relative bg-[url('assets/images/backgrounds/bg-repeat.png')]">
    <div class="flex overflow-auto md:grid md:grid-cols-4 md:overflow-hidden">
      <article v-for="(career, i) in careers" :key="i" class="min-w-full border-2 border-[#0e0e0e] hover:border-white hover:grayscale-0 filter md:grayscale transition duration-300 ease-out md:mx-2 rounded">
        <div class="relative bg-cover bg-top cursor-pointer h-[calc(100vh-250px)]" :style="`background-image: url('${career.image}')`">
          <div class="absolute top-0 left-0 right-0 bottom-0 z-20 bg-gradient-to-t from-black/60 hover:from-black/5 transition duration-300 ease-out"></div>

          <div class="absolute bottom-0 left-0 right-0 z-30">
            <div class="p-6 text-white">
              <h4 class="text-display text-3xl font-extrabold mb-1">
                {{career.name}}
              </h4>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      careers: [
        {
          image: '/images/careers/1.png',
          name: 'CEO Executice',
          description: 'Dirige un imperio criminal gigantesco. Contrata a otros jugadores como escoltas y financia tu opulento estilo de vida comerciando con contrabando.'
        },
        {
          image: '/images/careers/2.png',
          name: 'The Lost MC',
          description: 'Unete un club de motociclistas y se parte de la sede del club, enfréntate a misiones de contrato, dirige negocios ilícitos y compite con clubs rivales para dominar las calles.'
        },
        {
          image: '/images/careers/3.png',
          name: 'Tráfico de armas',
          description: '.'
        },
        {
          image: '/images/careers/4.png',
          name: 'Club nocturno',
          description: 'Abre un club nocturno y conviértelo en el mejor lugar de fiesta de la ciudad.'
        }
      ]
    }
  }
}
</script>
