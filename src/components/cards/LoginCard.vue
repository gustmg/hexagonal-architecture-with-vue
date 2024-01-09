<template>
  <BaseCard title="Inicio de sesión">
    <template #body>
      <LoginForm />
    </template>
    <template #actions>
      <div class="col-6">
        <BaseButton
          label="Entrar"
          class="full-width"
          @click="login()"
        />
      </div>
      <div class="col-12">
        <q-separator class="q-my-lg" />
      </div>
      <div class="col-6">
        <div class="text-center text-body2 q-pb-md">
          ¿Aún no es usuario?
        </div>
        <BaseButton
          label="Registrarse"
          class="full-width"
          type="secondary"
          to="/register"
        />
      </div>
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import { useCustomerStore } from 'src/stores/customer.store';
import LoginForm from '../forms/LoginForm.vue';
import BaseCard from '../base/BaseCard.vue';
import BaseButton from '../base/BaseButton.vue';

const customerStore = useCustomerStore();

const login = async () => {
  await customerStore.login();
};
</script>
