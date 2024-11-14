<template>
  <div class="bg-white p-6 rounded-lg shadow-lg md:w-1/2">
    <!-- Title -->
    <h2 class="text-gray-700 text-xl font-semibold mb-4">
      Transaction history
    </h2>

    <!-- Tabs for Filtering Transactions -->
    <div class="flex space-x-4 mb-4 overflow-x-auto">
      <button
        v-for="tab in transactionTabs"
        :key="tab.value"
        :class="[
          'py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200',
          activeTab === tab.value
            ? 'bg-red-100 text-red-600'
            : 'bg-gray-100 text-gray-700',
        ]"
        @click="filterTransactions(tab.value)"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Transaction List -->
    <div class="space-y-4">
      <div
        v-for="(transaction, index) in filteredTransactions"
        :key="index"
        class="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
      >
        <div class="flex items-center gap-x-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#EEEFF2" />
            <path
              d="M15.1998 12.7999C15.1998 14.1254 14.1253 15.1999 12.7998 15.1999C11.4743 15.1999 10.3998 14.1254 10.3998 12.7999C10.3998 11.4744 11.4743 10.3999 12.7998 10.3999C14.1253 10.3999 15.1998 11.4744 15.1998 12.7999Z"
              fill="#434E61"
            />
            <path
              d="M21.5998 12.7999C21.5998 14.1254 20.5253 15.1999 19.1998 15.1999C17.8743 15.1999 16.7998 14.1254 16.7998 12.7999C16.7998 11.4744 17.8743 10.3999 19.1998 10.3999C20.5253 10.3999 21.5998 11.4744 21.5998 12.7999Z"
              fill="#434E61"
            />
            <path
              d="M18.3431 21.5999C18.3805 21.3386 18.3998 21.0715 18.3998 20.7999C18.3998 19.4918 17.9513 18.2884 17.1996 17.3352C17.788 16.9947 18.4712 16.7999 19.1998 16.7999C21.409 16.7999 23.1998 18.5908 23.1998 20.7999V21.5999H18.3431Z"
              fill="#434E61"
            />
            <path
              d="M12.7998 16.7999C15.0089 16.7999 16.7998 18.5908 16.7998 20.7999V21.5999H8.7998V20.7999C8.7998 18.5908 10.5907 16.7999 12.7998 16.7999Z"
              fill="#434E61"
            />
          </svg>

          <!-- <img :src="transaction.icon" alt="Icon" class="w-10 h-10 mr-4" /> -->
          <div>
            <p class="text-lg font-semibold text-gray-800">
              {{ transaction.amount }}
            </p>
            <p class="text-sm text-gray-600">{{ transaction.type }}</p>
          </div>
        </div>
        <div class="text-right">
          <span
            :class="statusClasses(transaction.status)"
            class="text-xs font-medium py-1 px-3 rounded-full"
          >
            {{ transaction.status }}
          </span>
          <p class="text-sm text-gray-500 mt-3">{{ transaction.date }}</p>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center items-center mt-6 space-x-2">
      <button
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="text-gray-500 hover:text-gray-700"
      >
        &laquo;
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="[
          'px-3 py-1 rounded-full',
          page === currentPage ? 'bg-red-500 text-white' : 'text-gray-600',
        ]"
      >
        {{ page }}
      </button>
      <button
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="text-gray-500 hover:text-gray-700"
      >
        &raquo;
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Sample Data for Transactions
const transactions = ref([
  {
    icon: "/path-to-icons/individual-loan-icon.svg",
    amount: "₦450,000",
    type: "Individual loan",
    status: "Pending",
    date: "23 March, 2023",
  },
  {
    icon: "/path-to-icons/individual-loan-icon.svg",
    amount: "₦450,000",
    type: "Individual loan",
    status: "Active",
    date: "23 March, 2023",
  },
  {
    icon: "/path-to-icons/corporate-loan-icon.svg",
    amount: "₦450,000",
    type: "Corporate loan",
    status: "Overdue",
    date: "23 March, 2023",
  },
  {
    icon: "/path-to-icons/individual-loan-icon.svg",
    amount: "₦450,000",
    type: "Individual loan",
    status: "Paid",
    date: "23 March, 2023",
  },
  {
    icon: "/path-to-icons/corporate-loan-icon.svg",
    amount: "₦450,000",
    type: "Corporate loan",
    status: "Paid",
    date: "23 March, 2023",
  },
  {
    icon: "/path-to-icons/corporate-loan-icon.svg",
    amount: "₦450,000",
    type: "Corporate loan",
    status: "Declined",
    date: "23 March, 2023",
  },
  // Add more transactions as needed
]);

// Tabs for Filtering
const transactionTabs = ref([
  { label: "All", value: "All" },
  { label: "Paid", value: "Paid" },
  { label: "Unpaid", value: "Unpaid" },
  { label: "Declined", value: "Declined" },
]);

const activeTab = ref("All"); // Default to "All" tab
const itemsPerPage = 4;
const currentPage = ref(1);

// Filter Transactions Based on Active Tab
const filteredTransactions = computed(() => {
  let filtered = transactions.value;
  if (activeTab.value !== "All") {
    filtered = transactions.value.filter((t) => t.status === activeTab.value);
  }
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filtered.slice(start, end);
});

// Total Pages for Pagination
const totalPages = computed(() => {
  const totalItems =
    activeTab.value === "All"
      ? transactions.value.length
      : transactions.value.filter((t) => t.status === activeTab.value).length;
  return Math.ceil(totalItems / itemsPerPage);
});

// Functions
function filterTransactions(status: string) {
  activeTab.value = status;
  currentPage.value = 1; // Reset to page 1 when filter changes
}

function goToPage(page: number) {
  if (page > 0 && page <= totalPages.value) {
    currentPage.value = page;
  }
}

// Function to determine status styles
function statusClasses(status: string) {
  switch (status) {
    case "Pending":
      return "bg-gray-200 text-gray-800";
    case "Active":
      return "bg-green-100 text-green-700";
    case "Overdue":
      return "bg-red-100 text-red-700";
    case "Paid":
      return "bg-blue-100 text-blue-700";
    case "Declined":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}
</script>
