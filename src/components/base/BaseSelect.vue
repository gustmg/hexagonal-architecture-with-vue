<template>
  <q-select
    :model-value="modelValue"
    outlined
    map-options
    emit-value
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template
      v-if="customOption"
      #option="scope"
    >
      <slot
        name="option"
        :props="scope"
      />
    </template>
  </q-select>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number, Array, Object, null],
    default: '',
  },

  customOption: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['update:modelValue']);
</script>
