<template>
  <div>
    <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
      img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      
      <!-- SLIDE 1 -->
      <b-carousel-slide>
        <h1 class="col-6 text-center">Cuidando da sua saúde com excelência e dedicação</h1>
        <template #img>
          <img class="d-block w-100" height="650" src="../assets/fisio.jpg" alt="image slot">
        </template>
      </b-carousel-slide>

      <!-- Text slides with image -->
       <!-- SLIDE 2 -->
      <b-carousel-slide caption="Cuidando da sua saúde com excelência e dedicação" text="Aqui vai entrar um botão.">
        <template #img>
          <img class="d-block w-100" height="650" src="../assets/bebe.jpeg" alt="image slot">
        </template>
      </b-carousel-slide>

      <!-- SLIDE 3 -->
      <b-carousel-slide caption="Cuidando da sua saúde com excelência e dedicação" text="Aqui vai entrar um botão.">
        <template #img>
          <img class="d-block w-100" height="650" src="../assets/bebe2.jpeg" alt="image slot">
        </template>
      </b-carousel-slide>

      <!-- Slides with custom text -->
       <!-- SLIDE 4 -->
      <b-carousel-slide>
        <h1>Cuidando da sua saúde com excelência e dedicação</h1>
        <template #img>
          <img class="d-block w-100" height="650" src="../assets/esquerda.jpg" alt="image slot">
        </template>
      </b-carousel-slide>
    </b-carousel>

    <!-- <p class="mt-4">
        Slide #: {{ slide }}<br>
        Sliding: {{ sliding }}
      </p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>