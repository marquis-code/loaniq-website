<template>
    <div class="p-6 min-h-screen container mx-auto">
      <div class="overflow-x-auto bg-white rounded-md border-[0.5px] border-gray-50">
        <table class="min-w-full text-left">
          <thead>
            <tr class="text-gray-500 text-sm border-b border-gray-50">
              <th class="px-4 py-4 font-medium text-[#1D2739]">Full name</th>
              <th class="px-4 py-4 font-medium text-[#1D2739]">Property interested in</th>
              <th class="px-4 py-4 font-medium text-[#1D2739]">Date</th>
              <th class="px-4 py-4 font-medium text-[#1D2739]">Time</th>
              <th class="px-4 py-4 font-medium text-[#1D2739]">Status</th>
              <th class="px-4 py-3 font-medium sr-only">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(visit, index) in visits" :key="index" class="border-b border-gray-50">
              <td class="px-4 py-6 text-[#667185] font-light text-sm"> {{ visit.name }}</td>
              <td class="px-4 py-6 text-[#667185] font-light text-sm">{{ visit.property }}</td>
              <td class="px-4 py-6 text-[#667185] font-light text-sm">{{ visit.date }}</td>
              <td class="px-4 py-6 text-[#667185] font-light text-sm">{{ visit.time }}</td>
              <td class="px-4 py-6 text-[#667185] font-light text-sm relative">
                {{ visit.status }}
                <button
                @click="toggleInfoDropdown(index)"
                class="text-gray-400 hover:text-gray-600"
              >
                <img src="@/assets/icons/info-icon.svg" alt="" />
              </button>
              <div
                v-if="infoDropdown === index"
                class="absolute top-9 right-14 z-50 mt-2 w-96 bg-[#F0F5FD] p-6 border border-gray-200 rounded-md shadow-lg"
              >
                    <div
                      class="absolute -top-2 right-10 transform rotate-45 w-4 h-4 bg-white"
                    ></div>

                    <h2 class="text-lg font-semibold text-[#1D2739] mb-2">
                      Status Information
                    </h2>
                    <p class="text-sm mb-4 text-[#344054] font-light">
                      Here are the different types of visitation statuses and
                      what they mean. Understanding these statuses will help you
                      manage and track all property visitations effectively.
                    </p>

                    <div class="mb-4">
                      <h3 class="font-medium text-[#1D2739]">Scheduled</h3>
                      <p class="text-sm text-[#344054] font-light">
                        The visitation is planned and awaiting tour of the
                        available rooms in the property.
                      </p>
                    </div>
                    <div class="mb-4">
                      <h3 class="font-medium text-[#1D2739]">Completed</h3>
                      <p class="text-sm text-[#344054] font-light">
                        The visitation is planned and awaiting tour of the
                        available rooms in the property.
                      </p>
                    </div>
                    <div class="mb-4">
                      <h3 class="font-medium text-[#1D2739]">No show</h3>
                      <p class="text-sm text-[#344054] font-light">
                        The visitation is planned and awaiting tour of the
                        available rooms in the property.
                      </p>
                    </div>

                    <button
                      @click="closeInfoDropdown"
                      class="w-full py-2 text-center font-semibold text-sm text-gray-900 rounded-lg "
                    >
                      Close
                    </button>
              </div>
              </td>
              <td
              class="py-4 px-5 relative whitespace-nowrap text-sm text-[#667185]"
            >
              <button
                @click="toggleDropdown(index)"
                class="inline-flex items-center text-sm font-medium text-[#667185] hover:text-black"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99414 10H10.0016"
                    stroke="#1D2739"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.98633 15H9.99383"
                    stroke="#1D2739"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 5H10.0075"
                    stroke="#1D2739"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div
                v-if="activeDropdown === index"
                class="absolute -top-2 right-10 z-50 mt-2 w-60 bg-white border border-gray-200 rounded-md shadow-lg"
              >
                <ul class="py-1 text-sm text-gray-700 divide divide-y-[0.5px]">
                  <li>
                    <a
                      @click.prevent="handleDropdownClick('view', tenant)"
                      href="#"
                      class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                    >
                      Scheduled
                    </a>
                  </li>
                  <li>
                    <a
                      @click.prevent="handleDropdownClick('message', tenant)"
                      href="#"
                      class="block flex items-center gap-x-2 px-4 py-3 text-sm hover:bg-gray-100 text-start"
                    >
                      Completed
                    </a>
                  </li>
                  <li>
                    <a
                      @click.prevent="handleDropdownClick('message', tenant)"
                      href="#"
                      class="block flex items-center gap-x-2 px-4 py-3 text-sm hover:bg-gray-100 text-start"
                    >
                      No Show
                    </a>
                  </li>
                </ul>
              </div>
            </td>
            </tr>
          </tbody>
        </table>
        <div
        v-if="activeDropdown !== null"
        @click="closeDropdown"
        class="fixed inset-0 z-40 bg-black opacity-25"
      ></div>

      <div
        v-if="infoDropdown !== null"
        @click="closeInfoDropdown"
        class="fixed inset-0 z-40 bg-black opacity-50"
      ></div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Visit {
  name: string;
  property: string;
  date: string;
  time: string;
  status: string;
}

const props = defineProps({
  visits: {
    type: Array as PropType<Visit[]>,
    required: true,
  },
});

const activeDropdown = ref<number | null>(null);
const infoDropdown = ref<number | null>(null);

const closeDropdown = () => {
  activeDropdown.value = null;
};

const closeInfoDropdown = () => {
  infoDropdown.value = null;
};

// Function to handle dropdown option click
const handleDropdownClick = (action: any, item: any) => {
  if (action === "view") {
    return router.push(`/dashboard/tenant-mgt/${item.id}`);
  }

  if (action === "message") {
    return router.push(`/dashboard/tenant-mgt/${item.id}`);
  }
  closeDropdown();
};

const toggleDropdown = (index: number) => {
  if (activeDropdown.value === index) {
    activeDropdown.value = null;
  } else {
    activeDropdown.value = index;
  }
};

const toggleInfoDropdown = (index: number) => {
  if (infoDropdown.value === index) {
    infoDropdown.value = null;
  } else {
    infoDropdown.value = index;
  }
};
</script>
<!-- 
<style scoped>
/* Custom styles for the arrow on top of the modal */
.relative div::before {
  content: "";
  position: absolute;
  top: -0.5rem;
  left: 2.5rem;
  width: 1rem;
  height: 1rem;
  background-color: white;
  transform: rotate(45deg);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
</style> -->
