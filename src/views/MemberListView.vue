<!-- FAIT PAR ANTHONY DRAGUN -->
<template lang="">
	<div>
		<header>
			<h1>Listes des membres</h1>
		</header>
		<div id="members">
			<hr />
			<template v-for="member in members.members">
				<MemberItem :member="member"></MemberItem>
				<hr />
			</template>
		</div>
	</div>
</template>
<script setup>
	import MemberItem from "../components/MemberItem.vue";
	import { useMembersStore } from "@/stores/members";
	const members = useMembersStore();

	onMounted(async () => {
		api
			.get("members")
			.then((x) => {
				members.members = x;
				console.log(members);
			})
			.catch((e) => console.log(e));
	});
</script>

<style lang="scss" scoped>
	#members {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.5rem;
	}

	hr {
		width: 100%;
		height: 1px;
		background-color: #181818;
	}
</style>
