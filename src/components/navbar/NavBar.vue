<template>
    <header class="sticky top-0 bg-gray-700 shadow-lg">
        <div class="mx-2 flex flex-row items-center gap-x-4 text-white">
            <h1 class="font-headline text-4xl text-primary">BINERYS</h1>
            <nav class="absolut flex flex-grow translate-y-5 transform flex-row gap-x-4 pl-5">
                <div
                    class="text-1xl rounded-full bg-gray-600 px-1"
                    v-for="navElement in navElements"
                    :key="navElement.name"
                >
                    <router-link class="flex flex-row items-center" :to="{ name: navElement.link }">
                        <i v-if="navElement.icon" :class="'m-1.5' + ' fa-solid fa-' + navElement.icon"></i>
                        <p class="mx-2 hidden md:flex">{{ navElement.name }}</p>
                    </router-link>
                </div>
            </nav>
            <i class="fa-solid fa-magnifying-glass md:hidden text-white" />
            <label class="relative hidden text-gray-500 md:flex">
                <i class="fa-solid fa-magnifying-glass absolute top-1/2 left-3 -translate-y-1/2 transform" />
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