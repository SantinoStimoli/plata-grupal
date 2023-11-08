<template>
  <div class="bg-white shadow-lg rounded-lg text-center p-4 relative">
    <!-- Agregar el icono de cruz de PrimeVue en la esquina superior derecha -->
    <i
      v-show="user?.name !== 'Ingrese los usuarios'"
      v-if="!final"
      class="pi pi-times text-red-600 hover:text-red-500 absolute top-3 right-3 cursor-pointer"
      @click="$emit('deleteUser', index)"
    />

    <h2 class="text-2xl font-semibold text-gray-800">
      {{ user?.name }}
    </h2>
    <p
      v-show="user?.name !== 'Ingrese los usuarios'"
      class="mt-2 text-gray-600"
    >
      {{ final ? (user?.payment < 0 ? 'Le pagan' : 'Paga') : '' }}
      {{
        final
          ? ((user?.payment < 0 ? -1 : 1) * user?.payment).toLocaleString(
              'es-AR',
              {
                style: 'currency',
                currency: 'ARS'
              }
            )
          : user?.payment.toLocaleString('es-AR', {
              style: 'currency',
              currency: 'ARS'
            })
      }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    user: Object,
    index: Number,
    final: {
      type: Boolean,
      default: false
    }
  }
}
</script>
