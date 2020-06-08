const notificationsService = {
  success: function(component, message) {
    var ref = this.getRef(component);
    ref.success(message);
  },
  error: function(component, message) {
    var ref = this.getRef(component);
    ref.error(message);
  },
  info: function(component, message) {
    var ref = this.getRef(component);
    ref.info(message);
  },
  getRef: function(component) {
    if (component.$parent.$refs.notificationsRef) {
      return component.$parent.$refs.notificationsRef;
    } else if (component.$parent.$parent.$refs.notificationsRef) {
      return component.$parent.$parent.$refs.notificationsRef;
    } else if (component.$parent.$parent.$parent.$refs.notificationsRef) {
      return component.$parent.$parent.$parent.$refs.notificationsRef;
    } else {
      return null;
    }
  }
};

export default notificationsService;
