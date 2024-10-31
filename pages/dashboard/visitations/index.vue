<template>
   <main class="container mx-auto">
    <VisitationsHeader @setTab="handleSetTab" />
     <VisitationsGrid v-if="activeTab === 'grid'" :visits="visits" />
     <VisitationsCalender v-if="activeTab === 'calendar'" />
   </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard"
})

const activeTab = ref('grid')

const handleSetTab = (item: any) => {
  console.log(item, 'item here')
  activeTab.value = item
}

interface Visit {
    name: string;
    property: string;
    date: string;
    time: string;
    status: string;
}

const visits = ref<Visit[]>([
    { name: "Jackie Goodwin", property: "Ortiz - Kunde", date: "30/05/2024", time: "12:00 PM", status: "Scheduled" },
    { name: "Henry Veum", property: "Hodkiewicz - Cummings", date: "30/05/2024", time: "12:00 PM", status: "Scheduled" },
    { name: "Shari Lang", property: "Gislason - Crona", date: "30/05/2024", time: "12:00 PM", status: "Completed" },
    { name: "Kristina Schinner", property: "Cassin - Simonis", date: "30/05/2024", time: "12:00 PM", status: "Completed" },
    { name: "Alex Brown", property: "Parisian - Haley", date: "06/06/2024", time: "10:00 AM", status: "No Show" },
    { name: "Pat Haley", property: "Torp, O'Kon and Gislason", date: "06/06/2024", time: "10:00 AM", status: "Completed" },
    { name: "Kristopher Beatty", property: "Lubowitz, Berge and Cartwright", date: "06/06/2024", time: "10:00 AM", status: "Completed" },
    { name: "Franklin Jakubowski", property: "Fritsch LLC", date: "06/06/2024", time: "10:00 AM", status: "No Show" }
]);
</script>
