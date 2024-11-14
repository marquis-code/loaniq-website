<template>
    <div class="min-h-screen bg-gradient-to-br to-gray-200 p-6 md:p-10">
      <!-- Stepper Navigation -->
      <div class="text-gray-600 text-sm mb-4">
        <span :class="isActiveStep(1) ? 'text-red-600' : ''">Organization</span> >
        <span :class="isActiveStep(2) ? 'text-red-600' : ''">Loan details</span> >
        <span v-if="selectedOrganization === 'Government'" :class="isActiveStep(3) ? 'text-red-600' : ''">Loan Summary</span>
        <span v-if="selectedOrganization === 'Private'" :class="isActiveStep(3) ? 'text-red-600' : ''">Management profile</span>
        > Documentation
      </div>
  
      <!-- Dynamic Form Steps -->
      <div class="bg-white rounded-lg shadow-lg p-6">
        <!-- Step 1: Select Organization Type -->
        <div v-if="step === 1">
          <h2 class="text-2xl font-semibold mb-4">Choose Organization Type</h2>
          <select v-model="selectedOrganization" class="w-full p-3 border rounded-lg">
            <option value="Government">Government organizations</option>
            <option value="Private">Private organizations</option>
          </select>
          <button @click="nextStep" class="mt-6 py-2 px-4 bg-green-700 text-white rounded-lg">Continue &rarr;</button>
        </div>
  
        <!-- Government Organizations Flow -->
        <template v-if="selectedOrganization === 'Government'">
          <LoansOrganizationDetails v-if="step === 2" @nextStep="nextStep" />
          <LoansLoanSummary v-if="step === 3" @nextStep="nextStep" />
          <Documentation v-if="step === 4" />
        </template>
  
        <!-- Private Organizations Flow -->
        <template v-else>
          <LoansBusinessDetails v-if="step === 2" @nextStep="nextStep" />
          <LoansManagementProfile v-if="step === 3" @nextStep="nextStep" />
          <LoansDocumentation v-if="step === 4" />
        </template>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  
  // State Management
  const step = ref(1);
  const selectedOrganization = ref('Government');
  const route = useRoute();
  const router = useRouter();
  
  // Watch URL Query Parameter to Restore Step on Refresh
  onMounted(() => {
    const urlStep = route.query.step ? parseInt(route.query.step as string) : 1;
    step.value = urlStep;
  });
  
  watch(step, (newStep) => {
    router.replace({ query: { ...route.query, step: newStep.toString() } });
  });
  
  function nextStep() {
    if (step.value < 4) step.value++;
  }
  
  function isActiveStep(targetStep: number) {
    return step.value === targetStep;
  }
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  