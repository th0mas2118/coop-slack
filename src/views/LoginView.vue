<script setup>
import { useUserStore } from '@/stores/user'
const user = useUserStore()
let log = reactive({
    email: '',
    password: ''
})
</script>

<template>
    <div class='login-view'>
        <h1>Login</h1>
        <form type="login" onsubmit="return false">
            <label>Mail</label>
            <input type="email" placeholder="Email" v-model="log.email">
            <label>Password</label>
            <input type="password" placeholder="password" v-model="log.password">
            <button @click="user.setConnected(log)">Login</button>
        </form>
        <a href="/register">Register</a>
    </div>
</template>