<template>
    <div class="">
        <section class="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
            <div class="mb-12 text-left md:text-center">
                <h2 class="mb-2 text-3xl font-extrabold leading-tight text-gray-900">MSFDA Blog 📗</h2>
                <p class="text-lg text-gray-500">Everything comes directly from the desk of the respective engineers, creators and managers at Skcript.</p>
            </div>
            <div class="flex flex-col space-y-12 divide-y divide-gray-200">
              <uiBlogcard v-for="blg in blgs" :tit="blg.attributes.title" :des="blg.attributes.description" :pub="blg.attributes.Author.Published" :links="blg.id"  />
            </div>
        </section>
    </div>
</template>

<script setup>
    const runtimeConfig = useRuntimeConfig()
    let url= `${runtimeConfig.public.apiBase}/blogs?populate=Author`
    let { data: blgs } = await (await fetch(url)).json()
</script>