<template>
  
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <Carousel />

  </Layout>

</template>

<script>
import Carousel from '../components/Carousel.vue';
export default {
  metaInfo: {
    title: 'Consultório'
  },
  components: {
    Carousel,
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

h1 {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
