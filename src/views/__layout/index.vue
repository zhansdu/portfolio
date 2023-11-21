<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- navbar -->
    <navbar-view />
    <!-- /navbar -->

    <!-- main content -->
    <router-view />
    <!-- /main content -->

    <!-- footer -->
    <footer-view class="mt-auto" />
  <!-- /footer -->
  </div>

  <!-- <chat /> -->

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
</style>
