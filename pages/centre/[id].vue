<template>
    <div class="">
        <section class="lg:py-12 lg:flex lg:justify-center">
            <div class="overflow-hidden bg-white lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
                <div class="lg:w-1/3">
                    <!-- <div class="h-64 bg-cover lg:h-full" style="background-image:url('@/assets/img/centre/c1.jpg')"></div> -->
                    <img :src="c1" alt="" class="h-full">
                </div>
                <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-2/3">
                    <h2 class="text-2xl font-semibold text-gray-800 md:text-3xl">
                        {{ data[0].attributes.name }}
                    </h2>
                    <p class="mt-4 text-gray-500 ">
                        {{ data[0].attributes.content }} 
                    </p>
                </div>
            </div>
        </section>
        <!-- courses -->
        <div class="lg:mx-20 mb-20">
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="p-3" v-for="co in data[0].attributes.courses.data">
                    <uiCourseCard :tit="co.attributes.name" :uuid="co.id" :desc="co.attributes.about" :date="co.attributes.date" />
                </div>
            </div>
        </div>

        <!--  -->
    </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const { id } = route.params ;
import c1 from "@/assets/img/centre/c1.jpg";

let centre = ref('')
let url = `${runtimeConfig.public.apiBase}/centres?filters[slug][$eq]=${id}&populate=courses`

    let { data } = await (await fetch(url)).json()


console.log(data)
</script>