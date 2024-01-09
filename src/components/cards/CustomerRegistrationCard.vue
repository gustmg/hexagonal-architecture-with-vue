<template>
  <BaseCard title="Registro de cliente">
    <template #body>
      <CustomerRegistrationForm />
    </template>
    <template #actions>
      <div class="col-6">
        <BaseButton
          label="Registrarme"
          class="full-width"
          @click="registerCustomer()"
        />
      </div>
      <div class="col-12">
        <q-separator class="q-my-lg" />
      </div>
      <div class="col-6">
        <div class="text-center text-body2 q-pb-md">
          ¿Ya eres usuario?
        </div>
        <BaseButton
          label="Iniciar sesión"
          class="full-width"
          type="secondary"
          to="/login"
        />
      </div>
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import { useCustomerStore } from 'src/stores/customer.store';
import BaseCard from '../base/BaseCard.vue';
import BaseButton from '../base/BaseButton.vue';
import CustomerRegistrationForm from '../forms/CustomerRegistrationForm.vue';

const customerStore = useCustomerStore();

const registerCustomer = async () => {
  await customerStore.register();
};
</script>
