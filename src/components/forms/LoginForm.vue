<template>
  <q-form>
    <BaseRow>
      <div class="col-12">
        <BaseInput
          v-model="customerStore.customerLoginForm.email"
          label="Correo electrónico"
          placeholder="johndoe@example.com"
        />
      </div>
      <div class="col-12">
        <BaseInput
          v-model="customerStore.customerLoginForm.password"
          label="Contraseña"
          type="password"
        />
      </div>
    </BaseRow>
  </q-form>
</template>

<script setup lang="ts">
import { useCustomerStore } from 'src/stores/customer.store';
import BaseInput from '../base/BaseInput.vue';
import BaseRow from '../base/BaseRow.vue';

const customerStore = useCustomerStore();
</script>
