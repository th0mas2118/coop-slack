<!-- FAIT PAR ANTHONY DRAGUN -->
<template lang="">
	<div id="member">
		<div class="member-data">
			<div class="profile-picture">
				<img :src="'https://gravatar.com/avatar/' + currentMember.id + '?s=200&d=robohash&r=x'" alt="" />
			</div>
			<h2>{{ currentMember.fullname }}</h2>
			<span>{{ currentMember.email }}</span>
			<span>Register date: {{ currentMember.created_at }}</span>
		</div>
		<h3>Messages List</h3>
		<div id="messages">
			<template v-for="message in messages">
				<Message :message="message"></Message>
			</template>
		</div>
	</div>
</template>

<script setup>
	import router from "@/router";
	import { useMembersStore } from "@/stores/members";
	import { useUserStore } from "@/stores/user";
	import Message from "@/components/Message.vue";

	const user = useUserStore();
	const members = useMembersStore();
	const id = router.currentRoute.value.params.id;
	const messages = ref([]);
	const loading = ref(true);

	let currentMember = ref({});

	currentMember = members.members.find((x) => x.id === id);

	onMounted(async () => {
		let conversations = await api.get(`channels?token=${user.member.token}`);
		let tempMessages = [];
		let requests = [];

		conversations.forEach(async (x) => {
			requests.push(api.get(`channels/${x.id}/posts?token=${user.member.token}`));
		});

		await Promise.all(requests).then((res) => res.forEach((x) => (tempMessages = tempMessages.concat(x))));

		messages.value = tempMessages.filter((x) => x.member_id === id);
		loading.value = false;
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
				overflow: hidden;

				img {
					object-fit: cover;
					width: 100%;
					height: 100%;
				}
			}
		}

		h3 {
			margin: 2rem;
		}

		#messages {
			display: flex;
			gap: 1rem;
			flex-direction: column;
		}
	}
</style>
