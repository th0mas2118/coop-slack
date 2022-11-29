<script setup>
import { useUserStore } from '@/stores/user'
const user = useUserStore()
const data = {
    email: '',
    password: ''
}
</script>

<template>
    <div class='container'>
        <div>
            <h1>Coop-slack</h1>
            <h2>Login</h2>
            <form type="login">
                <label>Mail</label>
                <input type="email" placeholder="Email" v-model="data.email">
                <label>Password</label>
                <input type="password" placeholder="password" v-model="data.password">
                <button @click="user.setConnected(data.email, data.password)">Login</button>
            </form>
            <a href="/register">Register</a>
        </div>
    </div>
</template>
