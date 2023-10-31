<template>
  <div>
    <section id="home">
      <tsparticles />
    </section>
    <div class="padding bg-purple text-darkwhite">
      some content
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

import tsparticles from "./tsparticles.vue";

export default defineComponent({
  components: {
    tsparticles
  }
});
</script>
<style scoped type="scss">
</style>
