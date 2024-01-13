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
            <q-item
              clickable
              @click="vehicleStore.addVehicleForm.vehicleId = props.opt.id"
            >
              <q-item-section avatar>
                <q-img
                  :src="props.opt.img"
                  alt="img"
                  width="80px"
                  height="80px"
                  fit="contain"
                />
              </q-item-section>
              <q-item-section class="text-caption">
                <q-item-label>{{ props.opt.model }}</q-item-label>
                <q-item-label>{{ props.opt.year }}</q-item-label>
                <q-item-label>{{ props.opt.color }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label>${{ props.opt.price }}</q-item-label>
              </q-item-section>
            </q-item>
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

const vehicleStore = useVehicleStore();
</script>
