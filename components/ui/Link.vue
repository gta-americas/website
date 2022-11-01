<template>
  <component
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    @click="$emit('click')"
    class="px-6 py-3 border rounded font-body font-bold shadow-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 ease-in-out uppercase cursor-pointer"
    :class="[
      { 'text-black bg-white border-white shadow-lg hover:bg-white hover:shadow-white/40 focus:ring-white': primary },
      { 'text-white hover:text-black bg-transparent border-white hover:bg-white focus:ring-white': secondary },
      { 'bg-danger': error }
    ]"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    primary() {
      return this.color === 'primary'
    },
    secondary() {
      return this.color === 'secondary'
    },
    success() {
      return this.color === 'success'
    },
    error() {
      return this.color === 'error'
    }
  }
}
</script>
