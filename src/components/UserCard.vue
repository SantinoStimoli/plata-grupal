<template>
  <div class="bg-white shadow-lg rounded-lg text-center p-4">
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
    final: {
      type: Boolean,
      default: false
    }
  }
}
</script>
