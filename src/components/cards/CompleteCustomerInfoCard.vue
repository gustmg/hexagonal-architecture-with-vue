<template>
  <BaseCard title="Completa tu información">
    <template #body>
      <CompleteCustomerInfoForm />
    </template>
    <template #actions>
      <div class="col-6">
        <BaseButton
          label="Guardar"
          class="full-width"
          @click="updateCustomer()"
        />
      </div>
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import { useCustomerStore } from 'src/stores/customer.store';
import BaseButton from '../base/BaseButton.vue';
import BaseCard from '../base/BaseCard.vue';
import CompleteCustomerInfoForm from '../forms/CompleteCustomerInfoForm.vue';

const customerStore = useCustomerStore();

const updateCustomer = () => {
  customerStore.updateCustomer();
};
</script>
