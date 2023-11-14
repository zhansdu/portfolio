<template>
  <div
    class="rate_wrapper"
    :class="[{shown:shown},{shown_max:shown_max}]"
  >
    <div class="rate">
      <div class="d-flex align-items-center ">
        <div class="d-flex align-items-center">
          <star />
          <star />
          <star />
          <star />
          <star />
          <star />
          <star />
          <star />
          <star />
          <star />
          <div>
            Hi! rate me please
          </div>
        </div>
      </div>
      <br>
      <div>
        Also you can leave a comment
        <textarea
          id=""
          name=""
          cols="30"
          rows="10"
        />
      </div>
      <div class="showMore">
        <div
          class="shapes-wrapper cursor-pointer"
          @click="showMore"
        >
          <div class="triangle" />
        </div>
      </div>
      <div
        class="showMore-wrapper d-flex align-items-center justify-content-center cursor-pointer"
        @click="showMore"
      >
        <div class="triangle" />
      </div>
    </div>
  </div>
</template>

<script>
import star from "@/assets/icons/star.vue";
export default {
  components: {
    star
  },
  data () {
    return {
      shown: false,
      shown_max: false
    };
  },
  methods: {
    showMore () {
      this.shown = !this.shown;
      console.log(this.shown);
    }
  }
};
</script>

<style lang="scss" scoped>
.rate_wrapper{
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  max-height:50px;
  animation:showLess;
  animation-duration: 500ms;
  animation-delay: 3000ms;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}
@keyframes showLess {
  100%{
    max-height: 10px;
  }
}
.shown{
  max-height: 50px !important;
}
.showm_max{
  max-height: 500px !important;
}
.rate{
  width:50%;
  padding:15px 50px;
  border-bottom:none;
  position:relative;
}
.rate,.showMore{
  background-color:var(--white);
  border:1px solid var(--purple);
  box-shadow: 0 0 3px 5px var(--purple);
  border-radius:50px 50px 0 0;

}

.showMore{
  position:absolute;
  bottom:-3px;
  right:0;
  height:50px;
  width:100px;
}

.showMore-wrapper{
  width:120px;
  position: absolute;
  max-height: 50px;
  height:100%;
  top:0px;
  right:0;
  background-color: white;
  border-top-right-radius: 50px;
}

.triangle{
  width:20px;
  height:8px;
  background-color: green;
}

.triangle{
  -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.shapes-wrapper{
  margin-left: 40px;
  margin-top: 5px;
}
@keyframes jump {
  0%{

  }
}
</style>
