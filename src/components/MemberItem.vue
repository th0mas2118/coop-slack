<template lang="">
	<div class="member">
		<div class="member-data">
			<h2>{{ member.fullname }}</h2>
			<span>{{ member.email }}</span>
		</div>
		<div class="member-controls">
			<button v-if="user.member.id !== member.id">Delete</button>
		</div>
	</div>
</template>

<script setup>
	import { useUserStore } from "@/stores/user";
	const user = useUserStore();

	const props = defineProps({
		member: {},
	});
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
