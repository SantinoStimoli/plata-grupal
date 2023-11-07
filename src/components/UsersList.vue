<template>
  <section class="flex flex-col gap-5">
    <UserCard v-for="user in users" :user="user" :final="final" />
    <UserCard v-show="users?.length === 0" :user="emptyUser" :final="final" />
  </section>
</template>
<script lang="ts">
import UserCard from './UserCard.vue'
export default {
  components: { UserCard },
  data() {
    return {
      emptyUser: {
        name: 'Ingrese un usuario',
        payment: 0
      }
    }
  },
  props: {
    users: Array<User>,
    final: {
      type: Boolean,
      default: false
    }
  }
}
</script>
