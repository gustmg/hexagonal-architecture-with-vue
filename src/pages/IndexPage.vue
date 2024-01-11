<template>
  <BasePage>
    <BaseRow>
      <div class="col-3">
        <CompleteCustomerInfoCard />
      </div>
    </BaseRow>
  </BasePage>
</template>

<script setup lang="ts">
import BasePage from 'src/components/base/BasePage.vue';
import BaseRow from 'src/components/base/BaseRow.vue';
import CompleteCustomerInfoCard from 'src/components/cards/CompleteCustomerInfoCard.vue';
</script>
