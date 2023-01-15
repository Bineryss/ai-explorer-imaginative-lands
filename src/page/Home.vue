<script setup lang="ts">
import NavBar from '../components/NavBar/NavBar.vue'

const places = [
    {
        name: 'Xanthe',
        uri: 'https://cdn.midjourney.com/8a153c5e-9ff1-4fef-98eb-5b71b403c9fb/grid_0.png',
        description:
            'An ancient civilization placed in the heart of the jungle. Who one knows who or what you could meet here...',
    },
    {
        name: 'Damasiis',
        uri: 'https://cdn.midjourney.com/b5df7fe0-0be4-4d76-95af-3dfdf82a42e5/grid_0.png',
        description:
            'An ancient civilization placed in the heart of the jungle. Who one knows who or what you\n' +
            '                                could meet here...',
    },
    {
        name: 'Nifelheim',
        uri: 'https://cdn.midjourney.com/357d8bc6-eeb6-4573-be81-8950494c424d/grid_0.png',
        description:
            'The ruins of Nifelheim bare many treasures but although many dangers. Only the bravest of adventures should go here...',
    },
	{
		name: 'Nifelheim',
		uri: 'https://cdn.midjourney.com/357d8bc6-eeb6-4573-be81-8950494c424d/grid_0.png',
		description:
			'The ruins of Nifelheim bare many treasures but although many dangers. Only the bravest of adventures should go here...',
	},
	{
		name: 'Xanthe',
		uri: 'https://cdn.midjourney.com/8a153c5e-9ff1-4fef-98eb-5b71b403c9fb/grid_0.png',
		description:
			'An ancient civilization placed in the heart of the jungle. Who one knows who or what you could meet here...',
	},
	{
		name: 'Damasiis',
		uri: 'https://cdn.midjourney.com/b5df7fe0-0be4-4d76-95af-3dfdf82a42e5/grid_0.png',
		description:
			'An ancient civilization placed in the heart of the jungle. Who one knows who or what you\n' +
			'                                could meet here...',
	},
]
</script>

<template>
    <NavBar />
    <div class="relative max-w-6xl mx-auto mt-nav-bar">
        <div
            class="absolute right-0 top-0 z-0 min-h-[300px] w-[60%] rounded-tl-[200px] bg-gradient-to-b from-sky-blue"
        />
        <div class="relative z-10 p-12">
            <h1 class="text-center text-8xl font-bold uppercase">Welcome</h1>
            <p class="mt-4 text-center font-roboto text-2xl">AI Explorer - Imaginative Worlds</p>
            <button
                class="ml-[15%] mt-5 block justify-self-start rounded-full border-2 border-primary px-8 py-2 text-primary hover:bg-primary hover:text-white"
            >
                Start Exploring
            </button>
        </div>

        <div class="grid grid-cols-3 grid-rows-2 justify-items-center max-w-[900px]">
            <div v-for="place in places" :key="place.name" class="group relative h-[300px] w-[300px] overflow-hidden">
                <img :src="place.uri" :alt="place.name" />
                <div class="group-hover:block">
                    <div
                        class="relative z-10 ml-4 text-white transition duration-300 ease-in group-hover:-translate-y-[100px] -translate-y-[30px]"
                    >
                        <h1 class="text-lg font-bold">{{ place.name }}</h1>
                        <p class="text-sm">
                            {{ place.description }}
                        </p>
                    </div>
                    <div class="from-blue absolute right-0 top-0 z-0 hidden h-[300px] w-[300px] bg-gradient-to-t" />
                </div>
            </div>
        </div>
    </div>
</template>