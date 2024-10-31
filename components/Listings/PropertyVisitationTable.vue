<template>
 <main class="p-6 lg:p-0">
    <div v-if="!loading && visitations?.length" class="rounded-md border-[0.5px] border-gray-50 bg-white">
        <table
          class="w-full mt-2 table-fixed text-sm"
        >
          <thead>
            <tr class="bg-[#F9FAFB] rounded-lg">
              <th class="text-left py-3 text-[#667185] pl-4">Day</th>
              <th class="text-left py-3 text-[#667185]">Time</th>
            </tr>
          </thead>
          <tbody class="space-y-6">
            <tr v-for="(item, index) in visitations" :key="index" class="">
              <td class="text-[#1D2739] py-3 pl-4">{{ getDayName(item?.date) ?? "Nil" }}</td>
              <td class="text-[#1D2739] py-3">{{ item?.time ?? "Nil" }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <section v-else-if="loading && !visitations?.length">
        <div
          class="rounded-md h-16 bg-gray-100 animate-pulse p-4 w-full mx-auto mt-10"
        ></div>
      </section>
      <div
      v-else
      class="bg-white px-4 py-5 sm:p-6 h-80 rounded-lg flex flex-col gap-y-4 justify-center border items-center border-gray-50"
    >
      <img
        :src="dynamicIcons('payment-empty-state')"
        alt="leases empty state"
        class=""
      />
      <p class="text-[#1D2739]">No visitations schedule available</p>
    </div>
 </main>
</template>

<script setup lang="ts">
import { useFetchVisitations } from "@/composables/modules/visitation/fetch";
import { useDayFromDate } from '@/composables/core/useDayFromDate';
import { useUser } from "@/composables/auth/user";
const { user } = useUser();
const { getVisitations, loading, visitations } = useFetchVisitations();
const { getDayName, getDayNumber } = useDayFromDate();

const props = defineProps({
  property: {
    type: Object,
  },
});

onMounted(() => {
  getVisitations(user.value.id, props.property.id);
});
</script>
