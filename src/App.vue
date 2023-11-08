<template>
  <main class="flex flex-col l:w-fit min-h-screen m-auto pt-14 l:h-screen">
    <Dialog
      v-model:visible="showAlert"
      modal
      :header="alert?.status"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
      <p>
        {{ alert?.message }}
      </p>
    </Dialog>

    <Dialog
      v-model:visible="showFinalUsers"
      modal
      header="Cuenta Final"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
      <UsersList :users="finalUsers" final />
    </Dialog>

    <section class="w-full l:w-[700px] px-5 flex flex-col">
      <h1 class="text-[50px] text-center font-black mb-10 max-sm:text-[40px]">
        Calculador Grupal
      </h1>

      <div
        class="flex justify-between gap-5 mb-5 max-l:flex-col [&>*]:w-1/2 max-l:[&>*]:w-full"
      >
        <Form @addUser="addUser" @setAlert="setAlert" />
        <UsersList @deleteUser="deleteUser" :users="users" />
      </div>

      <div
        class="flex gap-5 max-sm:flex-col max-sm:[&>*]:w-full [&>*]:w-1/2 overflow-hidden"
      >
        <Button
          v-show="users.length > 0"
          @click="calculate()"
          label="Calcular"
        />
        <Button
          v-show="users.length > 0"
          @click="() => (users = [])"
          label="Limpiar"
          severity="danger"
        />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Form from './components/Form.vue'
import UsersList from './components/UsersList.vue'

export default {
  components: { Form, UsersList },
  data() {
    return {
      showAlert: false,
      alert: null as { status: string; message: string } | null,
      users: [] as User[],
      showFinalUsers: false,
      finalUsers: [] as User[]
    }
  },
  methods: {
    addUser(newUser: User) {
      this.users.push(newUser)
    },
    setAlert(newValue: Alert) {
      this.alert = newValue
      this.showAlert = true
    },
    calculate() {
      const usersLength = this.users.length
      let total = 0

      this.finalUsers = []

      this.users.forEach(user => (total += user.payment))

      let individualPayment = total / usersLength

      this.users.forEach(user => {
        let finalUser = {
          name: user.name,
          payment: individualPayment - user.payment
        }
        this.finalUsers.push(finalUser)
      })

      this.showFinalUsers = true

      console.log(this.users)
      console.log(this.finalUsers)
    },
    deleteUser(index: number) {
      this.users.splice(index, 1)
    }
  }
}
</script>
