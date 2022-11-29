import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
    'user',
    () => {
        const isConnected = ref(false)

        function setConnected(email, password) {
            api.post('signin', email, password).then((response) => {
                isConnected.value = true
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