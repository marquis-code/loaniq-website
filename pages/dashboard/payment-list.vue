<template>
 <main class="space-y-6">
    <div class="flex items-center border-b border-gray-50 pb-4">
        <button class="flex items-center gap-x-3 bg-gray-25 rounded-lg px-5 py-3.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 5C12.5 5 7.50001 8.68242 7.5 10C7.49999 11.3177 12.5 15 12.5 15" stroke="#292929" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="font-semibold">Back</span>            
        </button>
        <p class="font-bold text-xl">Upcoming (Due) payments</p>
    </div>
    <div class="px-4 sm:px-6 lg:px-8 border border-gray-25 rounded-xl bg-white max-w-4xl mx-auto">
        <div class="mt-8 flow-root">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle">
                <table class="min-w-full divide-y divide-gray-50">
                    <thead>
                      <tr>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">Tenant name</th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-gray-900">Property</th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-gray-900">Payment frequency</th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-gray-900">Payment count</th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-gray-900">Expiry date</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-50 bg-white">
                      <tr class="h-16" v-for="(item, idx) in expiringLeases" :key="idx">
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6 lg:pl-8">{{ item.tenant_name ?? 'Nil'}}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.property ?? 'Nil'}}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.payment_frequency ?? 'Nil'}}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.payment_count ?? 'Nil'}}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {{ item.expiry_date ?? 'Nil' }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
            </div>
          </div>
        </div>
      </div>
 </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard-zero",
});

const expiringLeases = ref([
  {
    tenant_name: 'Gary Schimmel',
    property: 'Morar - Parisian',
    payment_frequency: 'Yearly',
    payment_count: '1/1',
    expiry_date: '22/03/2024'
  },
  {
    tenant_name: 'Gary Schimmel',
    property: 'Morar - Parisian',
    payment_frequency: 'Yearly',
    payment_count: '1/1',
    expiry_date: '22/03/2024'
  },
  {
    tenant_name: 'Gary Schimmel',
    property: 'Morar - Parisian',
    payment_frequency: 'Yearly',
    payment_count: '1/1',
    expiry_date: '22/03/2024'
  },
  {
    tenant_name: 'Gary Schimmel',
    property: 'Morar - Parisian',
    payment_frequency: 'Yearly',
    payment_count: '1/1',
    expiry_date: '22/03/2024'
  },
  {
    tenant_name: 'Gary Schimmel',
    property: 'Morar - Parisian',
    payment_frequency: 'Yearly',
    payment_count: '1/1',
    expiry_date: '22/03/2024'
  }
])

</script>