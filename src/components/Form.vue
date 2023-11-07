<template>
  <form @submit="e => createUser(e)" class="flex flex-col gap-5">
    <h1 class="m-0 font-black">Ingreso de usuarios</h1>
    <label class="flex flex-col gap-2">
      Nombre
      <InputText
        required
        v-model="name"
        aria-describedby="name-help"
        placeholder="Santino - Tyno - Santi"
      />
    </label>
    <label class="flex flex-col gap-2">
      Pago
      <InputNumber
        v-model="payment"
        aria-describedby="payment-help"
        inputId="currency-ars"
        mode="currency"
        currency="ARS"
        locale="es-AR"
      />
    </label>
    <Button type="submit" label="Añadir" />
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: null as string | null,
      payment: null as number | null
    }
  },
  methods: {
    createUser(event: Event) {
      event.preventDefault()
      if (this.name !== null) {
        let newUser = {
          name: this.name,
          payment: this.payment === null ? 0 : this.payment
        }
        this.$emit('addUser', newUser)
        this.cleanForm()
      } else {
        this.$emit('setAlert', {
          status: 'error',
          message: 'El formulario esta incompleto'
        })
      }
    },
    cleanForm() {
      this.name = null
      this.payment = null
    }
  }
}
</script>
