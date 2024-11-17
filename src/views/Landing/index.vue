<template>
  <div class="scrollable-content">
    <div
      class="flex-fill"
    >
      <section id="home">
        <home />
      </section>
      <section
        id="about"
      >
        <About />
      </section>
      <section
        id="projects"
        class="scroll-right bg-purple text-white"
      >
        <div class="scroll-right-content padding d-flex align-items-center flex-wrap bg-white min-vh-100 text-black">
          <div class="font-size-maximum">
            WHAT DA HAIL IS GOING OOOON ?
          </div>
        </div>
      </section>
      <section
        id="aboutMe"
        class="bg-purple text-white padding"
      >
        <div>Some content about me</div>
      </section>
    </div>
    <scrollbar />
  </div>
</template>
<script>
import Home from "./components/Home";
import About from "./components/About";
import scrollbar from "@/components/scrollbar";
export default {
  components: {
    Home,
    About,
    scrollbar
  }
};
</script>
<style scoped type="scss">
.scroll-right{
  width:500vw;
  height:500vw;
}
.scroll-right-content{
  display: flex;
  position: sticky;
  top: 0;
}
.font-size-maximum{
  font-size:10em
}
</style>
