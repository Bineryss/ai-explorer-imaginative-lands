<template>
    <header class="sticky top-0 bg-gray-700 shadow-lg">
        <div class="container">
            <div class="flex flex-row items-center gap-4 pt-4 pb-4">
                <h1 class="flex items-center font-headline text-4xl text-primary">BINERYS</h1>
            </div>
            <div class="flex flex-grow flex-row container absolute top-14">
                <nav class="flex flex-grow flex-row place-content-center gap-4">
                    <div
                        class="items-center rounded-full bg-gray-600 px-3 text-2xl text-white"
                        v-for="navElement in navElements"
                        :key="navElement.name"
                    >
                        <router-link class="flex flex-row" :to="{ name: navElement.link }">
                            <i v-if="navElement.icon" :class="'m-2' + ' fa-solid fa-' + navElement.icon"></i>
                            <p class="mx-2 hidden md:flex">{{ navElement.name }}</p>
                        </router-link>
                    </div>
                </nav>
                <div class='flex md:min-w-[30%]' />
            </div>
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