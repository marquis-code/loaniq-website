<template>
  <main>
    <div class="flex flex-col lg:flex-row gap-6">
  
      <section class="lg:w-7/12 space-y-6">
        <div class="max-w-3xl mx-auto bg-white">
          <!-- Dynamic Tabs -->
          <div class="mt-4 flex space-x-2 overflow-x-auto hide-scrollbar scrollbar-hide">
            <button
              :class="[activeTab === 'property-overview' ? 'bg-[#EBE5E0]' : 'bg-[#F0F2F5]']"
              @click="handleSelectedTab('property-overview')"
              class="text-[#292929] text-sm py-2 px-4  rounded-md flex-shrink-0 whitespace-nowrap w-auto"
            >
              Property Overview
            </button>
            <button
              :class="[activeTab === 'common-areas' ? 'bg-[#EBE5E0]' : 'bg-[#F0F2F5]']"
              @click="handleSelectedTab('common-areas')"
              class="text-[#292929] text-sm py-2 px-4 rounded-md flex-shrink-0 whitespace-nowrap w-auto"
            >
              Common Areas
            </button>
            <button
              v-for="room in tabs"
              :key="room.id"
              :class="[activeTab === room.name ? 'bg-[#EBE5E0]' : 'bg-[#F0F2F5]']"
              @click="handleSelectedTab(room, 'dynamic')"
              class="text-[#292929] text-sm py-2 px-4 rounded-md flex-shrink-0 whitespace-nowrap w-auto"
            >
              {{ room.name }}
            </button>
          </div>

          <div v-if="activeTab === 'property-overview'" class="">
            
            <!-- <p class="text-sm text-gray-600">{{ property.description.value ?? 'No description available' }}</p> -->
            <h2  class="text-sm text-[#1D2739] font-medium bg-white border-[0.5px] py-3 px-3 rounded-sm border-gray-50">Property Description</h2>
            <!-- <div class="pt-4 bg-white rounded-lg border-gray-50 p-3 border-[0.5px] text-sm">
              <p class="text-[#1D2739] mt-2  leading-snug text-sm">
                {{property.description ?? 'Nil'}}
                <a v-if="property?.description?.length > 50" href="#" class="text-blue-500">View more</a>
              </p>
            </div> -->

            <div class="pt-4 bg-white rounded-lg border-gray-50 p-3 border-[0.5px] text-sm">
              <p class="text-[#1D2739] mt-2 leading-snug text-sm">
                {{ isExpanded ? property.description : truncatedText }}
                <a v-if="property?.description?.length > 50" href="#" @click.prevent="toggleView" class="text-blue-500">
                  {{ isExpanded ? 'View less' : 'View more' }}
                </a>
              </p>
            </div>
      
            <!-- Property Highlights -->
            <h3 class="text-base text-[#1D2739] font-medium bg-white border-[0.5px] py-3 px-3 rounded-sm border-gray-50">Property Highlights</h3>
            <div class="">
              <div class="gap-4 space-y-6 bg-white rounded-lg border-gray-50 p-3 border-[0.5px] text-sm">
            <div class="flex justify-between items-center">
                <div class="text-[#667185]">Property size <span class="font-medium text-[#1D2739]">{{property?.size ?? 'Nil'}} {{property?.sizeUnit ?? 'Nil'}}</span></div>
                <div class="text-[#667185]">Flooring type <span class="font-medium text-[#1D2739]">{{property?.flooringType?.name ?? 'Nil'}}</span></div>
            </div>
          <div class="flex justify-between items-center">
            <div class="text-[#667185]">Number of bedrooms <span class="font-medium text-[#1D2739]">{{property?.bedroomCount ?? 'Nil'}}</span></div>
            <div class="text-[#667185]">Number of bathrooms <span class="font-medium text-[#1D2739]d">{{property?.bathroomCount ?? 'Nil'}}</span></div>
          </div>
                <div class="text-[#667185]">Floor number <span class="font-medium text-[#1D2739]">{{property?.floorNumber ?? 'Nil'}}</span></div>
          <div class="flex justify-between items-center">
            <div class="text-[#667185]">Architecture <span class="font-medium text-[#1D2739]">{{property?.houseType?.name ?? 'Nil'}}</span></div>
            <div class="text-[#667185]">{{property?.availableRoomsCount ?? 'Nil'}} rooms available <span class="text-[#326543]">Now</span></div>
          </div>
              </div>
      
              <!-- Co-living with -->
              <h2 class="text-sm font-medium text-[#667185] mt-6 border-[0.5px] py-3 px-3 rounded-lg border-gray-50">Co-living with <span class="text-[#1D2739]">{{property?.bedroomCount - 1}} Persons</span></h2>
              <div>
                <table class="w-full mt-2 table-fixed text-sm">
                  <thead>
                    <tr class="bg-[#F9FAFB] rounded-lg">
                      <th class="text-left text-sm py-3 pl-6 font-medium text-[#1D2739]">Occupants</th>
                      <th class="text-left text-sm py-3 font-medium text-[#1D2739]">Room occupied</th>
                      <th class="text-left text-sm py-3 font-medium text-[#1D2739]">Available from</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(room, index) in formattedRoomData" :key="index">
                      <td class="text-[#1D2739] py-3 pl-6">{{ room.occupant }}</td>
                      <td class="text-[#1D2739] py-3">{{ room.roomOccupied }}</td>
                      <td class="text-[#1D2739] py-3">{{ room.availableFrom }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
      
            <!-- Property Visitation -->
         <section v-if="property?.rentalApplication">
          <h2 class="text-sm font-medium text-[#667185] mt-6 border-[0.5px] py-3 px-3 rounded-lg border-gray-50">Property visitation</h2>
          <!-- <div class="rounded-md border-[0.5px] border-gray-50 bg-white">
            <table class="w-full mt-2 table-fixed text-sm">
              <thead>
                <tr class="bg-[#F9FAFB] rounded-lg">
                  <th class="text-left py-3 text-[#667185] pl-4">Day</th>
                  <th class="text-left py-3 text-[#667185]">Time</th>
                </tr>
              </thead>
              <tbody class="space-y-6">
                <tr class="">
                  <td class="text-[#1D2739] py-3  pl-4">Monday</td>
                  <td class="text-[#1D2739] py-3 ">10:00 AM</td>
                </tr>
                <tr class="">
                  <td class="text-[#1D2739] py-3  pl-4">Tuesday</td>
                  <td class="text-[#1D2739] py-3 ">10:00 AM</td>
                </tr>
                <tr class="">
                  <td class="text-[#1D2739] py-3  pl-4">Wednesday</td>
                  <td class="text-[#1D2739] py-3 ">10:00 AM</td>
                </tr>
              </tbody>
            </table>
          </div> -->
          <PropertyVisitationTable :property="property" />
          <div class="mt-5 px-6 lg:p-0">
            <button @click="showBookingModal = true" class="mt-4 w-full bg-[#292929]  text-white py-4 rounded-md">Schedule a visit</button>
         </div>
         </section>
      
            <!-- House Rules -->
            <h2 class="text-sm font-medium text-[#1D2739] mt-6 border-[0.5px] py-3 px-3 rounded-lg border-gray-50">House Rules</h2>
            <div class="">
              <ul v-if="property?.rules?.length" class="space-y-1">
                <p class="border-[0.5px] rounded-lg border-gray-50 py-3 text-sm pl-4">{{property?.rules[0]?.rule }}</p>
                <p class="border-[0.5px] rounded-lg border-gray-50 py-3 text-sm pl-4">{{property?.rules[1]?.rule }}</p>
                <div class="border-[0.5px] rounded-lg border-gray-50 py-3">
                    <p class="py-3 text-sm pl-4">Other rules</p>
                  <div class="pl-5">
                    <ul class="list-disc ml-5 space-y-4 text-sm">
                    <li v-for="(item, idx) in otherRules" :key="idx" class="text-[#1D2739] leading-snug">{{item.rule}}</li>
                     </ul>
                  </div>
                </div>
              </ul>
            </div>
          </div>
    
          <div v-if="activeTab === 'common-areas'" class="mb-6 p-4 mt-4">
            <h3 class="font-semibold text-lg">Common Areas</h3>
            <p class="text-sm text-gray-600">This section provides details about the shared common areas of the property.</p>
            <div class="space-y-6">
              <!-- Gallery Section -->
              <div @click="previewCommonAreaImages" class="flex cursor-pointer items-center border-[0.5px] border-gray-50 space-x-4 bg-white p-4 rounded-lg">
                <img :src="dynamicImage('placeholder.png')" alt="Gallery" class="w-12 h-12 rounded-full">
                <div class="flex-1">
                  <h3 class="text-lg font-medium">Gallery</h3>
                  <p class="text-gray-500 text-sm">Click to view photos of all common areas</p>
                </div>
                <button class="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
          
              <!-- Interior Features Section -->
              <h2 class="text- pl-4 font-medium bg-white border-[0.5px] py-4 border-gray-50">Interior Features</h2>
              <div class="bg-white p-6 rounded-lg border-[0.5px] space-y-4 border-gray-50">  
                <div class="space-y-2">
                  <p class="font-medium text-sm text-[#667185]">
                    Furnished: <span class="font-medium text-gray-900">{{property?.isFurnishedCommonArea ? 'Yes' : 'No'}}</span>
                  </p>
          
                  <div class="space-y-2">
                    <p class="text-sm font- text-[#667185]">Amenities</p>
          
                    <!-- Amenities -->
                    <div class="grid grid-cols-3 gap-3">
                      <div v-for="item in interiorCommonAreas" :key="item.id" class="flex items-center space-x-2 p-2 bg-white border-[0.5px] border-gray-100 rounded-md">
                        <img :src="dynamicImage('roomBg.png')" alt="Living room" class="w-7 h-7">
                        <p class="text-[#1D2739] text-sm">{{item.name}}</p>
                      </div>
                    </div>
                    <button class="mt-2 font-medium text-[#1D2739]">View less</button>
                  </div>
                </div>
              </div>
          
              <!-- Exterior Features Section -->
              <h2 class="text- pl-4 font-medium bg-white border-[0.5px] py-4 border-gray-50">Exterior Feature</h2>
              <div class="bg-white p-6 rounded-lg space-y-4">
                <div class="space-y-2">
                  <p class="text-sm font- text-[#667185]">Amenities</p>
          
                  <!-- Exterior Amenities -->
                  <div class="grid grid-cols-3 gap-3">
                    <div  v-for="item in exteriorCommonAreas" :key="item.id" class="flex items-center space-x-2 p-2 bg-white border-[0.5px] border-gray-100 rounded-md">
                      <img :src="dynamicImage('roomBg.png')" alt="Parking space" class="w-7 h-7">
                      <p class="text-[#1D2739] text-sm">{{item.name}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4" v-if="activeTab !== 'property-overview' && activeTab !== 'common-areas'">
            <div @click="previewRoomImages(activeTab)" class="flex cursor-pointer mb-3 items-center border-[0.5px] border-gray-50 space-x-4 bg-white p-4 rounded-lg">
              <img :src="dynamicImage('placeholder.png')" alt="Gallery" class="w-12 h-12 rounded-full">
              <div class="flex-1">
                <h3 class="text-lg font-medium">Gallery</h3>
                <p class="text-gray-500 text-sm">Click to view photos of {{selectedRoomObj.name}}</p>
              </div>
              <button class="text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div class="flex flex-col space-y-1 mb-6 bg-white rounded-lg border-gray-50 p-3 border-[0.5px] text-sm">
              <p class="text-[#1D2739] text-sm font-medium">Available <span class="text-[#326543]">{{selectedRoomObj?.availability === 'available_now' ? 'Now' : selectedRoomObj?.availability === 'unavailable' ? 'Unavailable' : selectedRoomObj?.availability === 'available_from_date' ? 'Not Available For Now' : ''}}</span></p>
              <p class="text-gray-900 font-medium text-lg">{{ formatCurrency(selectedRoomObj?.rentAmount)}} <span class="text-[#667185] text-sm font-normal">{{selectedRoomObj?.rentFrequency}}</span></p>
            </div>
        

            <div class="mb-6 space-y-3">
              <h3 class="text- pl-4 font-medium text-[#1D2739] bg-white border-[0.5px] py-4 rounded-md border-gray-50">Interior Features</h3>
              
       <section class="font-medium bg-white border-[0.5px] py-4 border-gray-50 rounded-md">

               <p class="text-gray-700 mb-2 pl-4"><span class="font-medium">Furnished:</span> {{selectedRoomObj?.isFurnished ? 'Yes' : 'No'}}</p>
        
               <!-- Amenities -->
               <h4 class="text-gray-500 mb-3 text- pl-4">Amenities</h4>
               <div class="grid grid-cols-3 gap-3 text- p-3">
                 <div v-for="(amenity, index) in selectedRoomObj?.features" :key="index" class="flex items-center p-2 border-[0.5px] rounded-lg space-x-2 bg-white hover:shadow transition-shadow duration-150">
                   <div class="w-8 h-8 flex items-center justify-center rounded-md">
                     <!-- Replace this with actual icon/image if available -->
                     <img src="@/assets/img/roomBg.png" alt="icon" class="w-6 h-6 object-cover" />
                   </div>
                   <p class="text-[#1D2739] text-sm font-medium">{{ amenity.name }}</p>
                 </div>
               </div>
       </section>
              
              <!-- View More Link -->
              <div v-if="selectedRoomObj?.features?.length > 10" class="mt-4">
                <button @click="viewMore" class="text-blue-500 text-sm font-medium hover:underline">View more</button>
              </div>
            </div>
          </div>
    
          <!-- <div v-if="activeTab !== 'property-overview' && activeTab !== 'common-areas'" class="mt-4">
            <div class="flex cursor-pointer items-center border-[0.5px] border-gray-50 space-x-4 bg-white p-4 rounded-lg">
              <img :src="dynamicImage('placeholder.png')" alt="Gallery" class="w-12 h-12 rounded-full">
              <div class="flex-1">
                <h3 class="text-lg font-medium">Gallery</h3>
                <p class="text-gray-500 text-sm">Click to view photos of all common areas</p>
              </div>
              <button class="text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div class="space-y-3">
              <div 
                v-for="(value, key) in selectedRoomObj" 
                :key="key" 
                class="flex justify-between border-[0.5px] p-3 rounded-md items-center gap-x-2 bg-white"
              >
                <p>{{ key }}</p>
                <div v-if="key === 'features'" class="features-container space-y-4">
                  <div v-for="feature in value" :key="feature.name" class="feature-item">
                    <h3 v-if="feature.name" class="feature-name text-sm">{{ feature.name }}</h3>
                    <div v-if="feature.images.length > 0 && feature.name" class="images-container space-y-4">
                      <div
                        v-for="(image, index) in feature.images"
                        :key="index"
                        class="image-wrapper"
                      >
                        <img :src="image" :alt="`${feature.name} Image ${index + 1}`" class="feature-image h-20 w-full" />
                        <span class="image-tag text-xs px-3 py-1 border rounded-lg ">{{ feature.name }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p v-else>{{ value ?? 'Nil' }}</p>
              </div>
            </div>
          </div> -->
          
        </div>
      </section>
      <!-- Right Section -->
      <div class="lg:w-1/2 space-y-6 p-4 lg:p-0">
        <!-- Property Manager -->
        <div v-if="!!!property?.rentalApplication" class="bg-[#F0F2F5] p-6 rounded-md">
            <div class="flex items-center justify-between space-x-4">
          <div class="flex items-center space-x-4">
            <img  :src="dynamicImage(propertyManagerImage)" alt="Property Manager" class="w-10 h-10 rounded-full">
            <div>
              <h3 class="font-bold text-[#1D2739]">{{property?.agent?.firstName}} {{property?.agent?.lastName}}</h3>
              <p class="text-xs text-[#1D2739]">Property Manager</p>
            </div>
          </div>
          <div class="ml-auto flex space-x-2">
            <button class="p-2 rounded-full">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="22" fill="#EBE5E0"/>
                <path d="M15.1483 21.9523C14.3583 20.5747 13.9769 19.4499 13.7469 18.3097C13.4067 16.6233 14.1852 14.976 15.4748 13.9249C16.0199 13.4806 16.6447 13.6324 16.967 14.2107L17.6946 15.5161C18.2714 16.5508 18.5598 17.0682 18.5026 17.6167C18.4454 18.1652 18.0565 18.6119 17.2786 19.5053L15.1483 21.9523ZM15.1483 21.9523C16.7474 24.7406 19.2569 27.2514 22.0483 28.8523M22.0483 28.8523C23.4259 29.6423 24.5507 30.0238 25.691 30.2538C27.3773 30.594 29.0247 29.8155 30.0757 28.5258C30.52 27.9808 30.3682 27.356 29.79 27.0337L28.4846 26.306C27.4498 25.7292 26.9325 25.4409 26.384 25.4981C25.8355 25.5552 25.3887 25.9442 24.4953 26.722L22.0483 28.8523Z" stroke="#1D2739" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M26.1663 14.5V21.1667M29.4997 17.8333H22.833" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                
            </button>
            <button @click="sendSms" class="p-2 rounded-full">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="22" fill="#5B8469"/>
                <path d="M22.417 14.5031C21.6711 14.492 20.9209 14.5107 20.1915 14.5592C16.7056 14.7909 13.929 17.607 13.7005 21.1422C13.6558 21.8341 13.6558 22.5506 13.7005 23.2424C13.7837 24.53 14.3532 25.7222 15.0236 26.7288C15.4128 27.4336 15.1559 28.3132 14.7505 29.0815C14.4582 29.6355 14.312 29.9125 14.4294 30.1126C14.5467 30.3127 14.8089 30.3191 15.3332 30.3318C16.37 30.3571 17.0692 30.0631 17.6242 29.6538C17.939 29.4217 18.0964 29.3057 18.2049 29.2923C18.3133 29.279 18.5268 29.3669 18.9537 29.5427C19.3373 29.7007 19.7828 29.7982 20.1915 29.8254C21.3783 29.9043 22.6199 29.9045 23.8092 29.8254C27.295 29.5937 30.0717 26.7777 30.3002 23.2424C30.3354 22.6967 30.3428 22.1356 30.3225 21.5833" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24.5 16.5837H30.3333M27.4167 13.667V19.5003" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.9956 22.417H22.003M25.3252 22.417H25.3327M18.666 22.417H18.6735" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
            </button>
          </div>
          </div>
         <div v-if="showApplicationBtn" class="mt-6">
            <button @click="openRentalApplicationModal = true" class="mt-4 w-full bg-[#292929] text-white py-3 text-sm rounded-md">Send application</button>
         </div>
        </div>
  
        <!-- Neighborhood Amenities -->
        <h3 class="text-base text-[#1D2739] font-medium bg-white border-[0.5px] py-3 px-3 rounded-s border-gray-50">Neighborhood Amenities</h3>
        <div class="px-3">
          <!-- Render buttons for each type -->
          <!-- <div class="overflow-x-auto scrollbar-hidden">
            <div class="mb-4 flex space-x-2 w-max">
              <button
                v-for="type in amenityTypes"
                :key="type"
                @click="toggleVisibility(type)"
                :class="[
                  'px-4 py-2 rounded text-sm',
                  visibleType === type
                    ? 'bg-[#EBE5E0] text-[#344054]'
                    : 'bg-[#F0F2F5]',
                ]"
              >
                {{ type }}
              </button>
            </div>
          </div> -->

          <div class="relative">
            <!-- Left Arrow -->
            <button
              v-if="isScrollable && showLeftArrow"
              @click="scrollLeft"
              class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10"
            >
              &#9664;
            </button>
        
            <div class="overflow-x-auto scrollbar-hidden" ref="scrollContainer" @scroll="checkScrollPosition">
              <div class="mb-4 flex space-x-2 w-max relative">
                <button
                  v-for="type in amenityTypes"
                  :key="type"
                  @click="toggleVisibility(type)"
                  :class="[
                    'px-4 py-2 rounded text-sm',
                    visibleType === type ? 'bg-[#EBE5E0] text-[#344054]' : 'bg-[#F0F2F5]',
                  ]"
                >
                  {{ type }}
                </button>
              </div>
            </div>
        
            <!-- Right Arrow -->
            <button
              v-if="isScrollable && showRightArrow"
              @click="scrollRight"
              class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10"
            >
              &#9654;
            </button>
          </div>
  
          <!-- Render amenities based on selected type -->
            <div
    v-for="type in amenityTypes"
    :key="type"
    v-show="visibleType === type"
    class="h-[300px] overflow-y-auto custom-scrollbar"
  >
    <div
      v-for="amenity in groupedAmenities[type]"
      :key="amenity.id"
      class="px-4 py-2 mb-2 border-[0.5px] rounded-lg flex items-center gap-x-2"
    >
      <div class="flex items-center">
        <svg
          width="50"
          height="49"
          viewBox="0 0 50 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="0.5" width="48" height="48" rx="24" fill="white" />
          <rect x="1" y="0.5" width="48" height="48" rx="24" stroke="#F9FAFB" />
          <rect x="3" y="2.5" width="44" height="44" rx="22" fill="#F4F4F4" />
          <path
            d="M22.917 27C22.1549 27.1715 21.667 27.4351 21.667 27.7307C21.667 28.2476 23.1594 28.6667 25.0003 28.6667C26.8413 28.6667 28.3337 28.2476 28.3337 27.7307C28.3337 27.4351 27.8457 27.1715 27.0837 27"
            stroke="#1D2739"
            stroke-linecap="round"
          />
          <path
            d="M26.0413 23.2497C26.0413 23.825 25.575 24.2913 24.9997 24.2913C24.4244 24.2913 23.958 23.825 23.958 23.2497C23.958 22.6744 24.4244 22.208 24.9997 22.208C25.575 22.208 26.0413 22.6744 26.0413 23.2497Z"
            fill="white"
            stroke="#1D2739"
          />
          <path
            d="M25.5236 26.7887C25.383 26.924 25.1952 26.9997 24.9998 26.9997C24.8043 26.9997 24.6164 26.924 24.4759 26.7887C23.189 25.5417 21.4643 24.1486 22.3054 22.1262C22.7601 21.0327 23.8517 20.333 24.9998 20.333C26.1478 20.333 27.2393 21.0327 27.6941 22.1262C28.5341 24.1461 26.8137 25.546 25.5236 26.7887Z"
            stroke="#1D2739"
          />
        </svg>
      </div>
      <div>
        <h3 class="text-sm text-[#1D2739]">
          {{ amenity?.name }}
        </h3>
        <p class="text-sm text-[#667185]">{{ amenity?.description }}</p>
      </div>
    </div>
  </div>
          <!-- <div
            v-for="type in amenityTypes"
            :key="type"
            v-show="visibleType === type"
          >
            <div
              v-for="amenity in groupedAmenities[type]"
              :key="amenity.id"
              class="px-4 py-2 mb-2 border-[0.5px] rounded-lg flex items-center gap-x-2"
            >
              <div class="flex items-center">
                <svg
                  width="50"
                  height="49"
                  viewBox="0 0 50 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="0.5"
                    width="48"
                    height="48"
                    rx="24"
                    fill="white"
                  />
                  <rect
                    x="1"
                    y="0.5"
                    width="48"
                    height="48"
                    rx="24"
                    stroke="#F9FAFB"
                  />
                  <rect
                    x="3"
                    y="2.5"
                    width="44"
                    height="44"
                    rx="22"
                    fill="#F4F4F4"
                  />
                  <path
                    d="M22.917 27C22.1549 27.1715 21.667 27.4351 21.667 27.7307C21.667 28.2476 23.1594 28.6667 25.0003 28.6667C26.8413 28.6667 28.3337 28.2476 28.3337 27.7307C28.3337 27.4351 27.8457 27.1715 27.0837 27"
                    stroke="#1D2739"
                    stroke-linecap="round"
                  />
                  <path
                    d="M26.0413 23.2497C26.0413 23.825 25.575 24.2913 24.9997 24.2913C24.4244 24.2913 23.958 23.825 23.958 23.2497C23.958 22.6744 24.4244 22.208 24.9997 22.208C25.575 22.208 26.0413 22.6744 26.0413 23.2497Z"
                    fill="white"
                    stroke="#1D2739"
                  />
                  <path
                    d="M25.5236 26.7887C25.383 26.924 25.1952 26.9997 24.9998 26.9997C24.8043 26.9997 24.6164 26.924 24.4759 26.7887C23.189 25.5417 21.4643 24.1486 22.3054 22.1262C22.7601 21.0327 23.8517 20.333 24.9998 20.333C26.1478 20.333 27.2393 21.0327 27.6941 22.1262C28.5341 24.1461 26.8137 25.546 25.5236 26.7887Z"
                    stroke="#1D2739"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-sm text-[#1D2739]">
                  {{ amenity.description }}
                </h3>
                <p class="text-sm text-[#667185]">{{ amenity.name }}</p>
              </div>
            </div>
          </div> -->
        </div>
        <!-- <div class="bg-white p-3 border-[0.5px] border-gray-50 rounded-md">
          <div class="mt-2 flex space-x-2">
            <button class="py-2 text-xs px-4 bg-[#EBE5E0] text-[#292929] font-medium rounded-md">Hospital</button>
            <button class="py-2 text-xs px-4 bg-white text-[#344054] border border-gray-300 rounded-md">Schools</button>
            <button class="py-2 text-xs px-4 bg-white text-[#344054] border border-gray-300 rounded-md">Market/Shopping Plaza</button>
            <button class="py-2 text-xs px-4 bg-white text-[#344054] border border-gray-300 rounded-md">Police Station</button>
          </div>

          <div class="mt-6 space-y-2">
            <div v-for="itm in 2" :key="itm" class="flex bg-white justify-between border-b-[0.5px] pb-3 last:border-b-0">
   <div class="flex items-center gap-x-3">
    <div class="flex items-center">
        <svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="0.5" width="48" height="48" rx="24" fill="white"/>
            <rect x="1" y="0.5" width="48" height="48" rx="24" stroke="#F9FAFB"/>
            <rect x="3" y="2.5" width="44" height="44" rx="22" fill="#F4F4F4"/>
            <path d="M22.917 27C22.1549 27.1715 21.667 27.4351 21.667 27.7307C21.667 28.2476 23.1594 28.6667 25.0003 28.6667C26.8413 28.6667 28.3337 28.2476 28.3337 27.7307C28.3337 27.4351 27.8457 27.1715 27.0837 27" stroke="#1D2739" stroke-linecap="round"/>
            <path d="M26.0413 23.2497C26.0413 23.825 25.575 24.2913 24.9997 24.2913C24.4244 24.2913 23.958 23.825 23.958 23.2497C23.958 22.6744 24.4244 22.208 24.9997 22.208C25.575 22.208 26.0413 22.6744 26.0413 23.2497Z" fill="white" stroke="#1D2739"/>
            <path d="M25.5236 26.7887C25.383 26.924 25.1952 26.9997 24.9998 26.9997C24.8043 26.9997 24.6164 26.924 24.4759 26.7887C23.189 25.5417 21.4643 24.1486 22.3054 22.1262C22.7601 21.0327 23.8517 20.333 24.9998 20.333C26.1478 20.333 27.2393 21.0327 27.6941 22.1262C28.5341 24.1461 26.8137 25.546 25.5236 26.7887Z" stroke="#1D2739"/>
            </svg>
      </div>
                    
              <div class="text-sm space-y-0.5">
                <p class="font-xs text-[#1D2739] font-medium">Glory International Prim/Sec School</p>
                <p class="text-sm text-[#667185]">10521 Veterans Ademola way</p>
                <p class="text-xs text-[#667185]">Public school</p>
              </div>
   </div>
              <p class="text-sm text-[#171717]">20 min drive</p>
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <CoreModal :isOpen="openRentalApplicationModal">
      <div class="p-6 max-w-xl mx-auto bg-white rounded-md">
       <div class="flex justify-between items-center pb-5">
        <h2 class="text-base font-medium">Select the room you're interested in</h2>
        <button @click="openRentalApplicationModal = false" class="text-[#1D2739] font-semibold text-sm">Cancel</button>
       </div>
        <div class="grid grid-cols-3 gap-4 mb-6">
          <button
            v-for="(room, index) in rooms"
            :key="room.id"
            :disabled="!room.available"
            :class="[
              'p-4 rounded-lg transition cursor-pointer space-y-1',
              selectedRoom === room.id ? 'bg-[#5B8469] text-white' : 'bg-[#F0F2F5] text-[#326543]',
              !room.available && 'opacity-50 pointer-events-none'
            ]"
            @click="selectRoom(room.id)"
          >
            <h3 :class="['text-sm font-medium text-center', 
                selectedRoom === room.id ? 'text-white' : 'text-[#344054]',
                !room.available && 'opacity-50 pointer-events-none']">{{ room.name }}</h3>

            <p :class="['text-center text-xs', selectedRoom === room.id ? 'text-white' : 'text-[#326543]',
            !room.available && 'opacity-50 pointer-events-none']">
              {{ room.price }}
            </p>
          </button>
        </div>
    <div class="pt-10">
      <button
      @click="handleSelectedRoom"
      class="w-full p-3.5 text-sm rounded-lg"
      :class="selectedRoom ? 'bg-[#292929] text-white' : 'bg-gray-300 text-gray-500'"
      :disabled="!selectedRoom"
    >
      Continue
    </button>
    </div>
      </div>
    </CoreModal>


    <CoreModal
    :isOpen="showBookingModal"
    @close="showBookingModal = false"
    >
      <BookingModal :property="property" class="lg:w-4/12 m-6 lg:m-0" />
    </CoreModal>
  </main>
  </template>
  
  <script setup lang="ts">
const propertyManagerImage = ref("shape.png");
import { useRooms } from '@/composables/modules/rentals/useFormatRoomsByAvailability';
import { useCurrencyFormatter } from '@/composables/core/useCurrencyFormatter';
const { formatCurrency } = useCurrencyFormatter('en-NG', 'NGN');
const activeTab = ref('property-overview')
const router = useRouter()

const showBookingModal = ref(false);

const props = defineProps({
  property: {
    type: Object,
    default: () => {}
  },
  showApplicationBtn: {
    type: Boolean,
    default: true
  },
  scheduled: {
    type: Boolean,
    default: false
  }

  
})

// Ensure roomData is provided, fallback to an empty array
const roomData = props?.property?.rooms ?? [];

const { rooms } = useRooms(roomData);
// Track the selected room
const selectedRoom = ref<number | null>(null);

// Function to select a room
const selectRoom = (roomId: number) => {
  selectedRoom.value = roomId;
}

const otherRules = computed(() => {
    if(props.property.rules.length > 2){
      return props.property.rules.slice(2)
    }
  })


const selectedRoomObj = ref({})
const openRentalApplicationModal = ref(false)

const groupedAmenities = computed(() => {
  if (props?.property) {
    return props?.property?.neighbouringLandmarks?.reduce((acc, amenity) => {
      const { type } = amenity;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(amenity);
      return acc;
    }, {});
  }
});

const phoneNumber = "+1234567890"; // Replace with a dynamic number if needed

const makeCall = () => {
  window.location.href = `tel:${phoneNumber}`;
};

const sendSms = () => {
  router.push({ path: '/dashboard/messages', query: { agentId: props?.property?.agent?.id }})
  // window.location.href = `sms:${phoneNumber}`;
};

const handleSelectedRoom = () => {
  localStorage.setItem('roomId', selectedRoom.value)
  router.push(`/dashboard/listings/${props?.property?.id}/rental-applications/rules`)
  openRentalApplicationModal.value = false
}

// Computed property to group amenities by type
// const groupedAmenities = computed(() => {
//   if (props?.propertyObj) {
//     return props?.propertyObj?.neighbouringLandmarks?.reduce((acc, amenity) => {
//       const { type } = amenity;
//       if (!acc[type]) {
//         acc[type] = [];
//       }
//       acc[type].push(amenity);
//       return acc;
//     }, {});
//   }
// });

// Get all unique amenity types
const amenityTypes = computed(() => {
  if (groupedAmenities.value) {
    return Object.keys(groupedAmenities?.value);
  }
});

const tabs = props.property?.rooms?.map((room: any, index: number) => ({
    id: index + 1,
    name: `Room ${index + 1}`,
    details: room,
  }));

// State to keep track of the currently visible type
const visibleType = ref(null) as any;

// Set the first type as the default visible type
onMounted(() => {
  if (amenityTypes?.value?.length > 0) {
    visibleType.value = amenityTypes.value[0];
  }
});
// Method to toggle visibility of amenity lists
const toggleVisibility = (type: any) => {
  visibleType.value = visibleType.value === type ? null : type;
};

const handleSelectedTab = (item: any, itemType: string | null = null) => {
    if (itemType === 'dynamic') {
      console.log(selectedRoomObj.value, 'room obk jee', item)
      activeTab.value = item.name;
      selectedRoomObj.value = item.details;
    } else {
      activeTab.value = item;
    }
  };

  const exteriorCommonAreas = computed(() => {
     return props?.property.commonAreas?.filter((item: any) => item.type === 'exterior')
  })

  const interiorCommonAreas = computed(() => {
    return props?.property?.commonAreas?.filter((item: any) => item.type === 'interior')
  })

  const formattedRoomData = computed(() => {
if(props.property.rooms){
  return props.property.rooms.map(room => {
    return {
      occupant: room.occupantName || "No occupant",
      roomOccupied: room.name,
      availableFrom: room.availability === "available_now"
        ? "Available now"
        : room.availableFrom
          ? new Date(room.availableFrom).toLocaleDateString()
          : "Not available"
    };
  });
}
});

// Function to extract images from a room object
const extractRoomImages = (room: any): string[] => {
  const allImages: string[] = [];

  // Check if the room itself has images
  if (room?.images && Array.isArray(room.images)) {
    allImages.push(...room.images);
  }

  // Extract images from features array
  if (room?.features && Array.isArray(room.features)) {
    room.features.forEach((feature: any) => {
      if (feature?.images && Array.isArray(feature.images)) {
        allImages.push(...feature.images);
      }
    });
  }

  return allImages;
};

const previewRoomImages = (itemTab: any) => {
  const selectedRoom = props.property.rooms.find((room: any) => room?.name === itemTab)
    const allImages = extractRoomImages(selectedRoom);
    localStorage.setItem('selectedImages', JSON.stringify(allImages));
    router.push(`/dashboard/listings/${props.property.id}/room-interior-images`);
}


    // Function to extract all images from an array of objects that contain 'images' arrays
    const extractCommonAreaImages = (commonAreas: any[]): string[] => {
    const allImages: string[] = [];

    commonAreas.forEach((area) => {
      if (area?.images && Array.isArray(area.images)) {
        allImages.push(...area.images);
      }
    });

    return allImages;
  };

  const previewCommonAreaImages = () => {
    const allCommonAreaImages = extractCommonAreaImages(props.property.commonAreas);
    localStorage.setItem('selectedImages', JSON.stringify(allCommonAreaImages));
    router.push(`/dashboard/listings/${props.property.id}/room-interior-images`);
  }

  // Reactive state to track if the full text is expanded
const isExpanded = ref(false);

// Computed property to get the truncated text
const truncatedText = computed(() => {
  return props?.property?.description?.length > 50 
    ? props?.property?.description.substring(0, 50) + '...' 
    : props?.property?.description;
});

// Function to toggle the view between expanded and truncated text
const toggleView = () => {
  isExpanded.value = !isExpanded.value;
};

// const visibleType = ref<string>(''); // Visible type tracking
const scrollContainer = ref<HTMLElement | null>(null);

const isScrollable = ref(false); // To track if the content is scrollable
const showLeftArrow = ref(false); // To track visibility of the left arrow
const showRightArrow = ref(false); // To track visibility of the right arrow

// const toggleVisibility = (type: string) => {
//   visibleType.value = type;
// };

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -100, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 100, behavior: 'smooth' });
  }
};

const checkScrollPosition = () => {
  if (scrollContainer.value) {
    const scrollLeft = scrollContainer.value.scrollLeft;
    const scrollWidth = scrollContainer.value.scrollWidth;
    const clientWidth = scrollContainer.value.clientWidth;

    showLeftArrow.value = scrollLeft > 0;
    showRightArrow.value = scrollLeft + clientWidth < scrollWidth;
  }
};

onMounted(() => {
  // Check if the scroll is necessary (if content overflows)
  if (scrollContainer.value) {
    const clientWidth = scrollContainer.value.clientWidth;
    const scrollWidth = scrollContainer.value.scrollWidth;

    isScrollable.value = scrollWidth > clientWidth;
    checkScrollPosition();
  }
});
</script>
  
<!-- Custom CSS to hide scrollbar -->
<style>
  .hide-scrollbar {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  .scrollbar-hidden::-webkit-scrollbar {
    display: none; /* Hides the scrollbar for WebKit browsers */
  }
  
  .scrollbar-hidden {
    -ms-overflow-style: none; /* Hides the scrollbar for IE and Edge */
    scrollbar-width: none; /* Hides the scrollbar for Firefox */
  }

  /* Custom scrollbar styling */
.scrollbar-hidden::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.scrollbar-hidden::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 10px;
}

.scrollbar-hidden::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-hidden {
  scrollbar-color: #ccc transparent;
  scrollbar-width: thin;
}

  /* Custom scrollbar styling */
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px; /* Adjust the width of the scrollbar */
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #ccc; /* Custom color for the scrollbar thumb */
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent; /* Track color */
  }
  
  .custom-scrollbar {
    scrollbar-width: thin; /* For Firefox */
    scrollbar-color: #ccc transparent; /* For Firefox */
  }

  .disabled-room {
    opacity: 0.5;
    pointer-events: none;
  }
</style>