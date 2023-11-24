export const APPBASEPATH = 'vue-project-accelerator'

const navigationService = () => {
  const reloadWindow = () => {
    const newUrl = window.location.origin
      ? window.location.origin + '/' + APPBASEPATH
      : window.location.protocol + '/' + window.location.host + '/' + APPBASEPATH
    window.location.replace(newUrl)
  }

  return {
    reloadWindow
  }
}

export default navigationService
