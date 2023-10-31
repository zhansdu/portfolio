<template>
  <div
    ref="parent"
    class="chat_parent bg-white hoverable"
  >
    <div
      v-if="!chatShown"
      class="d-flex align-items-center cursor-pointer h-100"
      @click="showChat()"
    >
      <span class="d-flex text-black font-size-20 justify-content-center align-items-center flex-shrink-0 chat_icon">
        <component :is="ChatIcon" />
      </span>
      <span
        refs="ask"
        class="mr-3 text-no-wrap ml-3"
      >{{ $t('chat_with_me') }}</span>
    </div>
    <div
      class="h-100 d-flex flex-column w-0"
      :class="{'w-100':chatShown}"
    >
      <div class="d-flex justify-content-between p-4">
        <div class="font-weight-bold">
          {{ $t('chat_with_me') }}
        </div>
        <div
          class="cursor-pointer"
          @click="close()"
        >
          <Times />
        </div>
      </div>
      <div class="height-1 w-100 bg-lightgrey" />
      <div
        class="align-self-start mt-40 w-100 h-100"
        style="z-index: 1;"
      >
        zdes' content
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
// icons
import ChatIcon from "@/assets/icons/chat";
import Times from "@/assets/icons/x";

export default {
  components: {
    Times
  },
  data () {
    return {
      ChatIcon,
      chatShown: false
    };
  },
  methods: {
    showChat () {
      this.chatShown = true;
      this.$refs.parent.classList.remove("hoverable");
      this.$refs.parent.classList.add("chat");
    },
    close () {
      this.chatShown = false;
      this.$refs.parent.classList.remove("chat");
      setTimeout(() => {
        this.$refs.parent.classList.add("hoverable");
      }, 400);
    }
  }
};
</script>
<style scoped>
.chat_parent{
	position: fixed;
	bottom:3.125em;
	right:3.125em;
	z-index: 10;
	max-width: 3.75em;
	height:3.75em;
	overflow: hidden;
	border-radius: 3.125em;
	box-shadow: 0 0.25em 0.625em #434343;
	transition:400ms;
}
.hoverable{
	width:unset;
}
.hoverable:hover{
	max-width: 18em;
}
.hoverable:hover .chat_icon{
	transform:rotate(-360deg);
	color:white !important;
	background-color: #F3A367;
}
.chat_icon{
	width: 3.125em;
	height:3.125em;
	border-radius: 3.125em;
	transition:400ms;
	color: #F3A367;
}

.chat{
	height: 26em;
	width: 25em;
	background-color: white;
	border-radius: 0;
	border-top-right-radius: 1.875em;
	border-top-left-radius: 1.875em;
	box-shadow: 0 0.25em 1.875em #434343;
	max-width: 62.5em;
}
.w-0{
	width:0;
}
</style>
