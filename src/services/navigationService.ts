const navigationService = () => {
  const reloadWindow = () => {
    window.location.reload()
  }
  return {
    reloadWindow
  }
}

export default navigationService
