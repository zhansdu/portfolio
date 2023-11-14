<template>
  <main-view />
</template>
<script>
import { defineComponent } from "vue";
import MainView from "@/views/__layout";

import { setLocale } from "./services/LocaleService";

export default defineComponent({
  components: {
    MainView
  },
  created () {
    this.setTheme();
    this.setScroll();
    setLocale();
  },
  methods: {
    setTheme () {
      const id = "theme";
      const theme = "default";
      // now, we set only default theme
      // later we can get theme from localStorage
      if (theme) {
        if (document.getElementById(id)) {
          document.getElementById(id).remove();
        }
        const head = document.getElementsByTagName("head")[0];
        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "/styles/themes/" + theme + ".css";
        link.media = "all";
        head.appendChild(link);
        localStorage.setItem("theme", theme);
      }
    },
    setScroll () {
      const scrollRight = () => {
        console.log("scroll right");
      };
      const scrollContent = () => {
        console.log("scroll content");
      };
      window.addEventListener("scroll", e => {
        if (window.scrollY > 200) {
          this.$store.dispatch("setNavRounded");
        } else {
          this.$store.dispatch("setNavFlat");
        }
        scrollRight(e);
        scrollContent(e);
      });
    }
  }
});
</script>
