<script setup>
	const user = useUserStore();

	if (user.isConnected) {
	}
	onMounted(() => {});
</script>

<template>
	<div class="about">
		<h1>Register</h1>

		<form action="" id="register">
			<input type="text" name="fullname" id="fullname" placeholder="Full Name" required />
			<input type="email" name="email" id="email" placeholder="Email Address" required />
			<input type="password" name="password" id="password" placeholder="Password" required />
			<input type="password" name="password2" id="password2" placeholder="Password confirmation" required />
			<button>Créer un compte</button>
		</form>
	</div>
</template>

<style scoped>
	h1 {
		text-align: center;
	}
</style>
