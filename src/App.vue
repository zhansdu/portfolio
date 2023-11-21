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
      const scrollScroller = (x, scrollerParent) => {
        const scrollbarWrapper = document.getElementsByClassName("scrollbar-wrapper")[0];
        const scroller = document.getElementById("scrollbar");
        const scrollParent = document.getElementsByClassName("scrollable-content")[0];
        let ammount = scrollParent.scrollTop / scrollParent.scrollTopMax * 100 + "%";
        if (x) {
          const offsetScroll = x.clientY - scrollbarWrapper.offsetTop - scroller.clientHeight / 2;
          const maxScroll = (scrollbarWrapper.clientHeight);
          ammount = offsetScroll < 0 ? 0 : offsetScroll > maxScroll ? maxScroll : offsetScroll;
          scrollParent.scrollTo(0, ammount / maxScroll * scrollParent.scrollTopMax);
          ammount += "px";
        }
        scroller.style.setProperty("--translateTop", ammount);
      };
      // const mouseDown = false;
      // async function moveScrollbar (scroller) {
      //   while (mouseDown) {
      //     scroller.style.setProperty("--translateTop", e.clientYs * 100 + "%");
      //   }
      // }
      window.addEventListener("load", () => {
        scrollRight();

        document.getElementsByClassName("scrollable-content")[0].addEventListener("scroll", e => {
          if (window.scrollY > 200 || document.getElementsByClassName("scrollable-content")[0].scrollTop > 200) {
            this.$store.dispatch("setNavRounded");
          } else {
            this.$store.dispatch("setNavFlat");
          }

          scrollRight(e);
          scrollScroller();
        });
        const scroller = document.getElementsByClassName("scrollbar-wrapper")[0];
        scroller.addEventListener("mousedown", (e) => {
          scrollScroller(e);
          window.addEventListener("mousemove", scrollScroller);
        });
        window.addEventListener("mouseup", (e) => {
          window.removeEventListener("mousemove", scrollScroller);
        });

        // scroller.addEventListener("mouseout ", (e) => {
        //   scroller.removeEventListener("mousemove", scrollScroller);
        // });
      });
    }
  }
});
</script>
