<template>
  <nav class="fixed w-100 d-flex align-items-center justify-content-center">
    <div
      class="bg-purple-gradient text-white w-100 transition "
      :class="[{'blurred nav-rounded px-5':navRounded},{'padding' : !navRounded}]"
    >
      <div
        class="d-flex justify-content-between align-items-center "
        :class="[{'py-3':navRounded},{'py-4':!navRounded}]"
      >
        <!-- brand -->
        <div class="brand">
          ZHANSDU
        </div>
        <div class="d-flex cursor-pointer">
          <a
            class="lined"
            href="#home"
          >Home</a>
          <a
            class="lined px-5"

            href="#about"
          >Reviews</a>
          <a
            class="lined"

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
  /* background:linear-gradient(var(--darkpurple),var(--purple)); */
  width:70% !important;
  margin-top: 10px;
  border-radius:50px;
  border-color: var(--white);
  box-shadow: 0 0 1px 1px var(--purple);
}
.transition{
  transition: .8s;
}

.blurred{
  backdrop-filter: blur(8px);
  background-color: rgba(31,1,26,.6);
}
</style>
