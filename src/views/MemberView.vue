<!-- FAIT PAR ANTHONY DRAGUN -->
<template lang="">
	<div id="member">
		<div class="member-data">
			<div class="profile-picture">
				<img src="" alt="" />
			</div>
			<h2>{{ currentMember.fullname }}</h2>
			<span>{{ currentMember.email }}</span>
			<span>Inscrit depuis: {{ currentMember.created_at }}</span>
		</div>
		<h3>Liste des messages</h3>
	</div>
</template>

<script setup>
	import router from "@/router";
	import { useMembersStore } from "@/stores/members";
	import { useUserStore } from "@/stores/user";

	const user = useUserStore();
	const members = useMembersStore();

	const id = router.currentRoute.value.params.id;
	let currentMember = ref({});
	const messages = ref([]);
	currentMember = members.members.find((x) => x.id === id);

	onMounted(async () => {
		let conversations = await api.get(`channels?token=${user.member.token}`);

		conversations.forEach(async (x) => {
			console.log(await api.get(`channels/${x.id}/posts?token=${user.member.token}`));
		});
	});
</script>

<style lang="scss" scoped>
	#member {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.member-data {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
			text-align: center;

			.profile-picture {
				position: relative;
				width: 150px;
				height: 150px;
				background-color: white;
				border-radius: 50%;
			}
		}

		h3 {
			margin: 2rem;
		}
	}
</style>
