<template>
  <nav class="fixed w-100 d-flex align-items-center justify-content-center">
    <div class="bg-purple-gradient text-darkwhite padding nav-rounded">
      <div class="d-flex justify-content-between align-items-center py-4">
        <!-- brand -->
        <div class="brand">
          ZHANSDU
        </div>
        <div class="d-flex cursor-pointer">
          <a
            href="#home"
          >Home</a>
          <a
            class="px-5"
            href="#about"
          >Reviews</a>
          <a
            href="#contact"
          >Contact me</a>
        </div>
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
.fixed{
  position:fixed;
  top:0;
  left:0;
}

.nav-rounded{
  width:50% !important;
  margin-top: 10px;
  border-radius:50px
}
</style>
