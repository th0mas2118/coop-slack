<!-- FAIT PAR PIERSON THOMAS -->
<template>
	<CreateConversation v-if="showCreateForm" @show="setShow"></CreateConversation>
	<header>
		<h1>Listes des conversations</h1>
		<button @click="setShow(true)">New Conversation</button>
	</header>
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



<script setup>
import CreateConversation from "@/components/CreateConversation.vue";
import { useUserStore } from "@/stores/user";
import { useConversationStore } from "@/stores/conversations";
import { onMounted } from "vue";

//const from pinia store
const user = useUserStore();
const conversations = useConversationStore();

//const for hide/show convertion's creation formular
const showCreateForm = ref(false);
function setShow(e) {
	showCreateForm.value = e;
}

//call to API to have lists of conversations
onMounted(() => {
	api.get(`channels?token=${user.member.token}`).then((response) => {
		conversations.conversations = response;
	});
});
</script>



<style lang="scss" scoped>
// #create {
//     display: none;
// }

header {
	button {
		margin-bottom: 1rem;
	}
}

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
