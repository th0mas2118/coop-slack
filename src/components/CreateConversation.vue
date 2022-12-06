<!-- FAIT PAR ANTHONY DRAGUN -->
<template lang="">
	<div id="create-panel">
		<form onsubmit="return false" @submit="create">
			<h3>New conversation</h3>
			<input type="text" placeholder="Subject" v-model="conversation.subject" />
			<input type="text" placeholder="Tags" v-model="conversation.tags" />
			<button>Create</button>
			<button @click="emit('show', false)">Close</button>
		</form>
	</div>
</template>

<script setup>
import router from "@/router";
import { useUserStore } from "@/stores/user";
const user = useUserStore();
const emit = defineEmits(["show"]);

let conversation = reactive({
    subject: "",
    tags: "",
});
function create() {
    console.log(conversation);
    api
        .post("channels", {
            body: {
                label: conversation.subject,
                topic: conversation.tags,
                token: user.member.token,
            },
        })
        .then((response) => {
            console.log(response);
            router.push(`/conversation/${response.id}`);
        });
}

function test() { }
</script>

<style lang="scss" scoped>
#create-panel {
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
