<!-- FAIT PAR PIERSON THOMAS -->
<template lang="">
    <header>
        <h2>{{conversation.label}}</h2>
        <i>{{conversation.topic}}</i>
    </header>
    <ModifyConversation @show="setShowConv" :conversation="conversation" v-if="showModifyConversation"></ModifyConversation>
    <button @click="setShowConv(true)">Modify</button>
    <button id="delete" @click="deleteConversation">Delete Conversation</button>
    <template v-for="message in messages">
        <Message :message="message"></Message>
    </template>
    <form id="createMessage" onsubmit="return false" @submit="createMessage">
        <input placeholder="message" v-model="message"/>
        <button>Create message</button>
    </form>
</template>
<script setup>
import ModifyConversation from '@/components/ModifyConversation.vue'
import Message from '@/components/Message.vue'
import router from '@/router'
import { useMembersStore } from "@/stores/members";
import { useConversationStore } from '@/stores/conversations'
import { useUserStore } from "@/stores/user";

const showModifyConversation = ref(false)
function setShowConv(e) {
    //console.log(e)
    showModifyConversation.value = e;
}


const showModifyForm = ref(false);
function setShow(e) {
    showModifyForm.value = e;
}

let message = ref('')
const user = useUserStore();
const members = useMembersStore()
const conversations = useConversationStore()
const id = router.currentRoute.value.params.id;
const conversation = conversations.conversations.find((x) => {
    return x.id === id
})
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
        router.go()
    })
}
function deleteConversation() {
    api.delete(`channels/${id}?token=${user.member.token}`)
    router.push('/conversations')
}
</script>

<style lang="scss" scoped>
#delete {
    margin: 1rem;
}

#createMessage {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 100%;
    width: 100%;
    margin: 0;

    & input {
        max-width: 100%;
        flex-grow: 1;
    }

}
</style>