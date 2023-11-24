import { defineStore } from 'pinia'
import { useNotification } from '@kyvg/vue3-notification'

export const useNotificationsStore = defineStore('notificationsStore', () => {
  const { notify } = useNotification()

  const success = (message: string, title?: string) => {
    notify({
      type: 'success',
      title: title,
      text: message
    })
  }

  const error = (message: string, title?: string) => {
    notify({
      type: 'error',
      title: title,
      text: message
    })
  }

  const info = (message: string, title?: string) => {
    notify({
      type: 'warn',
      title: title,
      text: message
    })
  }

  return {
    success,
    error,
    info
  }
})
