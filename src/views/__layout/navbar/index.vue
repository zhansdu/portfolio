<template>
  <nav class="bg-purple-gradient text-darkwhite padding">
    <div class="d-flex justify-content-between align-items-center py-4">
      <!-- brand -->
      <div class="brand">
        ZHANSDU
      </div>
      <div class="d-flex cursor-pointer">
        <a
          class="py-4"
          href="#home"
        >Home</a>
        <a
          class="px-5 py-4"
          href="#about"
        >About</a>
        <a
          class="py-4"
          href="#contact"
        >Contact</a>
      </div>
    </div>
  </nav>
  <!-- <div
    id="contactMe"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="contactMe"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content w-unset">
        <contact-me-modal />
      </div>
    </div>
  </div> -->
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
});
</script>

<style scoped>
.bg-purple-gradient{
  background:linear-gradient(var(--darkpurple),var(--purple))
}
</style>
