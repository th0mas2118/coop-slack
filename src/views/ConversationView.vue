
<template lang="">
    <template v-for="message in messages">
        <Message :message="message"></Message>
    </template>
    <form onsubmit="return false" @submit="createMessage">
        <input placeholder="message" v-model="message"/>
        <button>Create message</button>
    </form>
</template>
<script setup>
import Message from '@/components/Message.vue'
import router from '@/router'
import { useMembersStore } from "@/stores/members";
import { useConversationStore } from '@/stores/conversations'
import { useUserStore } from "@/stores/user";

let message = ref('')
const user = useUserStore();
const members = useMembersStore()
const conversations = useConversationStore()
const id = router.currentRoute.value.params.id;
console.log(id)
let messages = ref([])
onMounted(async () => {
    api.get(`channels/${id}/posts?token=${user.member.token}`).then(response => {
        messages.value = response
    })
})

function createMessage() {
    api.post(`channels/${id}/posts?token=${user.member.token}`, {
        body: {
            member_id: user.member.id,
            message: message.value,
        }
    }).then(response => {
        console.log(response)
        router.go()
    })
}
</script>

<style lang="" scoped>
    
</style>