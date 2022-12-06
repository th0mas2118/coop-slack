//<!-- FAIT PAR PIERSON THOMAS -->
import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import router from '../router/index.js'

export const useUserStore = defineStore(
  'user',
  () => {
    const isConnected = ref(false)
    const member = reactive({})

    function setConnected(log) {
      api
        .post('members/signin', {
          body: log,
        })
        .then((response) => {
          isConnected.value = true

          member.token = response.token
          member.fullname = response.member.fullname
          member.email = response.member.email
          member.id = response.member.id

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
          member.token = null
          member.fullname = null
          member.email = null
          router.push('/login')
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
