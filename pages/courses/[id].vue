<template>
    <div class="">
        <!-- 1 -->
        <section>
            <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-20">
                <div class="flex flex-wrap items-center mx-auto max-w-7xl">
                    <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                        <div class="relative w-full">
                            <iframe class="w-full h-96 rounded-2xl" src="https://www.youtube.com/embed/GF2vIaPG7iM" title="Deccan College   MSFDA AV Clip" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="flex flex-col items-start mt-12 mb-12 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                        <h1 class="mb-8 text-4xl text-center sm:text-left font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                            {{data.attributes.name}}
                        </h1>
                        <p class="mb-1 text-base text-center leading-relaxed sm:text-left text-gray-500">
                            {{data.attributes.about}}
                        </p>
                        <div class="mt-0 lg:mt-1 w-full sm:flex ">
                            <div class="p-5 bg-white shadow-lg rounded-2xl sm:w-36 m-3">
                                <!-- m1 -->
                                <div class="flex items-center">
                                    <span class="iconify w-5 h-5" data-icon="material-symbols:attach-money"></span>
                                    <p class="ml-2 text-gray-700 text-md ">
                                        mode
                                    </p>
                                </div>
                                <!-- m2 -->
                                <div class="flex flex-col justify-start">
                                    <p class="my-4 text-2xl font-bold text-left text-gray-800 ">
                                        {{data.attributes.mode}}
                                    </p>
                                    <div class="relative h-2 bg-gray-200 rounded w-28">
                                        <div class="absolute top-0 left-0 w-2/3 h-2 bg-emerald-400 rounded">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-5 bg-white shadow-lg rounded-2xl sm:w-36 m-3">
                                <div class="flex items-center">
                                    <!-- icon -->
                                    <span class="iconify w-5 h-5" data-icon="ic:baseline-access-time"></span>
                                    <!-- <span class="iconify w-5 h-5" data-icon="material-symbols:attach-money"></span> -->
                                    <p class="ml-2 text-gray-700 text-md ">
                                        Duration
                                    </p>
                                </div>
                                <div class="flex flex-col justify-start">
                                    <p class="my-4 text-2xl font-bold text-left text-gray-800 ">
                                        {{ data.attributes.duration }}
                                    </p>
                                    <div class="relative h-2 bg-gray-200 rounded w-28">
                                        <div class="absolute top-0 left-0 w-2/3 h-2 bg-emerald-400 rounded">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-5 bg-white shadow-lg rounded-2xl sm:w-36 m-3">
                                <div class="flex items-center">
                                    <!-- icon -->
                                    <span class="iconify w-5 h-5" data-icon="material-symbols:date-range-rounded"></span>
                                    <p class="ml-2 text-gray-700 text-md ">
                                        Date
                                    </p>
                                </div>
                                <div class="flex flex-col justify-start">
                                    <p class="my-4 text-2xl font-bold text-left text-gray-800 ">
                                        {{ formatDate }}
                                    </p>
                                    <div class="relative h-2 bg-gray-200 rounded w-28">
                                        <div class="absolute top-0 left-0 w-2/3 h-2 bg-emerald-400 rounded">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- profile -->
                        <!-- Register -->
                       <!--  <NuxtLink :to="`/register/${id}?coursename=${data.name}&centreid=${data.centreid}&courseid=${data.courseid}`">
                            <button style="box-shadow: 0px 0px 20px 2px 3px gray;border-radius: 10px;" class="button is-primary is-fullwidth is-medium txt-bold">
                                R E G I S T E R
                            </button>
                        </NuxtLink> -->

                        <NuxtLink :to="`/register/${id}?coursename=${data.attributes.name}&courseid=${data.attributes.courseid}&centreid=${data.attributes.centre.data.id}&date=${data.attributes.date}`" class="w-full">
                            <button class="button p-4 rounded-2xl text-white font-bold bg-emerald-400 mt-6 w-full">
                                R E G I S T E R
                            </button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
        <!-- 2 -->
        <div class="flex mx-1 sm:mx-10 px-10 mb-20 flex-col-reverse sm:flex-row">
            <div class="w-full sm:w-1/3 p-5">
                <div class="max-w-sm pb-5 mx-auto mt-4 overflow-hidden rounded-lg shadow-lg">
                    <div class="h-40 bg-gradient-to-br from-sky-400 to-blue-600">
                        <div class="flex justify-center">
                            <span class="mt-10 text-4xl font-extrabold text-white">M S F D A</span>
                        </div>
                        <div class="flex justify-center">
                            <img class="object-cover w-24 h-24 mt-4 border-4 border-blue-600 rounded-full" src="@/assets/hero.png">
                        </div>
                    </div>
                    <div class="px-6 py-4">
                        <div class="flex justify-center mt-8 mb-4 text-xl font-medium">MSFDA</div>
                        <div class="flex my-1 text-gray-600">
                            <svg class="h-5 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span>{{ data.attributes.centre.data.attributes.co_email }}</span>
                        </div>
                        <div class="flex text-gray-600">
                            <svg class="h-5 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>+91 1234567890</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- w-2 -->
            <div class="w-full sm:w-2/3">
                <div class="container flex flex-col w-full p-6  divide-y rounded-md divide-white bg-rose-500 text-white">
                    <h4 class="font-bold mb-3">ELIGIBILITY</h4>
                    <div class="p-4 space-y-2 text-sm text-white font-bold text-justify">
                        <p>
                            {{data.attributes.eligibility}}
                        </p>
                    </div>
                </div>
                <div class="container flex mt-6 flex-col w-full p-6  divide-y rounded-md divide-white bg-rose-500 text-white">
                    <h4 class="font-bold mb-3">OVERVIEW</h4>
                    <div class="p-4 space-y-2 text-sm text-white font-bold text-justify">
                        <p>
                            {{data.attributes.overview}}
                        </p>
                    </div>
                </div>
                <div class="container flex mt-6 flex-col w-full p-6  divide-y rounded-md divide-white bg-rose-500 text-white">
                    <h4 class="font-bold mb-3">Knowledge Partner</h4>
                    <div class="p-4 space-y-2 text-sm text-white font-bold text-justify">
                        <p>
                            {{ data.attributes.partner.about }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig()
const { id } = useRoute().params
console.log(id)
let url = `${runtimeConfig.public.apiBase}/courses/${id}?populate=centre,partner`


const { data } = await (await fetch(url)).json()
// const { data } = await useFetch(url)


// let data = ref(null)
// onMounted(async()=>{
//     const { data: co } = await (await fetch(url)).json()
//     // console.log(course)
//     data.value = co
// })

let formatDate = computed(() => {
    let input = data.attributes.date
    var datePart = input.match(/\d+/g),
        year = datePart[0].substring(2), // get only two digits
        month = datePart[1],
        day = datePart[2];
    return day + '/' + month + '/' + year;
    // console.log(data.attributes.centre)
    // return data
})
</script>