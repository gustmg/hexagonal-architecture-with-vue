<template>
  <q-form>
    <BaseRow>
      <div class="col-12">
        <div class="text-subtitle2">
          Trato
        </div>
        <q-option-group
          v-model="customerStore.customer.formalTitle"
          :options="formalTitles"
          type="radio"
        />
      </div>
      <div class="col-12">
        <BaseInput
          v-model="customerStore.customer.name"
          label="Nombre"
          placeholder="John"
        />
      </div>
      <div class="col-12">
        <BaseInput
          v-model="customerStore.customer.lastName"
          label="Apellidos"
          placeholder="Travolta"
        />
      </div>
      <div class="col-12">
        <BaseInput
          v-model="customerStore.customer.email"
          label="Correo electrónico"
          placeholder="johntravolta@example.com"
        />
      </div>
      <div class="col-12">
        <BaseInput
          v-model="customerStore.customer.phone"
          label="Teléfono fijo"
          placeholder="2222222222"
        />
      </div>
      <div class="col-12">
        <BaseInput
          v-model="customerStore.customer.mobilePhone"
          label="Teléfono móvil"
          placeholder="2222222222"
        />
      </div>
      <div class="col-12">
        <BaseSelect
          v-model="customerStore.customer.state"
          label="Estado"
          :options="states"
          option-value="label"
          option-label="label"
        />
      </div>
      <div class="col-12">
        <BaseSelect
          v-model="customerStore.customer.city"
          label="Municipio"
          :options="cities"
          option-value="label"
          option-label="label"
        />
      </div>
    </BaseRow>
  </q-form>
</template>

<script setup lang="ts">
import { useCustomerStore } from 'src/stores/customer.store';
import BaseInput from '../base/BaseInput.vue';
import BaseRow from '../base/BaseRow.vue';
import BaseSelect from '../base/BaseSelect.vue';

const customerStore = useCustomerStore();

const formalTitles = [
  { label: 'Sr.', value: 'sr' },
  { label: 'Sra.', value: 'sra' },
  { label: 'Srita.', value: 'srita' },
];

const states = [
  { id: 1, label: 'Puebla' },
];

const cities = [
  { id: 1, label: 'Puebla' },
  { id: 2, label: 'Cholula' },
  { id: 3, label: 'Amozoc' },
  { id: 4, label: 'Cuautlancingo' },
];
</script>
