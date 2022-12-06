<!-- FAIT PAR PIERSON THOMAS -->
<script setup>
import CreateConversation from '@/components/CreateConversation.vue'
import { useUserStore } from '@/stores/user'
import { useConversationStore } from '@/stores/conversations'
import { onMounted } from 'vue'
const user = useUserStore()
const conversations = useConversationStore();


onMounted(() => {
    api.get(`channels?token=${user.member.token}`).then(response => {
        conversations.conversations = response
    })
})
</script>

<template>
    <CreateConversation id="create"></CreateConversation>
    <div id="conversation" v-for="conversation in conversations.conversations">
        <RouterLink :to="{ name: 'conversation', params: { id: conversation.id } }">
            <div class="conversation-data">
                <span class="label">Title : {{ conversation.label }}</span>
                <span class="topic">Tags : {{ conversation.topic }}</span>
            </div>
        </RouterLink>
        <hr />
    </div>
</template>

<style lang="scss" scoped>
// #create {
//     display: none;
// }

#conversation {
    display: flex;
    flex-direction: column;

    .conversation-data {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 0.5rem;
    }
}

hr {
    width: 100%;
    height: 2px;
    background-color: yellow;
}
</style>