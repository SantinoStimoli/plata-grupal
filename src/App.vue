<template>
  <main class="flex flex-col l:w-fit min-h-screen m-auto py-5">
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
      <h1 class="text-[50px] text-center font-black mb-10">
        Calculador Grupal
      </h1>

      <div
        class="flex justify-between gap-5 mb-5 max-l:flex-col [&>*]:w-1/2 max-l:[&>*]:w-full"
      >
        <Form @addUser="addUser" @setAlert="setAlert" />
        <UsersList :users="users" />
      </div>

      <Button v-show="users.length > 0" @click="calculate()" label="Calcular" />
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
    }
  }
}
</script>
