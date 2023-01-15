<template>
    <NavBar with-background :accent-color="currentDestination.accentColor?.bg" :accent-text-color='currentDestination.accentColor?.text' />
    <div :class="currentDestination.bgColorSecondary">
        <div class="relative mx-auto max-w-[1000px]">
            <div class="flex h-[2000px] flex-col">
                <img :src="currentDestination.splashImage" :alt="currentDestination.name" />
                <div class="flex flex-grow" :class="currentDestination.bgColor" />
            </div>

            <div class="absolute top-[650px] right-[5%] w-[500px] bg-white p-8 pl-8">
                <h1 class="text-3xl font-bold">{{ currentDestination.name }}</h1>
                <h3 class="ml-2 mb-5 uppercase text-gray-400">{{ currentDestination.continent }}</h3>
                <p>{{ currentDestination.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import getDestination, { Destination } from '../components/getDestination'
import NavBar from '../components/NavBar/NavBar.vue'
import { ref, watchEffect } from 'vue'

const props = defineProps<{
    // id: string
    name: string
}>()
const currentDestination = ref<Destination>(getDestination(props.name))
watchEffect(() => {
    currentDestination.value = getDestination(props.name)
})
</script>

<style scoped></style>