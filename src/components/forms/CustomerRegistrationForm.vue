<template>
  <q-form>
    <BaseRow>
      <div class="col-12">
        <BaseInput
          v-model="customerStore.customerRegistrationForm.name"
          label="Nombre"
          placeholder="John"
        />
      </div>
      <div class="col-12">
        <BaseInput
          v-model="customerStore.customerRegistrationForm.lastName"
          label="Apellidos"
          placeholder="Travolta"
        />
      </div>
      <div class="col-12">
        <BaseInput
          v-model="customerStore.customerRegistrationForm.email"
          label="Correo electrónico"
          placeholder="johntravolta@example.com"
        />
      </div>
      <div class="col-12">
        <BaseInput
          v-model="customerStore.customerRegistrationForm.password"
          label="Contraseña"
          type="password"
        />
      </div>
      <div class="col-12">
        <BaseInput
          v-model="passwordVerification"
          label="Verificar contraseña"
          type="password"
        />
      </div>
    </BaseRow>
  </q-form>
</template>

<script setup lang="ts">
import { useCustomerStore } from 'src/stores/customer.store';
import { ref } from 'vue';
import BaseInput from '../base/BaseInput.vue';
import BaseRow from '../base/BaseRow.vue';

const passwordVerification = ref<string>('');

const customerStore = useCustomerStore();
</script>
