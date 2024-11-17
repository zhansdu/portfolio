// these functions are used inside of App.vue
export const scrollScroller = (x) => {
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
export const setupScroller = () => {
  const scroller = document.getElementsByClassName("scrollbar-wrapper")[0];
  scroller.addEventListener("mousedown", (e) => {
    scrollScroller(e);
    window.addEventListener("mousemove", scrollScroller);
  });
  window.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", scrollScroller);
  });
};

export default {
  setupScroller, scrollScroller
};
