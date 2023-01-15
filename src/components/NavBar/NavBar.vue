<template>
    <header
        class="fixed top-0 left-0 right-0 z-30 flex flex-grow items-center justify-between"
        :class="withBackground ? 'bg-gradient-to-b from-black' : ''"
    >
        <div class="mx-auto flex max-w-6xl flex-grow">
            <nav class="flex max-w-6xl flex-grow items-center justify-between p-4">
                <router-link to="/" class="flex items-center">
                    <div class="h-[40px] w-[40px] rounded-full" :class="accentColor ? accentColor : 'bg-primary'" />
                    <h1 class="ml-1 font-headline text-xl" :class="accentTextColor ? accentTextColor : 'text-primary'">
                        AI Explorer
                    </h1>
                </router-link>
                <div class="flex">
                    <router-link
                        v-for="destination in favDestinations"
                        :to="{ name: Routes.DESTINATION, params: { name: destination } }"
                        class="mx-1 px-2 text-link"
                        active-class="border-b-2"
                        >{{ destination }}
                    </router-link>
                </div>
                <!--            <router-link v-for="link in accountLinks" :key="link.id" :to="link.path" class="px-2 text-white"-->
                <!--                >{{ link.name }}-->
                <!--            </router-link>-->
                <button class="rounded-full p-1" :class="accentColor ? accentColor : 'bg-primary'">U</button>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { Routes } from '../../router/types'

const props = defineProps<{ withBackground?: boolean; accentColor?: string; accentTextColor?: string }>()

const favDestinations = ['Xanthea', 'Damasiis', 'Ruins of Tyriant']

const accountLinks = []
</script>
<style scoped></style>