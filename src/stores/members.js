// FAIT PAR ANTHONY DRAGUN
import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useMembersStore = defineStore(
    'members',
    () => {
        const members = ref([]);
        return { members }
    },
    {
        persist: true,
    }
)
