<template lang="">
    <div>
        <h3>New conversation</h3>
        <form onsubmit="return false" @submit="createConversation">
            <input type="text" placeholder="Subject" v-model="conversation.subject" />
            <input type="text" placeholder="Tags" v-model="conversation.tags" />
            <button @click="create">Validate</button>
            <button @click="abort">Abort</button>
        </form>
    </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
const user = useUserStore();

let conversation = reactive({
    subject: "",
    tags: "",
})
function create() {
    alert('ok')
    console.log(conversation)
    api.post('channels', {
        body: {
            label: conversation.subject,
            topic: conversation.tags,
            token: user.member.token,
        }
    }).then(response => {
        console.log(response)
    })
}
</script>