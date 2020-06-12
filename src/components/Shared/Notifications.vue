<script>
import Notification from "@/components/Shared/Notification";

export default {
  name: "notifications",
  components: {
    Notification
  },
  data() {
    var positions = [
      "notification-top-right",
      "notification-bottom-right",
      "notification-bottom-left",
      "notification-top-left",
      "notification-top-full-width",
      "notification-bottom-full-width",
      "notification-top-center",
      "notification-bottom-center"
    ];
    var notificationList = {};
    for (var i = 0; i <= positions.length - 1; i++) {
      notificationList[positions[i]] = [];
    }
    return {
      positions,
      defaultPosition: "notification-top-right",
      defaultType: "success",
      defaultCloseOnHover: true,
      defaultTimeout: 5000,
      notificationList
    };
  },
  created() {},
  mounted() {},
  methods: {
    addNotification(data) {
      this.notificationList[data.position].push(data);
      if (typeof data.onCreated !== "undefined") {
        this.$nextTick(() => {
          data.onCreated();
        });
      }
    },
    removeNotification(data) {
      if (typeof data.onClosed !== "undefined") {
        data.onClosed();
      }
      this.notificationList[data.position].splice(
        this.notificationList[data.position].indexOf(data),
        1
      );
    },
    addNotificationNOTUSED(d) {
      return this.addData(this.processObjectData(d));
    },
    addData(data) {
      if (typeof data !== "object") {
        return false;
      }
      this.addNotification(data);
      return data;
    },
    processObjectData(data) {
      if (typeof data === "object" && typeof data.msg !== "undefined") {
        if (typeof data.position === "undefined") {
          data.position = this.defaultPosition;
        }
        if (typeof data.type === "undefined") {
          data.type = this.defaultType;
        }
        if (typeof data.timeout === "undefined") {
          data.timeout = this.defaultTimeout;
        }
        if (typeof data.closeOnHover === "undefined") {
          data.closeOnHover = this.defaultCloseOnHover;
        }
        if (typeof data.id === "undefined") {
          data.id = this.generateId;
        }
        return data;
      }

      return {
        msg: data.toString(),
        position: this.defaultPosition,
        type: this.defaultType,
        timeout: this.defaultTimeout,
        closeOnHover: this.defaultCloseOnHover
      };
    },
    error(message) {
      var data = this.processObjectData(message);
      data["type"] = "error";
      return this.addData(data);
    },
    success(message) {
      var data = this.processObjectData(message);
      data["type"] = "success";
      return this.addData(data);
    },
    warning(message) {
      var data = this.processObjectData(message);
      data["type"] = "warning";
      return this.addData(data);
    },
    info(message) {
      var data = this.processObjectData(message);
      data["type"] = "info";
      return this.addData(data);
    },
    close(data) {
      this.removeNotification(data);
    },
    generateId: function() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return (
        s4() +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        s4() +
        s4()
      );
    }
  }
};
</script>

<template>
  <div>
    <div
      v-bind:class="'notification-container ' + k"
      v-for="(ntf, k) in notificationList"
      :key="ntf.id"
    >
      <notification
        :data="ntfItem"
        v-for="ntfItem in ntf"
        v-bind:key="ntfItem.id"
      >
      </notification>
    </div>
  </div>
</template>
