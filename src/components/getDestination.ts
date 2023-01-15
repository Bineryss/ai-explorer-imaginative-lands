export interface Destination {
    id: string
    name: string
    continent: string
    description: string
    splashImage: string
    bgColor: string
    bgColorSecondary: string
    accentColor?: AccentColor
}

interface AccentColor {
    bg: string
    text: string
}

const destinations: Destination[] = [
    {
        id: '8a153c5e-9ff1-4fef-98eb-5b71b403c9fb',
        name: 'Xanthea',
        continent: 'Kalesis',
        description:
            'Long ago, in the heart of a dense and verdant jungle, there stood a grand and ancient port city known as Xanthe. Built upon the banks of a wide and winding river, the city was a hub of trade and commerce, drawing merchants and traders from far and wide to its bustling markets and glittering docks.\n' +
            'The people of Xanthe were a hardy and resourceful folk, having carved out a successful civilization amidst the treacherous jungle. They built grand temples to their gods, raised towering stone walls to protect themselves from the wild beasts that roamed the jungle, and dug intricate canals to irrigate their crops.\n' +
            'The city was ruled by a powerful and just emperor, who was said to be blessed by the gods themselves. Under his wise and fair leadership, Xanthe prospered, its wealth and influence spreading throughout the known world.\n' +
            'But despite its greatness, Xanthe was not without its challenges. The jungle was a constant threat, with deadly snakes and ferocious beasts lurking in the shadows. And the city was often beset by warlike tribes, who sought to plunder its riches and enslave its people.\n' +
            'But the people of Xanthe were not easily defeated. They fought bravely, using their superior knowledge of the jungle and their advanced weaponry to repel their enemies time and time again. And through it all, they never lost sight of their ultimate goal: to protect and preserve the grand and ancient port city of Xanthe, in the heart of the jungle.\n' +
            'For generations the city flourished in peace and prosperity, and its legacy lived on in the stories and myths passed down through the ages, a testament to the indomitable spirit of humanity and their ability to thrive against all odds.',
        splashImage: 'https://cdn.midjourney.com/8a153c5e-9ff1-4fef-98eb-5b71b403c9fb/grid_0.png',
        bgColor: 'bg-[#03050b]',
        bgColorSecondary: 'bg-[#1D3230]',
        accentColor: { bg: 'bg-[#E36732]', text: 'text-[#E36732]' },
    },
    {
        id: 'b5df7fe0-0be4-4d76-95af-3dfdf82a42e5',
        name: 'Damasiis',
        continent: 'Kalesis',
        description:
            'Long ago, in the heart of a dense and verdant jungle, there stood a grand and ancient port city known as Xanthe. Built upon the banks of a wide and winding river, the city was a hub of trade and commerce, drawing merchants and traders from far and wide to its bustling markets and glittering docks.\n' +
            'The people of Xanthe were a hardy and resourceful folk, having carved out a successful civilization amidst the treacherous jungle. They built grand temples to their gods, raised towering stone walls to protect themselves from the wild beasts that roamed the jungle, and dug intricate canals to irrigate their crops.\n' +
            'The city was ruled by a powerful and just emperor, who was said to be blessed by the gods themselves. Under his wise and fair leadership, Xanthe prospered, its wealth and influence spreading throughout the known world.\n' +
            'But despite its greatness, Xanthe was not without its challenges. The jungle was a constant threat, with deadly snakes and ferocious beasts lurking in the shadows. And the city was often beset by warlike tribes, who sought to plunder its riches and enslave its people.\n' +
            'But the people of Xanthe were not easily defeated. They fought bravely, using their superior knowledge of the jungle and their advanced weaponry to repel their enemies time and time again. And through it all, they never lost sight of their ultimate goal: to protect and preserve the grand and ancient port city of Xanthe, in the heart of the jungle.\n' +
            'For generations the city flourished in peace and prosperity, and its legacy lived on in the stories and myths passed down through the ages, a testament to the indomitable spirit of humanity and their ability to thrive against all odds.',
        splashImage: 'https://cdn.midjourney.com/b5df7fe0-0be4-4d76-95af-3dfdf82a42e5/grid_0.png',
        bgColor: 'bg-[#030204]',
        bgColorSecondary: 'bg-[#3C4C55]',
        accentColor: { bg: 'bg-[#CA3F2D]', text: 'text-[#CA3F2D]' },
    },
    {
        id: '357d8bc6-eeb6-4573-be81-8950494c424d',
        name: 'Ruins of Tyriant',
        continent: 'Nifelheim',
        description:
            'The ruins of Tyriant bare many treasures but although many dangers. Only the bravest of adventures should go here...',
        splashImage: 'https://cdn.midjourney.com/357d8bc6-eeb6-4573-be81-8950494c424d/grid_0.png',
        bgColor: 'bg-[#030204]',
        bgColorSecondary: 'bg-[#0D131D]',
        accentColor: { bg: 'bg-[#7A8550]', text: 'text-[#7A8550]' },
    },
]

const getDestinationInformation = (name: string) => {
    return destinations.filter((entry) => entry.name == name)[0]
}

export default getDestinationInformation