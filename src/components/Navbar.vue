<script setup>
import { useUserStore } from '@/stores/user'
const user = useUserStore()
</script>

<template>
	<header class="navbar">
		<h2>Title</h2>
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
			<span v-if="user.isConnected" @click="user.disconnect">Logout</span>
		</nav>
	</header>
</template>

<style scoped>
header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem;
	height: 60px;
	background-color: #181818;
}

nav {
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: center;
}

span {
	cursor: pointer;
}
</style>
