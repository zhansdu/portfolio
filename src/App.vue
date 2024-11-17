<template>
  <main-view />
</template>
<script>
import { defineComponent } from "vue";
import MainView from "@/views/__layout";

import { setLocale } from "./services/LocaleService";

import { scrollScroller, setupScroller } from "@/components/scrollbar/script";

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
        const scrollableToRight = document.getElementsByClassName("scroll-right");
        const scrollParent = document.getElementsByClassName("scrollable-content")[0];
        for (let i = 0; i < scrollableToRight.length; i++) {
          const item = scrollableToRight[i];
          const scroll = scrollParent.scrollTop - item.offsetTop;

          let scrollAmount = (item.clientWidth - window.innerWidth) / (item.clientHeight - window.innerHeight) * scroll;
          scrollAmount = scrollAmount < 0 ? 0 : scrollAmount > item.clientWidth - window.innerWidth ? item.clientWidth - window.innerWidth : scrollAmount;

          item.style.transform = "translate(" + -scrollAmount + "px,0)";
        }
      };
      const moveNavbar = () => {
        if (window.scrollY > 200 || document.getElementsByClassName("scrollable-content")[0].scrollTop > 200) {
          this.$store.dispatch("setNavRounded");
        } else {
          this.$store.dispatch("setNavFlat");
        }
      };
      window.addEventListener("load", () => {
        scrollRight();
        scrollScroller();
        moveNavbar();

        document.getElementsByClassName("scrollable-content")[0].addEventListener("scroll", e => {
          moveNavbar();
          scrollRight();
          scrollScroller();
        });

        setupScroller();
      });
    }
  }
});
</script>
