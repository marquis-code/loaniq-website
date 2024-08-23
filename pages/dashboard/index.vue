<template>
  <main class="space-y-6">
    <DashboardStats />
    <section class="flex gap-x-6">
      <div class="w-full lg:max-w-6xl space-y-6">
        <CategoryTabs :activeTab="activeTab" @setTab="setTab" />

        <div class="space-y-5">
          <ExpiringLeases :expiringLeases="expiringLeases" />
          <UpcomingPayment :upcomingPayments="upcomingPayments" />
        </div>
      </div>
      <div class="w-full lg:max-w-lg">
        <MembershipActivities :membersActivities="membersActivities" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  middleware: 'auth'
});
const router = useRouter()

const activeTab = ref('upcoming_events')

const setTab = (item: string) => {
  activeTab.value = item
}

onMounted(() => {
  router.push('/login')
})

const membersActivities = ref([
  {
  description: 'Vickie Will assigned Cummings, Frami and Lynch apartments to agent Adetunde Salami',
  date: '5th April, 2024 | 11:54 am'
 },
 {
  description: 'Vickie Will assigned Cummings, Frami and Lynch apartments to agent Adetunde Salami',
  date: '5th April, 2024 | 11:54 am'
 },
 {
  description: 'Vickie Will assigned Cummings, Frami and Lynch apartments to agent Adetunde Salami',
  date: '5th April, 2024 | 11:54 am'
 },
 {
  description: 'Vickie Will assigned Cummings, Frami and Lynch apartments to agent Adetunde Salami',
  date: '5th April, 2024 | 11:54 am'
 },
 {
  description: 'Vickie Will assigned Cummings, Frami and Lynch apartments to agent Adetunde Salami',
  date: '5th April, 2024 | 11:54 am'
 }
])

const upcomingPayments = ref([
 {
  tenant_name: 'Jay Witting',
  category: 'Security',
  amount: '116,120.52',
  date: '22/03/2024'
 },
 {
  tenant_name: 'Jay Witting',
  category: 'Security',
  amount: '116,120.52',
  date: '22/03/2024'
 },
 {
  tenant_name: 'Jay Witting',
  category: 'Security',
  amount: '116,120.52',
  date: '22/03/2024'
 },
 {
  tenant_name: 'Jay Witting',
  category: 'Security',
  amount: '116,120.52',
  date: '22/03/2024'
 },
 {
  tenant_name: 'Jay Witting',
  category: 'Security',
  amount: '116,120.52',
  date: '22/03/2024'
 }
])

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
