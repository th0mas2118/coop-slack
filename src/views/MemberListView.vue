<template lang="">
	<div>
		<header>
			<h1>Listes des membres</h1>
		</header>
		<div id="members"></div>
	</div>
</template>

<script setup>
	import { useUserStore } from "@/stores/user";
	const user = useUserStore();

	console.log(await api.get("members"));
</script>

<style lang="scss" scoped>
	#members {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
	}
</style>
