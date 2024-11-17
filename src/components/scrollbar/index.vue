<template>
  <div class="scrollbar-wrapper px-2 cursor-pointer">
    <div class="scrollbar cursor-pointer">
      <div id="scrollbar" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .scrollbar-wrapper{
    position:fixed;
    bottom:80px;
    top:80px;
    right:40px;
  }
  .scrollbar{
    height: 100%;
    width:3px;
    background-color: var(--darkwhite);
    border:1px solid var(--purple);
  }

  #scrollbar{
    position:absolute;
    width:20px;
    height:20px;
    border:1px solid var(--darkwhite);
    border-radius: 50px;
    background-color: var(--darkpurple);
    top:var(--translateTop,0px);
    right:0px;
    transition: 0;
  }
  </style>
