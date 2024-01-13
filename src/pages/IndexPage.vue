<template>
  <BasePage>
    <BaseRow>
      <div class="col-3">
        <CompleteCustomerInfoCard v-if="!customerStore.isCustomerWithCompleteData" />
        <AddCustomerVehicleCard v-else />
      </div>
    </BaseRow>
  </BasePage>
</template>

<script setup lang="ts">
import BasePage from 'src/components/base/BasePage.vue';
import BaseRow from 'src/components/base/BaseRow.vue';
import AddCustomerVehicleCard from 'src/components/cards/AddCustomerVehicleCard.vue';
import CompleteCustomerInfoCard from 'src/components/cards/CompleteCustomerInfoCard.vue';
import { useCustomerStore } from 'src/stores/customer.store';
import { useVehicleStore } from 'src/stores/vehicle.store';
import { onMounted } from 'vue';

const customerStore = useCustomerStore();
const vehicleStore = useVehicleStore();

onMounted(async () => {
  await vehicleStore.fetchVehicles();
});
</script>
