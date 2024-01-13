<template>
  <q-form>
    <BaseRow>
      <div class="col-12">
        <BaseSelect
          v-model="vehicleStore.addVehicleForm.vehicleId"
          label="Vehículo"
          :options="vehicleStore.getAllVehicles"
          option-value="id"
          option-label="model"
          custom-option
        >
          <template #option="{props}">
            <VehicleListItem
              :vehicle="props.opt"
              clickable
              @click="vehicleStore.addVehicleForm.vehicleId = props.opt.id"
            />
          </template>
        </BaseSelect>
      </div>
      <div class="col-12">
        <BaseCheckbox
          v-model="vehicleStore.addVehicleForm.acceptPrivacy"
          label="He leído y acepto el Aviso de privacidad"
        />
        <BaseCheckbox
          v-model="vehicleStore.addVehicleForm.acceptTerms"
          label="He leído y acepto los términos y condiciones"
        />
      </div>
    </BaseRow>
  </q-form>
</template>

<script setup lang="ts">
import { useVehicleStore } from 'src/stores/vehicle.store';
import BaseRow from '../base/BaseRow.vue';
import BaseSelect from '../base/BaseSelect.vue';
import BaseCheckbox from '../base/BaseCheckbox.vue';
import VehicleListItem from '../list-items/VehicleListItem.vue';

const vehicleStore = useVehicleStore();
</script>
