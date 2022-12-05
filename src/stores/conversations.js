// FAIT PAR THOMAS PIERSON
import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useConversationStore = defineStore(
  'conversations',
  () => {
    const conversations = ref([])
    return { conversations }
  },
  {
    persist: true,
  }
)
