export default {
  setNavRounded (context) {
    context.commit("setNavRounded", true);
  },
  setNavFlat (context) {
    context.commit("setNavRounded", false);
  }
};
