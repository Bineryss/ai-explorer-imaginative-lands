<template>
    <header>
        <div class="container sticky top-0 flex flex-row items-center gap-4 pt-2 pb-6 text-black shadow-lg">
            <h1 class="flex items-center font-headline text-4xl text-primary">BINERYS</h1>
        </div>
        <nav class="container absolute top-14 left-32 flex flex-grow flex-row items-center gap-4">
            <div
                class="rounded-full bg-primary px-3 text-2xl text-white"
                v-for="navElement in navElements"
                :key="navElement.name"
            >
                <router-link :to="{ name: navElement.link }">
                    {{ navElement.name }}
                </router-link>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { NavBarElement } from './types'
import { Routes } from '../../router/types'

const navElements: NavBarElement[] = [
    { name: 'Home', link: Routes.HOME },
    { name: 'About', link: Routes.ABOUT },
]
</script>