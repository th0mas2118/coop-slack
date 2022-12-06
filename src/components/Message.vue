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
        <div class="action" v-if="user.member.id===msg['member_id']">
            <button @click="setShow(true)">Modify</button>
            <button @click="deleteMessage">Delete</button>
        </div>
        <ModifyMessage :message="message" v-if="showModifyForm && user.member.id===msg['member_id']" @show="setShow"></ModifyMessage>
    </div>
</template>
<script setup>
import ModifyMessage from "@/components/ModifyMessage.vue"
import { useUserStore } from "@/stores/user";
import router from "../router/index.js";
import { useMembersStore } from "@/stores/members";
const user = useUserStore();
const members = useMembersStore();
const props = defineProps({
    message: {},
});
const showModifyForm = ref(false);


let msg = []
members.members.forEach(element => {
    if (element.id === props.message.member_id) {
        msg['member_name'] = element.fullname
        msg['member_id'] = element.id
        msg['date'] = props.message.created_at
    }
});
function setShow(e) {
    showModifyForm.value = e;
    // console.log(props.message.id)
    // console.log(props.message)
}
function deleteMessage() {
    api.delete(`channels/${props.message.channel_id}/posts/${props.message.id}?token=${user.member.token}`).then(respons => { router.go() })
}
</script>
<style lang="scss" scoped>
.hidden {
    display: none;
}

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