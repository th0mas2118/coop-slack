<!-- FAIT PAR PIERSON THOMAS -->
<template lang="">
    <div class="message">
        <section>
            <div class="avatar">
                <img :src="'https://gravatar.com/avatar/' + msg['member_id'] + '?s=200&d=robohash&r=x'" alt="" />
            </div>
            <div class="header">
                <div>
                    <b><RouterLink :to="{ name: 'member', params: { id: msg['member_id'] } }">{{msg['member_name']}}</RouterLink></b>
                    -
                    <time>{{msg['date']}}</time>
                </div>
                <div class="content">{{message.message}}</div>
            </div>
        </section>
        <div class="action">
            <button>Modify</button>
            <button>Delete</button>
        </div>
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
    section {
        display: flex;
        flex-direction: row;

        .header {
            display: flex;
            flex-direction: column;
            ;
        }
    }

    &:hover {
        .action {
            opacity: 1;
        }
    }

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .action {
        display: flex;
        flex-direction: row;
        opacity: 0;

        .action {
            transition: opacity 0.5s ease;
        }
    }
}


img {
    width: 50px;
    height: 50px;
}

header {
    display: flex;
    flex-direction: row;
}
</style>