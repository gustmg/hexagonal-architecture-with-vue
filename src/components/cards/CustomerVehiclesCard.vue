<template>
  <BaseCard title="Lista de vehículos">
    <template #body>
      <q-table
        :columns="columns"
        :rows="customerStore.customerVehicles"
        flat
      />
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import { useCustomerStore } from 'src/stores/customer.store';
import BaseCard from '../base/BaseCard.vue';

const customerStore = useCustomerStore();

const columns = [
  {
    name: 'model',
    label: 'Modelo',
    field: 'model',
  },
  {
    name: 'color',
    label: 'Color',
    field: 'color',
  },
  {
    name: 'year',
    label: 'Año',
    field: 'year',
  },
  {
    name: 'price',
    label: 'Precio',
    field: 'price',
  },
];
</script>
