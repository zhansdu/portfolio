<template>
  <div class="rate_wrapper">
    <div class="rate">
      <div class="d-flex align-items-center">
        <div class="d-flex align-items-center">
          <star />
        </div>
        Hi! rate me please
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
    </div>
  </div>
</template>

<script>
export default {

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
}
@keyframes showLess {
  100%{
    max-height: 10px;
  }
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
  bottom:0;
  right:0;
  height:50px;
  width:100px;
}
.showMoreHide{
  position:absolute;
  bottom:0;
  right:0;
  height:48px;
  width:120px;
  border-top-right-radius: 50px;
  background-color:var(--white);
}

</style>
