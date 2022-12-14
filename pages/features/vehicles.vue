<template>
  <div>
    <header class="relative gradient-tuners py-6 md:py-12">
      <div class="container mx-auto px-4 md:px-6">

        <div class="bg-black shadow rounded-lg md:p-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 items-center md:mb-12">
            <div class="order-2 md:order-1 p-4 md:p-0">
              <div>
                <img :src="`/images/logos/${vehicles[vehicle].dealer}.png`" class="h-8 md:h-12 mb-4 md:mb-6" :alt="vehicles[vehicle].name" />
              </div>

              <h1 class="font-display text-white text-3xl md:text-5xl font-black mb-2 md:mb-4">
                {{vehicles[vehicle].name}}
              </h1>

              <p class="text-white/80 text-base md:text-xl font-medium">
                {{vehicles[vehicle].description}}
              </p>
            </div>

            <div class="order-1 md:order-2">
              <swiper
                :slides-per-view="1"
                :space-between="30"
                autoplay
                pagination
                @slideChange="onSlideChange"
              >
                <swiper-slide v-for="(vehicle, i) in vehicles" :key="i">
                  <img :src="vehicle.image" :alt="vehicle.name" class="h-[400px] object-cover w-full rounded-lg" />
                </swiper-slide>
              </swiper>
            </div>
          </div>

          <div class="hidden md:block">
            <ul class="flex items-center justify-between">
              <li v-for="(brand, i) in brands" :key="i">
                <img :src="brand.logo" class="h-16 filter grayscale hover:grayscale-0 transition duration-150 ease-out" :alt="brand.name" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <section class="relative bg-tuners py-12 md:py-24 bg-[url('assets/images/backgrounds/texture-vw.jpg')]">
      <div class="absolute top-0 left-0 right-0 bottom-0 z-10 bg-black/20"></div>

      <div class="relative container mx-auto z-20 px-6">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center ">
          <div>
            <h3 class="font-display text-white text-2xl md:text-4xl font-black uppercase mb-6">
              Personalizaci??n
            </h3>

            <p class="text-white/80 text-xl mb-6">
              La personalizaci??n de un veh??culo es mucho m??s que pintura y llantas nuevas. Adem??s de las modificaciones que ya puedes llevar a cabo en Los Santos Customs, hay diferentes propiedades y negocios que pueden darte acceso a mejoras y modificaciones destacables para algunos veh??culos.
            </p>

            <p class="text-white/80 text-xl mb-12">
              Naturalmente, esta actualizaci??n traer?? una nueva selecci??n de veh??culos a los concesionarios de todo Los Santos, desde coches tuneados de importaci??n de Annis, Dinka y ??bermacht, entre otros, hasta ese b??lido Vapid que tanto adoran en Estados Unidos. A lo largo del a??o se a??adir??n en total +17 coches nuevos.
            </p>

            <p class="text-white/60 text-lg">
              Adem??s, a finales de a??o, algunos veh??culos ser??n compatibles con las nuevas mejoras personalizadas. Estas mejoras especiales solo estar??n disponibles para un grupo selecto de vehiculos que competiran por titulo. Pr??ximamente ofreceremos m??s detalles.
            </p>
          </div>

          <div>
            <img src="~assets/images/lscustoms.jpg" alt="Los Santos Customs" class="rounded-lg shadow" />
          </div>
        </div>

      </div>
    </section>

    <Collection/>
    <VanillaWorks/>
  </div>
</template>

<script>
import { Navigation, Pagination } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      brands: [
        {
          name: 'Vapid',
          logo: '/images/logos/vapid.webp',
        },
        {
          name: '??bermacht',
          logo: '/images/logos/ubermacht.webp',
        },
        {
          name: 'Schyster',
          logo: '/images/logos/schyster.webp',
        },
        {
          name: 'Albany',
          logo: '/images/logos/albany.webp',
        },
        {
          name: 'Vulcar',
          logo: '/images/logos/vulcar.webp',
        },
        {
          name: 'Bravado',
          logo: '/images/logos/bravado.webp',
        },
        {
          name: 'Coil',
          logo: '/images/logos/coil.webp',
        }
      ],
      vehicle: 0,
      vehicles: [
        {
          dealer: 'legendary',
          name: 'Principe Deveste Eight',
          description: 'El veh??culo premium de esta semana es un nacarado Principe Deveste Eight con innumerables retoques bajo el cap?? y una capa de pintura camale??nica para ponerlo a punto.',
          image: "/images/features/vehicles/305112a229760884f079723cea7d96c43ad87895.jpg"
        },
        {
          dealer: 'legendary',
          name: 'Grotti Turismo Classic',
          description: 'Ven al pleno coraz??n del Car Meet de LS, para ver el veh??culo premium del mes: un Grotti Turismo Classic que no tiene reparos en utilizar potenciadores de rendimiento para obtener una ventaja competitiva.',
          image: '/images/features/vehicles/6fa83f54754009ac1c438672a013cd3bc432a790.jpg'
        },
        {
          dealer: 'legendary',
          name: 'Coil Cyclone II',
          description: 'Coil Cyclone II personalizado tuneado al m??ximo y envuelto en una cubierta colorida para que todo aquel que se cruce contigo en un sem??foro sepa que eres un piloto que sabe lo que hace y un conductor con ambiciones.',
          image: '/images/features/vehicles/c4ddf35d48875266c979b87bbb78c0fdd191774d.jpg',
        },
        {
          dealer: 'pdm',
          name: 'Karin S96',
          description: 'Pisa a fondo, corre contra el reloj y disfruta de la vista borrosa que ofrece tu parabrisas en la contrarreloj de HSW de esta semana entre East Vinewood y Vespucci Beach.',
          image: '/images/features/vehicles/f28fe3ccd7d5b2edf48efc83c5e0d77334c81d10.jpg'
        },
        {
          dealer: 'legendary',
          name: 'Zentorno',
          description: 'P??sate por Hao\'s Special Works, en pleno coraz??n del Car Meet de LS, para ver el veh??culo de prueba premium de la semana: un Grotti Turismo Classic que no tiene reparos en utilizar potenciadores de rendimiento para obtener una ventaja competitiva.',
          image: '/images/features/vehicles/f354e4eceb0664db9fe371ecf1b57b05b18f547b.jpg'
        }
      ]
    }
  },
  methods: {
    onSlideChange () {
      console.log('slide change')
    }
  }
}
</script>

<style>
.gradient-tuners {
  background: linear-gradient(180deg,#1cc6f2,#00d2ed,#00dddc,#00e5c1,#29eb9d,#79ee74,#b4ed4a,#ece819);
}
</style>
