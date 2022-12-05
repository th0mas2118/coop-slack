<!-- FAIT PAR PIERSON THOMAS -->
<script setup>
import { useUserStore } from '@/stores/user'
const user = useUserStore()
const conversations = []
</script>

<template>
    <div v-for="conversation in conversations">
        {{ conversation }}
    </div>
</template>