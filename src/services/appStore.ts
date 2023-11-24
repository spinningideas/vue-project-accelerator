import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
// localstorage based persistance
import sessionStorageService from '@/services/localStorageService'
// models
import type User from '@/models/User'

export const useAppStore = defineStore('appStore', () => {
  /** Stores value of whether user has signed in */
  const userSignedIn = ref<boolean>(false)
  /** Computed value of whether user has signed in via ref to userSignedIn */
  const userIsSignedIn = computed(() => userSignedIn)
  const messages = ref<string>('')

  let userSessionStorage = sessionStorageService()

  const setState = (key: string, value: any) => {
    if (key === 'userSignedIn') {
      userSignedIn.value = value.toString() === 'true'
      userSessionStorage.setBoolean('userSignedIn', value)
    }
  }

  // User Auth State

  const generateUserIdentifier = (email: string) => {
    let generatedId = 0
    let emailLen = email.length
    while (emailLen > 0) {
      generatedId = ((generatedId << 5) - generatedId + email.charCodeAt(--emailLen)) | 0
    }
    return Math.abs(generatedId)
  }

  const getUserIdentifier = () => {
    let cachedUser = getCachedUser()
    if (cachedUser && cachedUser.identifier) {
      return cachedUser.identifier
    }
    return null
  }

  /** Determines if user is NOT signed in via auth token and session storage value */
  const userHasNotSignedIn = () => {
    return userHasSignedIn() === false
  }

  /** Determines if user signed in via auth token and session storage value */
  const userHasSignedIn = () => {
    const userIdentifier = getUserIdentifier()
    if (userIdentifier !== null) {
      setState('userSignedIn', true)
      return true
    } else {
      return false
    }
  }

  const signIn = async () => {
    setState('userSignedIn', true)
    return Promise.resolve(true)   
  }

  const signOut = async () => {
    setState('messages', 'You have successfully signed out')
    setState('userSignedIn', false)
    userSessionStorage.remove('user')
    return Promise.resolve(true)
  }

  const getCachedUser = (): User | null => {
    const userCached = userSessionStorage.getValue<User>('user')
    if (userCached && userCached.userId) {
      setState('user', userCached)
      return userCached
    }
    return null
  }

  const setCachedUser = (cachedUser: any) => {
    userSessionStorage.setValue('user', cachedUser)
  }

  const setUser = (user: any) => {
    let userIdentifier = generateUserIdentifier(user.email)
    let cachedUser = {
      userId: user.uid,
      email: user.email,
      identifier: userIdentifier
    }
    setCachedUser(cachedUser)
    setState('user', cachedUser)
  }

  /** Returns current date as a string in Iso8601 format (YYYY-MM-DD) */
  const todaysDate = () => {
    return formatDateIso8601(new Date())
  }

    /** Returns full day of given "date" in Iso8601 format (YYYY-MM-DD)  */
    const formatDateIso8601 = (date: any): string | null => {
      if (!date) return null
      let dateValue = new Date(date)
      const dateFormatted =
        dateValue.getFullYear() + '-' + (dateValue.getMonth() + 1) + '-' + dateValue.getDate()
      return dateFormatted
    }
  

  return {
    userSignedIn,
    userIsSignedIn,
    userHasNotSignedIn,
    userHasSignedIn,
    signIn,
    signOut,
    todaysDate,
    formatDateIso8601
  }
})
