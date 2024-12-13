<!-- components/InvestmentOfferings.vue -->
<template>
    <section class="max-w-7xl mx-auto px-4 py-16">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Offerings open for investment</h2>
        <p class="text-gray-600">
          Explore pre-vetted investment opportunities available in a growing number of industry categories.
        </p>
      </div>
  
      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InvestmentCard 
          v-for="project in projects" 
          :key="project.id" 
          :project="project"
        />
      </div>
  
      <!-- View All Button -->
      <div class="text-center mt-12">
        <button class="border-2 border-pink-400 text-pink-400 px-8 py-3 uppercase hover:bg-pink-50 transition-colors">
          View all projects
        </button>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import investment from '@/assets/img/investment.png'
  interface Project {
    id: number;
    title: string;
    location: string;
    description: string;
    image: string;
    tags: string[];
    raised: number;
    goal: number;
    securityType: string;
    investmentMultiple: string;
    maturity: string;
    minInvestment: number;
  }
  
  const projects = ref<Project[]>([
    {
      id: 1,
      title: 'Oxalis',
      location: 'Brooklyn, NY',
      description: 'A recognized leader in language immersion & early education, opening second school.',
      image: investment,
      tags: ['HOUSE', 'FAMILY BUSINESS'],
      raised: 574920,
      goal: 1000000,
      securityType: 'Revenue Sharing Note',
      investmentMultiple: '1.4x',
      maturity: '48 Months',
      minInvestment: 100
    },
    {
      id: 1,
      title: 'Oxalis',
      location: 'Brooklyn, NY',
      description: 'A recognized leader in language immersion & early education, opening second school.',
      image: investment,
      tags: ['HOUSE', 'FAMILY BUSINESS'],
      raised: 574920,
      goal: 1000000,
      securityType: 'Revenue Sharing Note',
      investmentMultiple: '1.4x',
      maturity: '48 Months',
      minInvestment: 100
    },
    {
      id: 1,
      title: 'Oxalis',
      location: 'Brooklyn, NY',
      description: 'A recognized leader in language immersion & early education, opening second school.',
      image: investment,
      tags: ['HOUSE', 'FAMILY BUSINESS'],
      raised: 574920,
      goal: 1000000,
      securityType: 'Revenue Sharing Note',
      investmentMultiple: '1.4x',
      maturity: '48 Months',
      minInvestment: 100
    },
    {
      id: 1,
      title: 'Oxalis',
      location: 'Brooklyn, NY',
      description: 'A recognized leader in language immersion & early education, opening second school.',
      image: investment,
      tags: ['HOUSE', 'FAMILY BUSINESS'],
      raised: 574920,
      goal: 1000000,
      securityType: 'Revenue Sharing Note',
      investmentMultiple: '1.4x',
      maturity: '48 Months',
      minInvestment: 100
    },
    {
      id: 1,
      title: 'Oxalis',
      location: 'Brooklyn, NY',
      description: 'A recognized leader in language immersion & early education, opening second school.',
      image: investment,
      tags: ['HOUSE', 'FAMILY BUSINESS'],
      raised: 574920,
      goal: 1000000,
      securityType: 'Revenue Sharing Note',
      investmentMultiple: '1.4x',
      maturity: '48 Months',
      minInvestment: 100
    },
    {
      id: 1,
      title: 'Oxalis',
      location: 'Brooklyn, NY',
      description: 'A recognized leader in language immersion & early education, opening second school.',
      image: investment,
      tags: ['HOUSE', 'FAMILY BUSINESS'],
      raised: 574920,
      goal: 1000000,
      securityType: 'Revenue Sharing Note',
      investmentMultiple: '1.4x',
      maturity: '48 Months',
      minInvestment: 100
    },
  ]);
  </script>