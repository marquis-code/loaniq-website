<template>
  <div class="bg-white rounded-lg shadow-lg p-6 md:w-1/2 flex flex-col justify-between">
    <h2 class="text-[#687181] text-xl font-semibold mb-6">Available loans</h2>

    <!-- Loan Options -->
    <div class="">
      <div 
        v-for="loan in loans" 
        :key="loan.title" 
        @click="selectLoan(loan.title)"
        :class="[
          'cursor-pointer p-2 rounded-lg transition-colors duration-200',
          selectedLoan === loan.title ? 'text-red-600' : 'text-gray-800'
        ]"
      >
        <div class="flex items-center">
          <span v-if="selectedLoan === loan.title" class="text-red-600 mr-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.15858 19.3422C8.75838 19.3422 8.37819 19.1821 8.09805 18.9019L2.43522 13.2391C1.85493 12.6588 1.85493 11.6983 2.43522 11.1181C3.01551 10.5378 3.97599 10.5378 4.55628 11.1181L9.15858 15.7204L19.4437 5.43522C20.024 4.85493 20.9845 4.85493 21.5648 5.43522C22.1451 6.01551 22.1451 6.97599 21.5648 7.55628L10.2191 18.9019C9.93897 19.1821 9.55878 19.3422 9.15858 19.3422Z" fill="#DD3636"/>
</svg>

          </span>
          <h3 :class="selectedLoan === loan.title ? 'font-semibold text-red-600' : 'font-semibold text-[#323740] pl-6'">
            {{ loan.title }}
          </h3>
        </div>
        <p class="text-sm text-[#7D8799] max-w-sm pl-6">{{ loan.description }}</p>
        <hr class="my-4 border-gray-200" />
      </div>
    </div>

    <!-- Get Started Button -->
 <div class="">
  <button
      @click="router.push('/dashboard/loans/consumer')"
      type="button"
      :class="[
        'mt-6 py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-x-3',
        selectedLoan ? 'bg-[#2F6D67] text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
      ]"
      :disabled="!selectedLoan"
    >
      Let’s get started <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 4.16659L13.3333 9.99992L7.5 15.8333" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </button>
 </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const router = useRouter()

// Sample Data for Loans
const loans = ref([
  {
    title: 'Consumer Loans',
    description: 'Fill up the necessary information to verify and have full access to your account.'
  },
  {
    title: 'Business/Corporate Loans',
    description: 'Fill up the necessary information to verify and have full access to your account.'
  },
  {
    title: 'Asset Financing',
    description: 'Fill up the necessary information to verify and have full access to your account.'
  }
]);

// Selected Loan Ref
const selectedLoan = ref<string | null>(null);

// Function to select a loan
function selectLoan(title: string) {
  selectedLoan.value = title;
}
</script>
