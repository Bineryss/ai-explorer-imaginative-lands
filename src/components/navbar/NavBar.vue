<template>
    <header class="sticky top-0 max-h-11 bg-gray-700 py-1 shadow-lg">
        <div class="mx-2 flex max-h-11 flex-row items-center gap-4 text-white">
            <h1 class="font-headline text-4xl text-primary">BINERYS</h1>
            <nav class="absolut top-0 flex flex-grow flex-row gap-4 pl-5 pt-10">
                <div
                    class="rounded-full bg-gray-600 px-3 text-2xl"
                    v-for="navElement in navElements"
                    :key="navElement.name"
                >
                    <router-link class="flex flex-row items-center" :to="{ name: navElement.link }">
                        <i v-if="navElement.icon" :class="'m-2' + ' fa-solid fa-' + navElement.icon"></i>
                        <p class="mx-2 hidden md:flex">{{ navElement.name }}</p>
                    </router-link>
                </div>
            </nav>
            <label class="relative text-gray-500">
                <i class="fa-solid fa-magnifying-glass absolute top-1/2 transform -translate-y-1/2 left-3"/>
                <input class="rounded-full px-2 pl-8" type="text" placeholder="search..." />
            </label>

            <router-link class="text-2xl" :to="{ name: Routes.USER }">
                <i class="fa-solid fa-user" />
            </router-link>
        </div>
    </header>
</template>

<script setup lang="ts">
import { NavBarElement } from './types'
import { Routes } from '../../router/types'

const navElements: NavBarElement[] = [
    { name: 'Home', link: Routes.HOME, icon: 'house' },
    { name: 'About', link: Routes.ABOUT, icon: 'address-card' },
    { name: 'User', link: Routes.USER, icon: 'user' },
]
</script>