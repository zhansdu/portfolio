<template>
  <nav
    class="tabs default-tabs d-flex overflow-scroll"
    :class="wrapperClass"
  >
    <button
      v-for="tab in tabs"
      :ref="tab.value"
      :key="tab.title"
      class="default-tabs__item"
      type="button"
      :class="[
        { 'default-tabs__item_active' : tab.value === currentTab },
        tab.value === currentTab && tabActiveClass ? tabActiveClass: '',
        tabClass,
      ]"
      :disabled="tab.disabled || false"
      @click="handleClick(tab.value)"
      v-html="tab.title"
    />

    <div
      class="default-tabs__active-line"
      :class="lineClass"
      :style="{ width: `${activeLineWidth}px`, transform: `translateX(${activeLineOffset}px)` }"
    />
  </nav>
</template>

<script>
export default {
  name: "TabsVue",
  props: {
    currentTab: {
      type: String,
      required: true
    },
    tabs: {
      type: Array,
      required: true
    },
    updated: {
      type: [Boolean, String, Array],
      default: undefined
    },
    wrapperClass: {
      type: String,
      required: false
    },
    tabClass: {
      type: String,
      required: false
    },
    tabActiveClass: {
      type: String,
      required: false
    },
    lineClass: {
      type: String,
      required: false
    }
  },
  emits: ["onClick"],
  data: () => ({
    activeLineWidth: 0,
    activeLineOffset: 0,
    newTab: ""
  }),
  watch: {
    currentTab (newCurrentTab) {
      if (this.newTab === newCurrentTab) return;
      this.moveActiveLine(newCurrentTab);
      this.newTab = newCurrentTab;
    },
    updated () {
      this.moveActiveLine(this.currentTab);
    }
  },
  mounted () {
    this.moveActiveLine(this.currentTab);
    this.newTab = this.currentTab;
  },
  methods: {
    handleClick (value) {
      this.$emit("onClick", value);
      this.moveActiveLine(value);

      this.newTab = value;
    },
    moveActiveLine (newValue) {
      if (!this.currentTab) return;

      if (!this.$refs || !this.$refs[newValue] || !this.$refs[newValue][0]) return;
      const element = this.$refs[newValue][0];

      this.activeLineWidth = element.clientWidth;
      this.activeLineOffset = element.offsetLeft;
    }
  }
};
</script>
<style lang="scss">
.default-tabs {
  position: relative;
  margin: 0 auto;

  &__item {
    display: inline-block;
    margin: 0 5px;
    padding: 10px;
    padding-bottom: 8px;
    font-size: 16px;
    letter-spacing: 0.8px;
    color: gray;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;

    &_active {
      color: black;
    }

    &:hover {
      border-bottom: 2px solid gray;
      color: black;
    }

    &:focus {
      outline: none;
      border-bottom: 2px solid gray;
      color: black;
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: black;
    transition: transform 0.4s ease, width 0.4s ease;
  }
}

.content {
  margin-top: 30px;
  font-size: 20px;
}
</style>
