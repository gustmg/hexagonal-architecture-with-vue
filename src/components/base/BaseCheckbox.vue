<template>
  <q-checkbox
    :model-value="value"
    @update:model-value="$emit('update:value', $event)"
  />
</template>

<script setup lang="ts">
defineProps({
  value: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['update:value']);
</script>
