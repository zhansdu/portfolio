<template>
  <div class="dropdown">
    <div
      :class="['dropdown-toggle d-flex align-items-center',title.class]"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      @click="titleOnClick(title)"
    >
      {{ $t(title.title) }}
    </div>
    <ul
      class="dropdown-menu"
      aria-labelledby="dropdownMenuButton1"
    >
      <li
        v-for="(link,index) in links.array"
        :key="index"
      >
        <div
          class="dropdown-item cursor-pointer"
          @click="handleClick(link,index)"
        >
          {{ $t(link.title) }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: Object,
    links: Object,
    linkOnClick: Function
  },
  methods: {
    titleOnClick (title) {
      if (title.function) {
        title.function(title);
      }
    },
    handleClick (link, index) {
      if (link.function) {
        link.function(link, index);
      } else if (this.linkOnClick) {
        this.linkOnClick(link, index);
      }
    }
  }
};
</script>
<style scoped>
/* .dropdown-toggle::after{
  margin-left: auto;
  color: black;
} */
</style>
