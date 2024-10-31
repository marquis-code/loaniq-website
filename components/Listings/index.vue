<template>
    <main class="">
      <section>
        <div ref="propertyCardsRef"
          class="p-6 container mx-auto space-y-6 lg:space-y-0 lg:flex flex-wrap gap-7"
        >
          <div
            v-if="!loadingProperties && propertiesList.length"
            v-for="(property, index) in propertiesList"
            :key="index"
            class="relative cursor-pointer min-w-[300px] w-full lg:max-w-[350px] bg-white"
          >
            <button
              @click="toggleLike(index, property)"
              class="absolute top-6 right-6 text-white hover:text-red-500 focus:outline-none"
            >
              <svg
                v-if="property.bookmarked"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#D42620" />
                <path
                  d="M27.4626 11.9942C24.7809 10.3492 22.4404 11.0121 21.0344 12.068C20.4578 12.501 20.1696 12.7174 20 12.7174C19.8304 12.7174 19.5422 12.501 18.9656 12.068C17.5596 11.0121 15.2191 10.3492 12.5374 11.9942C9.01807 14.1529 8.22172 21.2749 16.3395 27.2834C17.8857 28.4278 18.6588 29 20 29C21.3412 29 22.1143 28.4278 23.6605 27.2834C31.7783 21.2749 30.9819 14.1529 27.4626 11.9942Z"
                  fill="white"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
  
              <svg
                v-else
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="black"
                  fill-opacity="0.6"
                />
                <path
                  d="M27.4626 11.9942C24.7809 10.3492 22.4404 11.0121 21.0344 12.068C20.4578 12.501 20.1696 12.7174 20 12.7174C19.8304 12.7174 19.5422 12.501 18.9656 12.068C17.5596 11.0121 15.2191 10.3492 12.5374 11.9942C9.01807 14.1529 8.22172 21.2749 16.3395 27.2834C17.8857 28.4278 18.6588 29 20 29C21.3412 29 22.1143 28.4278 23.6605 27.2834C31.7783 21.2749 30.9819 14.1529 27.4626 11.9942Z"
                  stroke="#F9FAFB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <img
              @click="router.push(`/dashboard/listings/${property.id}/preview`)"
              v-if="property?.images?.length"
              :src="property?.images[0]"
              class="rounded-lg cursor-pointer object-cover h-56 w-full"
              alt="alt"
            />
            <img
              @click="router.push(`/dashboard/listings/${property.id}/preview`)"
              v-else
              class="rounded-lg cursor-pointer"
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="alt"
            />
            <section
              @click="router.push(`/dashboard/listings/${property.id}/preview`)"
              class="space-y-2 cursor-pointer"
            >
              <div>
                <h3 class="text- font-medium text-[#1D2739] mt-4">
                  {{ property?.name }}
                </h3>
                <p class="text-[#79797F] text-sm items-center flex gap-x-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.94366 12.4644C7.69072 12.7012 7.35257 12.8337 7.00064 12.8337C6.64872 12.8337 6.31062 12.7012 6.05762 12.4644C3.74093 10.2822 0.636277 7.84435 2.15032 4.30513C2.96895 2.3915 4.93403 1.16699 7.00064 1.16699C9.06727 1.16699 11.0323 2.3915 11.851 4.30513C13.3631 7.83992 10.2661 10.2897 7.94366 12.4644Z"
                      fill="#5B8469"
                      stroke="#5B8469"
                    />
                    <path
                      d="M9.04165 6.41667C9.04165 7.54425 8.12756 8.45833 6.99998 8.45833C5.8724 8.45833 4.95831 7.54425 4.95831 6.41667C4.95831 5.28908 5.8724 4.375 6.99998 4.375C8.12756 4.375 9.04165 5.28908 9.04165 6.41667Z"
                      fill="#EAEAEA"
                      stroke="#5B8469"
                    />
                  </svg>
  
                  {{ property?.address }}
                </p>
              </div>
              <p class="text-[#1D2739] font-medium text-sm">
                {{ property.bedroomCount }} bedrooms |
                {{ property.bathroomCount }} baths | {{ property.size }}
                {{ property.sizeUnit }}
              </p>
              <p class="text-[#1D2739] text-xs">{{ property.available }}</p>
              <p class="text-[#1D2739] text-xs">
                {{ property.availableRoomsCount }} rooms avail.
                <span class="font-medium text-[#326543]">Now</span> |
                {{ property.unavailableRoomsCount }} room avail. on
                {{ moment(property.createdAt).format("MMMM Do YYYY") }}
              </p>
            </section>
          </div>
          <div
            v-if="loadingProperties"
            class="border-[0.5px] bg-gray-100 shadow rounded-md w-full mx-auto"
          >
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-md bg-slate-100 h-96 w-full"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script setup lang="ts">
  import "shepherd.js/dist/css/shepherd.css";
  import moment from "moment";
  import { useGetProperties } from "@/composables/modules/property/fetchProperties";
  import { useBookmarkProperty } from "@/composables/modules/property/bookmark";
  const { bookmarkProperty, loading } = useBookmarkProperty();
  import { useUser } from '@/composables/auth/user'
    const { user } = useUser()
  import { useRouter, useRoute } from "vue-router";
  
  const router = useRouter();
  const route = useRoute();
  
  
  const propertyCardsRef = ref(null)

  const {
    propertiesList,
    loadingProperties,
  } = useGetProperties();
  
  
  
  // Watch for query parameter changes to update the view
  watch(
    () => route.query.view,
    (newView) => {
      if (newView === "grid" || newView === "map") {
        viewType.value = newView; // Update view type based on URL query
      }
    },
    { immediate: true }
  );
  
  // Function to update the query parameter in the URL
  const updateQueryParam = (key: string, value: string) => {
    router.push({
      query: {
        ...route.query,
        [key]: value,
      },
    });
  };
  
  
  const isFilterModalVisible = ref(false);
  
  
  const toggleLike = (index: number, property: any) => {
    propertiesList.value[index].bookmarked = !propertiesList.value[index].bookmarked;
    bookmarkProperty(property.id);
  };
  
  
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".modal-content")) {
      isFilterModalVisible.value = false;
    }
  };
  
  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
  });
  

  </script>
  
  <style scoped>
  .hide-scroll-bar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scroll-bar::-webkit-scrollbar {
    display: none;
  }
  
  /* Shepherd step element background color */
  .shepherd-element {
    background-color: red !important; /* Set the background to red */
    border-radius: 8px; /* Optional: Add border-radius for rounded corners */
    color: white; /* Set the text color to white to contrast with red */
  }
  
  /* Customize the text inside the step */
  .shepherd-content {
    color: white !important; /* Ensure text is readable on a red background */
  }
  
  /* Customize the button styles (e.g., Next, Finish) */
  .shepherd-button {
    background-color: white; /* White background for buttons */
    color: red; /* Red text color for buttons */
    border: 1px solid red; /* Optional: Red border for buttons */
  }
  
  /* Customize button hover state */
  .shepherd-button:hover {
    background-color: red; /* Red background on hover */
    color: white; /* White text on hover */
  }
  </style>