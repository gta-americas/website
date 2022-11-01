<template>
  <header class="relative py-8">
    <div class="container mx-auto px-6">

      <div class="grid grid-cols-1 md:grid-cols-[400px_auto] gap-12 items-center">
        <div class="text-center md:text-left">
          <div class="mb-8">
            <img src="~assets/images/logo.png" alt="Grand Theft Auto" class="mx-auto h-48 mb-2" />
          </div>

          <h3 class="text-white text-3xl md:text-4xl font-display mb-2">
            Grand Theft Auto: Americas
          </h3>

          <p class="text-white/80 text-base md:text-lg md:leading-[24px] mb-6">
            Bienvenido a GTA Americas, un mundo dinámico y en constante evolución para hasta 120 jugadores por ciudad, donde puedes pasar de ser una persona que hace respetar el orden o convertirse en el capo de su propio imperio criminal.
          </p>

          <Link to="/download">
            Empezar a jugar
          </Link>
        </div>

        <div class="relative">
          <video class="w-full rounded-lg" muted autoPlay loop playsInline>
            <source src="~assets/videos/lowriders.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

    </div>
  </header>
</template>
<script>
import Link from "@/components/ui/Link";
export default {
  components: {Link}
}
</script>
