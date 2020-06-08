function plugin(Vue, services) {
  // Only install the plugin once.
  if (plugin.installed) {
    return;
  }

  Object.defineProperty(Vue.prototype, "$services", {
    get() {
      return services;
    }
  });

  // Register a global VueJS mixin.
  Vue.mixin({
    // Hook into the first VueJS 2.0 life-cycle event.
    beforeCreate() {
      registerServices(this);
    }
  });
}

// Bind the services in the given components "services" option.
function registerServices(vm) {
  let services = vm.$options.services;
  // Create a default services instance if necessary.
  if (typeof services === "undefined") {
    services = {};
  }
  // Update the vm's "services" option for other life-cycle events.
  vm.$options.services = services;
}

export default plugin;
