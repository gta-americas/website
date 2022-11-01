<template>
  <div>
    <img
      alt="Grand Theft Auto"
      :class="height ? height : 'h-auto'"
      :src="type === 'square' ? require('assets/images/logo.svg') : require('assets/images/logo-horizontal.svg')"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'square'
    },
    height: {
      type: String,
      required: false
    }
  }
}
</script>
