<template>
  <q-card class="card">
    <q-card-section
      v-if="title !== ''"
      class="text-h6 text-bold text-center text-indigo"
    >
      {{ title }}
    </q-card-section>
    <q-card-section>
      <slot name="body" />
    </q-card-section>
    <q-card-actions class="justify-center">
      <slot name="actions" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: false,
    default: '',
  },
});
</script>

<style scoped>
.card {
  padding: 1rem;
  border-radius: 24px;
  box-shadow:  8px 8px 24px #f4e6fc,
              -8px -8px 24px #e4e8fa;

}
</style>
