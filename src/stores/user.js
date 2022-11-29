import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const isConnected = ref(false);
  const user = ref(null);

  function setConnected() {
    isConnected.value = true;
  }

  function disconnect() {
    isConnected.value = false;
  }

  function setUser(_user) {
    user.value = _user;
  }
  return { isConnected, setConnected, disconnect, setUser }
}, {
  persist: true,
})
