<template>
  <q-select
    :model-value="modelValue"
    outlined
    map-options
    emit-value
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number, Array, Object],
    default: '',
  },
});

defineEmits(['update:modelValue']);
</script>
