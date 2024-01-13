<template>
  <BaseCard title="Agregar un vehículo a mi lista">
    <template #body>
      <AddCustomerVehicleForm />
      <q-separator class="q-my-md" />
      <AddCustomerVehicleTotalSection />
    </template>
    <template #actions>
      <div class="col-6">
        <BaseButton
          label="Agregar"
          class="full-width"
        />
      </div>
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseButton from '../base/BaseButton.vue';
import BaseCard from '../base/BaseCard.vue';
import AddCustomerVehicleForm from '../forms/AddCustomerVehicleForm.vue';
import AddCustomerVehicleTotalSection from './AddCustomerVehicleTotalSection.vue';
</script>
