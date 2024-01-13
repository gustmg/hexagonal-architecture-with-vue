<template>
  <q-item>
    <q-item-section avatar>
      <q-img
        :src="vehicle.img"
        alt="img"
        width="80px"
        height="80px"
        fit="contain"
      />
    </q-item-section>
    <q-item-section class="text-caption">
      <q-item-label>{{ vehicle.model }}</q-item-label>
      <q-item-label>{{ vehicle.year }}</q-item-label>
      <q-item-label>{{ vehicle.color }}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-item-label>${{ vehicle.price }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
  vehicle: {
    type: Object,
    required: true,
  },
});
</script>
