<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <BasePage class="row items-center justify-evenly">
        <div class="col-3">
          <LoginCard />
        </div>
      </BasePage>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import BasePage from 'src/components/base/BasePage.vue';
import LoginCard from 'src/components/cards/LoginCard.vue';
</script>
