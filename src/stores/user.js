//<!-- FAIT PAR PIERSON THOMAS -->
import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import router from '../router/index.js'

export const useUserStore = defineStore(
  'user',
  () => {
    const isConnected = ref(false)
    let member = reactive()

    function setConnected(log) {
      api
        .post('members/signin', {
          body: log,
        })
        .then((response) => {
          isConnected.value = true
          member = {
            token: response.token,
            fullname: response.member.fullname,
            email: response.member.email,
          }
          router.push('home')
        })
    }
    function disconnect() {
      api
        .delete('members/signout', {
          body: {
            token: member.token,
          },
        })
        .then((response) => {
          isConnected.value = false
          member = null
        })
        .catch((e) => {
          console.log(e)
        })
    }
    return { isConnected, setConnected, disconnect, member }
  },
  {
    persist: true,
  }
)
