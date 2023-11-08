<template>
  <section class="flex flex-col gap-5 l:max-h-[70vh] l:overflow-y-scroll">
    <UserCard
      @deleteUser="deleteUser"
      v-for="(user, index) in users"
      :user="user"
      :index="index"
      :final="final"
    />
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
        name: 'Ingrese los usuarios',
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
  },
  methods: {
    deleteUser(index: number) {
      this.$emit('deleteUser', index)
    }
  }
}
</script>
