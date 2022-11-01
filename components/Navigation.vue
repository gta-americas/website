<template>
  <nav class="fixed md:sticky top-[65px] left-0 bottom-0 z-40 h-[calc(100vh-64px)] px-1 border-r border-white/[.2] -translate-x-full md:translate-x-0">
    <ul class="grid grid-cols-1 gap-1 list-none py-2">
      <li v-for="(link, i) in links" :key="i">
        <NuxtLink
          :to="link.href"
          class="flex flex-col items-center justify-center m-1 p-2 text-white fill-white text-sm font-bold uppercase rounded-lg opacity-40 transition duration-150"
          exact-active-class="bg-white/[.2] opacity-100"
        >
          <div v-html="require(`../assets/images/icons/${link.icon}.svg?raw`)" class="h-7 mb-2" />
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          icon: 'world',
          href: '/',
          label: 'Inicio',
        },
        {
          icon: 'map',
          href: 'map',
          label: 'Mapa',
        },
        {
          icon: 'market',
          href: 'market',
          label: 'Market',
        },
      ]
    }
  }
}
</script>
