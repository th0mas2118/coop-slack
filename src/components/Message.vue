<template lang="">
    <div class="message">
        <div class="avatar">
            <img :src="'https://gravatar.com/avatar/' + msg['member_id'] + '?s=200&d=robohash&r=x'" alt="" />
        </div>
        <section>
            <header>
                <div>
                    <b><RouterLink :to="{ name: 'member', params: { id: msg['member_id'] } }">{{msg['member_name']}}</RouterLink></b>
                    -
                    <time>{{msg['date']}}</time>
                </div>
            </header>
            <div class="content">{{message.message}}</div>
        </section>
    </div>
</template>
<script setup>
import { useMembersStore } from "@/stores/members";
const members = useMembersStore();
const props = defineProps({
    message: {},
});
let msg = []
members.members.forEach(element => {
    if (element.id === props.message.member_id) {
        msg['member_name'] = element.fullname
        msg['member_id'] = element.id
        msg['date'] = props.message.created_at
    }
});
</script>
<style lang="scss" scoped>
.message {
    display: flex;
    flex-direction: row
}

.avatar {
    img {
        width: 50px;
        height: 50px;
    }
}

header {
    display: flex;
    flex-direction: row;
}
</style>