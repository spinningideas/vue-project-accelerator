export const APPBASEPATH = "vue-project-accelerator";

const NavigationService = () => {
  const reloadWindow = () => {
    window.location = window.location.origin
      ? window.location.origin + "/" + APPBASEPATH
      : window.location.protocol +
        "/" +
        window.location.host +
        "/" +
        APPBASEPATH;
  };

  return {
    reloadWindow
  };
};

export default NavigationService;
