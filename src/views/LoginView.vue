<script setup>
import { useUserStore } from '@/stores/user'
const user = useUserStore()
let members = reactive({
    email: '',
    password: ''
})
</script>

<template>
    <div class='login-view'>
        <h1>Login</h1>
        <form type="login">
            <label>Mail</label>
            <input type="email" placeholder="Email" v-model="members.email">
            <label>Password</label>
            <input type="password" placeholder="password" v-model="members.password">
            <button @click="user.setConnected(members.email, members.password)">Login</button>
        </form>
        <a href="/register">Register</a>
    </div>
</template>