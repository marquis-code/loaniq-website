<template>
    <div>
        <div class="sm:block">
          <div class="">
            <nav class="-mb-px flex space-x-8 [&_a]:cursor-pointer" aria-label="Tabs">
              <a :class="[activeTab === 'upcoming_events' ? 'border-[#326543] text-[#326543]' : 'border-transparent text-gray-500']" href.prevent="#" @click="$emit('setTab', 'upcoming_events')"
                class="whitespace-nowrap cur border-b-4 px-1 pt-4 pb-2 text-sm font-light">Upcoming
                events</a>
              <a :class="[activeTab === 'overdue' ? 'border-[#326543] text-[#326543]' : 'border-transparent text-gray-500']" href.prevent="#" @click="$emit('setTab', 'overdue')"
                class="whitespace-nowrap cur border-b-4 px-1 pt-4 pb-2 text-sm font-light">Overdue</a>
              <a :class="[activeTab === 'recent_applications' ? 'border-[#326543] text-[#326543]' : 'border-transparent text-gray-500']" href.prevent="#" @click="$emit('setTab', 'recent_applications')"
                class="whitespace-nowrap cur border-b-4 px-1 pt-4 pb-2 text-sm font-light"
                aria-current="page">Recent applications</a>
              <a :class="[activeTab === 'maintenance_requests' ? 'border-[#326543] text-[#326543]' : 'border-transparent text-gray-500']" href.prevent="#" @click="$emit('setTab', 'maintenance_requests')"
                class="whitespace-nowrap cur border-b-4 px-1 pt-4 pb-2 text-sm font-light">Maintenance
                requests</a>
            </nav>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (event: 'setTab', state: string): void
}>()

const props = defineProps({
    activeTab: {
        type: String
    }
})
</script>

