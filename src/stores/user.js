import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    const isConnected = ref(false)

    function setConnected(log) {
      api
        .post('signin', {
          body: log,
        })
        .then((response) => {
          isConnected.value = true
          console.log(response)
        })
    }
    function disconnect() {
      api.delete('signout', token).then((response) => {
        isConnected.value = false
      })
    }
    return { isConnected, setConnected, disconnect }
  },
  {
    persist: true,
  }
)
