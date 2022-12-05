<template lang="">
    <div>
        <h2>{{message}}</h2>
    </div>
</template>
<script setup>
import { useMembersStore } from "@/stores/members";
const members = useMembersStore();
const props = defineProps({
    message: {},
});
// console.log(message)
</script>
<style lang="" scoped>
    
</style>