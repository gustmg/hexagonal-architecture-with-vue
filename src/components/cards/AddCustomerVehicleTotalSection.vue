<template>
  <q-list
    class="text-subtitle2"
    dense
  >
    <q-item
      v-for="vehicleTotal in vehicleTotals"
      :key="vehicleTotal[0]"
    >
      <q-item-section>{{ vehicleTotal[0] }}</q-item-section>
      <q-item-section
        side
        class="text-bold text-primary"
      >
        {{ vehicleTotal[1] }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
import { useVehicleStore } from 'src/stores/vehicle.store';
import { computed } from 'vue';

const vehicleStore = useVehicleStore();

const vehicleTotals = computed(() => {
  const vehicleTotalsMap = new Map();
  const selectedVehiclePrice = vehicleStore.getSelectedVehicleToAdd?.price ?? 0;

  vehicleTotalsMap.set('Subtotal', selectedVehiclePrice);
  vehicleTotalsMap.set('IVA', selectedVehiclePrice * 0.16);
  vehicleTotalsMap.set('Total a pagar', selectedVehiclePrice + selectedVehiclePrice * 0.16);

  return vehicleTotalsMap;
});
</script>
