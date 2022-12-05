<!-- FAIT PAR ANTHONY DRAGUN -->
<template lang="">
	<div class="member">
		<div class="member-data">
			<RouterLink :to="{ name: 'member', params: { id: member.id } }" test="{ test: 'salut' }">
				<h2>{{ member.fullname }}</h2>
			</RouterLink>
			<span>{{ member.email }}</span>
		</div>
		<div class="member-controls">
			<button v-if="user.member.id !== member.id" @click="DeleteUser(member.id)">Delete</button>
		</div>
	</div>
</template>

<script setup>
	import router from "@/router";
	import { useUserStore } from "@/stores/user";
	const user = useUserStore();

	const props = defineProps({
		member: {},
	});

	const DeleteUser = (id) => {
		api
			.delete(`members/${id}`, {
				body: {
					token: user.member.token,
				},
			})
			.then((x) => {
				router.go();
			})
			.catch((e) => console.log(e));
	};
</script>

<style lang="scss" scoped>
	.member {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.member-data {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			h2 {
				font-weight: 500;
				font-size: 1.25rem;
				color: #06acfb;
			}
		}
	}
</style>
