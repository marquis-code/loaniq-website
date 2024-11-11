<!-- components/TransactionHistory.vue -->
<template>
    <div class="p-6 bg-white rounded-lg shadow-md w-full max-w-lg">
      <h2 class="text-xl font-semibold mb-4">Transaction history</h2>
      <div class="flex gap-2 mb-4">
        <button v-for="filter in filters" :key="filter" 
                :class="['px-4 py-1 rounded', activeFilter === filter ? 'bg-red-500 text-white' : 'bg-gray-100']"
                @click="activeFilter = filter">
          {{ filter }}
        </button>
      </div>
      <ul>
        <li v-for="transaction in filteredTransactions" :key="transaction.id" 
            class="flex justify-between py-2 border-b">
          <div>
            <p class="font-medium">{{ transaction.amount }}</p>
            <p class="text-sm text-gray-600">{{ transaction.type }}</p>
          </div>
          <div :class="statusClasses(transaction.status)">
            <span class="text-xs capitalize">{{ transaction.status }}</span>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  const filters = ["All", "Paid", "Unpaid", "Declined"];
  const activeFilter = ref("All");
  
  const transactions = [
    { id: 1, amount: "₦450,000", type: "Individual loan", status: "Pending" },
    { id: 2, amount: "₦450,000", type: "Individual loan", status: "Active" },
    { id: 3, amount: "₦450,000", type: "Corporate loan", status: "Overdue" },
    { id: 4, amount: "₦450,000", type: "Individual loan", status: "Paid" },
  ];
  
  const filteredTransactions = computed(() => {
    return activeFilter.value === "All"
      ? transactions
      : transactions.filter(t => t.status.toLowerCase() === activeFilter.value.toLowerCase());
  });
  
  function statusClasses(status: string) {
    return {
      "text-green-500": status === "Active",
      "text-red-500": status === "Overdue",
      "text-gray-500": status === "Pending",
      "text-blue-500": status === "Paid",
    };
  }
  </script>
  