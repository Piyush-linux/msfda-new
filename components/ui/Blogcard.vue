<template>
    <div class="blg">
        <div>
            <p class="pt-12 mb-3 text-sm font-normal text-gray-500">
                {{ props.pub }}
            </p>
            <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
                <a href="#" class="text-gray-900 hover:text-purple-700">
                    {{ props.tit }}
                </a>
            </h2>
            <p class="mb-4 text-base font-normal text-gray-600">
                {{ props.des }}
            </p>
            <NuxtLink :to="`/blogs/${props.links}`" class="btn btn-light btn-sm bg-emerald-300 p-2">Continue Reading</NuxtLink>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    tit: String,
    des: String,
    pub: String,
    links: String
})
</script>