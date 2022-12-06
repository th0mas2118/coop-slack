<template lang="">
    <div>
        <form onsubmit="return false" @submit="modifyConversation">
                <input placeholder="Label" v-model="conversation.label"/>
                <input placeholder="Tags" v-model="conversation.topic"/>
                <button>Modify</button>
                <button @click="emit('show',false)">Close</button>
            </form>
    </div>
</template>
<script setup>
import { useUserStore } from "@/stores/user";
import router from "../router/index.js";
const user = useUserStore();
const props = defineProps({
    conversation: {},
});
const emit = defineEmits(["show"]);
function modifyConversation() {
    api.put(`channels/${props.conversation.id}?token=${user.member.token}`, {
        body: {
            label: props.conversation.label,
            topic: props.conversation.topic,
        }
    }).then(response => {
        router.go()
    }).catch(e => {
        console.log(e)
    })

}
</script>
<style lang="scss" scoped>

</style>