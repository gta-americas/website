<template>
  <nav class="sticky top-0 z-40 bg-black bg-opacity-80 border-b border-white/[.2] backdrop-saturate-100 backdrop-blur-md">
    <div class="flex justify-between">

      <div class="md:hidden">
        <button type="button" class="h-full px-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fill-white h-6">
            <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
          </svg>
        </button>
      </div>

      <div class="py-2 md:py-3 pl-3 md:pl-4">
        <NuxtLink to="/" title="GTA Americas">
          <Logo height="h-8 md:h-10" type="large" />
        </NuxtLink>
      </div>

      <div class="md:flex items-center">
        <div class="hidden md:flex">
          <NuxtLink to="/eyefind" class="filter grayscale hover:grayscale-0 px-8 transition duration-150 ease-in-out">
            <img src="https://eyefind.gta-americas.com/eyefind.png" class="h-10" />
          </NuxtLink>
        </div>

        <div class="hidden md:flex items-center px-5 h-full border-l border-white/[.2]">
          <Button to="/login" size="sm" class="uppercase">
            Iniciar sesión
          </Button>
        </div>

        <div v-if="false">
          <div class="hidden md:flex flex-col justify-center px-4 h-full border-l border-white/[.2]">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV6Ym33L1c--RTvGUtmRPrKczCp2jkRgzyBA&usqp=CAU"
                alt="Avatar"
                class="h-12 rounded-full border-2 border-[#2d6eb9]"
              />
            </div>
          </div>

          <div class="hidden md:flex flex-col justify-center px-5 h-full border-l border-white/[.2]">
            <h6 class="text-sm text-white/40 font-medium uppercase">
              Maze Bank Balance
            </h6>

            <ul class="flex justify-between gap-x-8 list-none m-0 p-0">
              <li class="flex items-center">
                <img src="~assets/images/icons/dollar.svg" alt="GTA$" class="h-5 mr-1" />

                <span class="text-white font-medium">
                  100,000.00
                </span>
              </li>

              <li class="flex items-center">
                <img src="~assets/images/icons/rp-circle.svg" alt="Reputation Level" class="h-5 mr-1" />

                <span class="text-white font-medium">
                  500 XP
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex items-center px-4 md:px-5 h-full border-l border-white/[.2]">
          <NuxtLink to="/cart" title="Mi Carrito">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="fill-white h-5">
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
