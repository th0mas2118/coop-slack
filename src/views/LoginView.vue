<!-- FAIT PAR PIERSON THOMAS -->
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
            <input type="email" placeholder="Email" v-model="log.email">
            <input type="password" placeholder="Password" v-model="log.password">
            <button @click="user.setConnected(log)">Login</button>
        </form>
    </div>
</template>