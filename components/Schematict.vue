<template>
  <div>
    <section class="relative bg-[url('assets/images/backgrounds/bg-repeat.png')] pt-12 pb-6 md:pt-40 md:pb-20">
      <div class="container mx-auto px-6">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center">
          <div class="order-2 md:order-1">
            <h3 class="text-white font-display text-2xl md:text-4xl uppercase mb-2 md:mb-4">
              Bienvenido a Los Santos
            </h3>

            <p class="text-white/80 text-lg md:text-xl font-normal md:font-medium mb-4 md:mb-6">
              Unas de las ciudades mas famosas que definieron un género de la saga original de Grand Theft Auto. Actualizados para la nueva generación con mejoras a todos los niveles, y muchas cosas más que harán que estos mundos tan queridos cobren vida con niveles de detalle inéditos.
            </p>

            <v-button to="/features/world" size="sm">
              Más información
            </v-button>
          </div>

          <div class="order-1 md:order-2">
            <img src="~assets/images/remastered.jpg" class="rounded-lg shadow-lg"  alt="Los Santos Vinewood"/>
          </div>
        </div>

      </div>
    </section>

    <section class="relative bg-[url('assets/images/backgrounds/bg-repeat.png')] pt-6 pb-6 md:py-20">
      <div class="container mx-auto px-6">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center">
          <div>
            <img src="~assets/images/vehicles.jpg" class="rounded-lg shadow-lg" alt="Vehicles" />
          </div>

          <div>
            <h3 class="text-white font-display text-2xl md:text-4xl uppercase mb-2 md:mb-4">
              VanillaWorks
            </h3>

            <p class="text-white/80 text-lg md:text-xl font-normal md:font-medium mb-4 md:mb-6">
              <a href="https://vanillaworks.weebly.com/" target="_blank" class="text-white underline">VanillaWorks</a> es una comunidad de artistas, add-on converters y modelers, que crean autos <span class="text-white">lore-friendly</span> y liveries para la comunidad. Con VanillaWorks contamos una gran variedad de nuevos vehículos, mejoras y modificaciones exclusivas.
            </p>

            <v-button to="/features/vehicles" size="sm">
              Ver colección
            </v-button>
          </div>
        </div>
      </div>
    </section>

    <section class="relative bg-[url('assets/images/backgrounds/bg-repeat.png')] pt-6 pb-6 md:py-20">
      <div class="container mx-auto px-6">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center">
          <div class="order-2 md:order-1">
            <h3 class="text-white font-display text-2xl md:text-4xl uppercase mb-2 md:mb-4">
              Audio Nativo 3D
            </h3>

            <p class="text-white/80 text-lg md:text-xl font-normal md:font-medium">
              Escucha los sonidos del mundo con una precisión milimétrica y nativa, desde la aceleración de nuevos sonidos de autos deportivos hasta la comunicación por radio entre tus colegas de trabajo y mucho más.
            </p>
          </div>

          <div class="order-1 md:order-2">
            <img src="~assets/images/audio.jpg" class="rounded-lg shadow-lg" alt="Nightclub" />
          </div>
        </div>
      </div>
    </section>

    <section class="relative bg-[url('assets/images/backgrounds/bg-repeat.png')] pt-6 pb-12 md:pt-20 md:pb-20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center">
          <div>
            <img src="~assets/images/internet.jpg" class="rounded-lg shadow-lg" alt="Eyefind Phone" />
          </div>

          <div>
            <h3 class="text-white font-display text-2xl md:text-4xl uppercase mb-2 md:mb-4">
              Eyefind.info
            </h3>

            <p class="text-white/80 text-lg md:text-xl font-normal md:font-medium mb-4 md:mb-6">
              Puedes acceder a <a href="https://gta-americas.com/eyefind" class="text-white underline">Eyefind.info</a> desde cualquier computadora de Los Santos o desde tu celular personal. En esta página encontraras muchas secciones como sitios para noticias, servicios, compras, financias, como también ver tu correo personal y más.
            </p>

            <v-button to="/eyefind" size="sm">
              Visitar Eyefind.info
            </v-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
