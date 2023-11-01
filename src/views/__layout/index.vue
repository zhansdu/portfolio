<template>
  <div class="d-flex flex-column min-h-100">
    <!-- navbar -->
    <navbar-view />
    <!-- /navbar -->

    <!-- main content -->
    <router-view />
    <!-- /main content -->

    <!-- footer -->
    <footer-view />
  <!-- /footer -->
  </div>

  <!-- <chat /> -->

  <div id="scrollbar" />
  <rate />
</template>
<script>
import NavbarView from "@/views/__layout/navbar";
import FooterView from "@/views/__layout/footer";
// import Chat from "@/views/__layout/chat";
import rate from "@/views/__layout/rate";
export default {
  components: {
    "navbar-view": NavbarView,
    "footer-view": FooterView,
    rate
    // Chat
  }
};
</script>
<style scoped>
#scrollbar{
  position:fixed;
  bottom:80px;
  top:80px;
  right:80px;
  width:3px;
  background-color: var(--darkwhite);
  border:1px solid var(--purple);
}
#scrollbar::after{
  content: '';
  width:20px;
  height:20px;
  border:1px solid var(--darkwhite);
  border-radius: 50px;
  background-color: var(--darkpurple);
  position:fixed;
  top:120px;
  right:71.5px;
}
</style>
