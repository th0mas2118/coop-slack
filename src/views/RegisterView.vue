<!-- FAIT PAR ANTHONY DRAGUN -->

<script setup>
	import router from "@/router";

	const user = useUserStore();

	const data = reactive({ email: "", fullname: "", password: "" });
	const passwordConfirmation = ref("");

	const Register = () => {
		if (data.password !== passwordConfirmation.value || data.email == "" || data.fullname == "") {
			return;
		}
		api
			.post("members", { body: data })
			.then((e) => {
				router.push("login");
			})
			.catch((e) => {
				console.error(e);
			});

		console.log(user.user);
	};
</script>

<template>
	<div class="register-view">
		<h1>Register</h1>

		<form id="register" onsubmit="return false" @submit="Register">
			<input v-model="data.fullname" type="text" name="fullname" id="fullname" placeholder="Full Name" required />
			<input v-model="data.email" type="email" name="email" id="email" placeholder="Email Address" required />
			<input :class="data.password != passwordConfirmation ? 'wrong-password' : ''" v-model="data.password" type="password" name="password" id="password" placeholder="Password" required />
			<input :class="data.password != passwordConfirmation ? 'wrong-password' : ''" v-model="passwordConfirmation" type="password" name="password2" id="password2" placeholder="Password confirmation" required />
			<button>Créer un compte</button>
		</form>
	</div>
</template>

<style scoped>
	h1 {
		text-align: center;
	}

	.wrong-password {
		border: 1px rgba(176, 13, 13, 0.799) solid;
	}
</style>
