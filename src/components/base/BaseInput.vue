<template>
  <q-input
    :model-value="value"
    outlined
    @update:model-value="$emit('update:value', $event)"
  />
</template>

<script setup lang="ts">
defineProps({
  value: {
    type: [String, Number],
    default: '',
  },
});

defineEmits(['update:value']);
</script>
