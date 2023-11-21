<template>
  <nav class="fixed w-100 d-flex align-items-center justify-content-center">
    <div
      class="bg-purple-gradient text-darkwhite padding w-100 transition"
      :class="{'nav-rounded':navRounded}"
    >
      <div
        class="d-flex justify-content-between align-items-center py-4"
        :class="{'py-2':navRounded}"
      >
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
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["navRounded"])
  }

};
</script>

<style scoped>
.bg-purple-gradient{
  background-color: transparent;
  border:1px solid transparent;
}
.fixed{
  position:fixed;
  top:0;
  left:0;
  z-index: 1000;
}

.nav-rounded{
  background:linear-gradient(var(--darkpurple),var(--purple));
  width:50% !important;
  margin-top: 10px;
  border-radius:50px;
  border-color: var(--white);
  box-shadow: 0 0 1px 1px var(--purple);
}
.transition{
  transition: .8s;
}
</style>
