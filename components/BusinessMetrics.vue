<template>
    <div class="max-w-7xl mx-auto px-4 py-16 text-center">
      <div data-aos="fade-up" class="inline-block px-4 py-2 mb-6 bg-gray-50 rounded-full">
        <span class="text-[#284d79] font-medium">Metrics</span>
      </div>
      
      <h1 data-aos="fade-up" class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 -mt-2">
        <!-- With 10+ years of experience -->
        You can count on us!

      </h1>
      
      <p data-aos="fade-up" class="text-gray-600 max-w-3xl mx-auto mb-16">
        With our commitment to personalised solutions, transparent processes, and unparalleled customer support, we ensure your journey to success is guided by expertise and trust.

        <!-- Our commitment to personalized solutions, transparent processes, and unparalleled customer support ensures your path to success is guided with expertise and trust. -->
      </p>
  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Staff Moved -->
        <div class="bg-[#F8F9FF] rounded-3xl p-8">
          <div data-aos="fade-up" class="text-[#284d79] text-5xl font-bold mb-4">
            ₦{{ numberWithCommas(currentValues.staff) }}+
          </div>
          <h3 data-aos="fade-up" class="text-gray-900 text-xl font-semibold mb-2">Loan In 5 Minutes</h3>
          <!-- <p data-aos="fade-up" class="text-gray-600 text-sm">
            We've moved 10k+ staffs across 100+ different routes.
          </p> -->
        </div>
  
        <!-- Business Clients -->
        <div class="bg-[#F8F9FF] rounded-3xl p-8">
          <div data-aos="fade-up" class="text-[#284d79] text-5xl font-bold mb-4">
            {{ currentValues.clients }}+
          </div>
          <h3 data-aos="fade-up" class="text-gray-900 text-xl font-semibold mb-2">Loans Processed</h3>
          <!-- <p data-aos="fade-up" class="text-gray-600 text-sm">
            Our clients have about 10k+ staff that use our Transports.
          </p> -->
        </div>
  
        <!-- Trips Taken -->
        <div class="bg-[#F8F9FF] rounded-3xl p-8">
          <div data-aos="fade-up" class="text-[#284d79] text-5xl font-bold mb-4">
            <!-- {{ numberWithCommas(currentValues.trips) }}+ -->
            {{ currentValues.trips }}+
          </div>
          <h3 data-aos="fade-up" class="text-gray-900 text-xl font-semibold mb-2">Happy Customers</h3>
          <!-- <p data-aos="fade-up" class="text-gray-600 text-sm">
            We have covered a lot of miles and taken 3M+ trips.
          </p> -->
        </div>
  
        <!-- Vehicles -->
        <!-- <div class="bg-[#F8F9FF] rounded-3xl p-8">
          <div data-aos="fade-up" class="text-[#284d79] text-5xl font-bold mb-4">
            {{ currentValues.vehicles }}+
          </div>
          <h3 data-aos="fade-up" class="text-gray-900 text-xl font-semibold mb-2">Happy Clients</h3>
          <p data-aos="fade-up" class="text-gray-600 text-sm">
            We have vehicle partners that supply fleet of vehicles.
          </p>
        </div> -->
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  interface Metrics {
    staff: number;
    clients: number;
    trips: number;
    vehicles: number;
  }
  
  const targetValues: Metrics = {
    staff: 50000000,
    clients: 1000,
    trips: 1000,
    vehicles: 330
  };
  
  const currentValues = ref<Metrics>({
    staff: 0,
    clients: 0,
    trips: 0,
    vehicles: 0
  });
  
  const numberWithCommas = (x: number): string => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  const easeOutQuad = (t: number): number => t * (2 - t);
  
  const animateNumber = (key: keyof Metrics, duration: number = 2000) => {
    const startTime = Date.now();
    const startValue = 0;
    const endValue = targetValues[key];
    
    const updateNumber = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      if (elapsed < duration) {
        const progress = easeOutQuad(elapsed / duration);
        currentValues.value[key] = Math.round(startValue + (endValue - startValue) * progress);
        requestAnimationFrame(updateNumber);
      } else {
        currentValues.value[key] = endValue;
      }
    };
    
    requestAnimationFrame(updateNumber);
  };
  
  onMounted(() => {
    // Start animations with slightly different durations
    setTimeout(() => {
      animateNumber('staff', 2000);
      animateNumber('clients', 1500);
      animateNumber('trips', 2500);
      animateNumber('vehicles', 1800);
    }, 100); // Small delay to ensure DOM is ready
  });
  </script>