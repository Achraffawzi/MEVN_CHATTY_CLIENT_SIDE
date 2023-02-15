<template>
  <div class="avatar">
    <img :src="src" :alt="alt">
  </div>
</template>

<script>
  export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "Avatar",
    },
    size: {
      type: String,
      default: "40px" // small = 40 | medium = 50 | large = 55
    }
  }
  }
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  overflow: hidden;
  width: v-bind(size);
  height: v-bind(size);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}
</style>
