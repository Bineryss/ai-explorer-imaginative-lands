<template>
    <div class="flex min-h-screen flex-col">
        <NavBar />
        <router-view />
    </div>
</template>
<script setup lang="ts">
import NavBar from './components/navbar/NavBar.vue'
</script>
