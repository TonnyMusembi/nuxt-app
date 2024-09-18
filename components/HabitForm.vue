<script setup lang="ts">
const test = ref(10);
console.log(test);
</script>
<template>
  <div class="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto">
    <div class="flex items-center justify-between border-b pb-4 mb-4">
      <h2 class="text-xl font-semibold text-gray-800">Football Live Score</h2>
      <span class="text-sm text-gray-600">12th August, 2024</span>
    </div>

    <div class="bg-white p-4 rounded-lg mb-4 shadow-md">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <img src="" alt="Team 1" class="w-12 h-12 rounded-full" />
          <span class="font-medium text-lg text-gray-800">Team 1</span>
        </div>
        <span class="text-xl font-bold text-gray-800">1 - 2</span>
        <div class="flex items-center space-x-4">
          <span class="font-medium text-lg text-gray-800">Team 2</span>
          <img src="" alt="Team 2" class="w-12 h-12 rounded-full" />
        </div>
      </div>
      <div class="text-sm text-gray-600 mt-2">
        <span>45'+3' - First Half</span>
      </div>
    </div>

    <div class="bg-white p-4 rounded-lg mb-4 shadow-md">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <img src="" alt="Team 3" class="w-12 h-12 rounded-full" />
          <span class="font-medium text-lg text-gray-800">Team 3</span>
        </div>
        <span class="text-xl font-bold text-gray-800">0 - 0</span>
        <div class="flex items-center space-x-4">
          <span class="font-medium text-lg text-gray-800">Team 4</span>
          <img src="" alt="Team 4" class="w-12 h-12 rounded-full" />
        </div>
      </div>
      <div class="text-sm text-gray-600 mt-2">
        <span>30' - First Half</span>
      </div>
    </div>
    <div class="bg-white p-4 rounded-lg shadow-md">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <img src="" alt="Team 5" class="w-12 h-12 rounded-full" />
          <span class="font-medium text-lg text-gray-800">Team 5</span>
        </div>
        <span class="text-xl font-bold text-gray-800">3 - 1</span>
        <div class="flex items-center space-x-4">
          <span class="font-medium text-lg text-gray-800">Team 6</span>
          <img src="" alt="Team 6" class="w-12 h-12 rounded-full" />
        </div>
      </div>
      <div class="text-sm text-gray-600 mt-2">
        <span>90'+5' - Full Time</span>
      </div>
    </div>
  </div>
</template>
