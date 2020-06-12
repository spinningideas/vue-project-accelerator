<script>
export default {
  name: "notification",
  props: ["data"],
  mounted() {},
  created() {
    if (typeof this.data.timeout !== "undefined" && this.data.timeout !== 0) {
      this.setTimeout();
    }
  },
  methods: {
    onMouseOver() {
      if (typeof this.data.onMouseOver !== "undefined") {
        this.data.onMouseOver();
      }
      if (!this.data.closeOnHover) {
        clearInterval(this.data.intervalId);
      }
    },
    onMouseOut() {
      if (typeof this.data.onMouseOut !== "undefined") {
        this.data.onMouseOut();
      }
      if (!this.data.closeOnHover) {
        this.setTimeout();
      }
    },
    setTimeout() {
      this.data.intervalId = setTimeout(
        function() {
          this.close();
        }.bind(this),
        this.data.timeout
      );
    },
    clicked() {
      if (typeof this.data.onClicked !== "undefined") {
        this.data.onClicked();
      }
      this.closeClick();
    },
    closeClick() {
      if (
        typeof this.data.clickClose !== "undefined" &&
        this.data.clickClose === false
      ) {
        return;
      }
      this.close();
    },
    close() {
      if (this.$parent != null) {
        this.$parent.close(this.data);
      }
    }
  }
};
</script>
<template>
  <div
    v-bind:class="'notification notification-' + data.type"
    style="display: block;"
    @click="clicked()"
    v-on:mouseover="onMouseOver"
    v-on:mouseout="onMouseOut"
  >
    <div class="notification-message" v-html="data.msg"></div>
  </div>
</template>
