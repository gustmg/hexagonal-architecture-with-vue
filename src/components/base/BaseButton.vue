<template>
  <q-btn
    color="indigo"
    padding="sm lg"
    :label="label"
    :outline="type === 'secondary'"
  />
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'primary',
  },

  label: {
    type: String,
    required: true,
  },
});
</script>
