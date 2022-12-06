<!-- FAIT PAR PIERSON THOMAS -->
<template lang="">
	<div id="modify-panel">
		<form onsubmit="return false" @submit="modifyMessage">
			<h3>Modify message</h3>
			<input type="text" placeholder="message" v-model="message.content" />
			<button>Modify</button>
			<button @click="emit('show', false)">Close</button>
		</form>
	</div>
</template>


<script setup>
import router from "@/router";
import { useUserStore } from "@/stores/user";
const user = useUserStore();

//const use to manage formular print
const emit = defineEmits(["show"]);

//propriety revocer from the messsage
let message = reactive({
    content: props.message.message,
});
const props = defineProps({
    message: {},
});


function modifyMessage() {
    console.log(props.message);
    api
        .put(`channels/${props.message.channel_id}/posts/${props.message.id}?token=${user.member.token}`, {
            body: {
                message: message.content,
            },
        })
        .then((response) => {
            router.go()
            //console.log(response)
        });
}
</script>
<style lang="scss" scoped>
#modify-panel {
    position: fixed;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #00000060;
    backdrop-filter: blur(2px);

    form {
        margin: 1rem;
        background-color: #00000040;
        padding: 1rem;
        width: 300px;

        h3 {
            margin-top: 0;
        }
    }
}
</style>
