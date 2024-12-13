<!-- components/ChatWidget.vue -->
<template>
    <div 
      class="fixed bottom-4 right-4 z-50"
      v-click-outside="closeChat"
    >
      <!-- Chat Button -->
      <button 
        v-if="!isChatOpen"
        @click="isChatOpen = true"
        class="bg-teal-600 text-white rounded-full p-4 shadow-lg hover:bg-teal-700 transition-colors"
      >
        <!-- <IconMessage class="w-6 h-6" /> -->
      </button>
  
      <!-- Chat Window -->
      <div 
        v-else
        class="bg-white rounded-lg shadow-xl w-[360px] h-[480px] flex flex-col"
      >
        <!-- Chat Header -->
        <div class="p-4 border-b flex items-center justify-between bg-teal-600 text-white rounded-t-lg">
          <h3 class="font-semibold">Chat with us</h3>
          <button @click="isChatOpen = false" class="hover:bg-teal-700 p-1 rounded">
            <!-- <IconX class="w-5 h-5" /> -->
          </button>
        </div>
  
        <!-- Chat Messages -->
        <div class="flex-1 overflow-y-auto p-4 space-y-4">
          <div v-for="message in messages" :key="message.id" class="flex flex-col">
            <div 
              :class="[
                'max-w-[80%] rounded-lg p-3',
                message.type === 'incoming' 
                  ? 'bg-gray-100 self-start rounded-bl-none' 
                  : 'bg-teal-600 text-white self-end rounded-br-none'
              ]"
            >
              {{ message.text }}
            </div>
            <span 
              :class="[
                'text-xs mt-1',
                message.type === 'incoming' ? 'self-start' : 'self-end'
              ]"
            >
              {{ message.time }}
            </span>
          </div>
        </div>
  
        <!-- Chat Input -->
        <div class="p-4 border-t">
          <div class="flex gap-2">
            <input 
              v-model="newMessage"
              type="text"
              placeholder="Type your message..."
              class="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
              @keyup.enter="sendMessage"
            >
            <button 
              @click="sendMessage"
              class="bg-teal-600 text-white rounded-lg px-4 py-2 hover:bg-teal-700 transition-colors"
            >
              <!-- <IconSend class="w-5 h-5" /> -->
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
//   import { IconMessage, IconX, IconSend } from '@/components/icons';
  
  interface ChatMessage {
    id: number;
    type: 'incoming' | 'outgoing';
    text: string;
    time: string;
  }
  
  const isChatOpen = ref(false);
  const newMessage = ref('');
  const messages = ref<ChatMessage[]>([
    {
      id: 1,
      type: 'incoming',
      text: 'Hello! How can I help you today?',
      time: '10:00 AM'
    }
  ]);
  
  const sendMessage = () => {
    if (!newMessage.value.trim()) return;
  
    messages.value.push({
      id: Date.now(),
      type: 'outgoing',
      text: newMessage.value,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
  
    newMessage.value = '';
  
    // Simulate response
    setTimeout(() => {
      messages.value.push({
        id: Date.now(),
        type: 'incoming',
        text: 'Thanks for your message! Our team will get back to you soon.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }, 1000);
  };
  
  const closeChat = () => {
    isChatOpen.value = false;
  };
  
  // You'll need to implement the v-click-outside directive
  </script>