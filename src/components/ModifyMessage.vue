<template lang="">
    <div>
        <form onsubmit="return false" @submit="modifyMessage">
                <input placeholder="message" v-model="message.content"/>
                <button>Modify</button>
                <button @click="emit('show',false)">Close</button>
            </form>
    </div>
</template>
<script setup>
import router from "@/router"
import { useUserStore } from "@/stores/user";
const user = useUserStore();
const emit = defineEmits(["show"]);
let message = reactive({
    content: ""
})
const props = defineProps({
    message: {},
});
function modifyMessage() {
    console.log(props.message)
    api.put(`channels/${props.message.channel_id}/posts/${props.message.id}?token=${user.member.token}`, {
        body: {
            message: message.content
        }
    }).then(response => {
        //console.log(response)
    })
}
</script>
<style lang="scss scoped">
    
</style>