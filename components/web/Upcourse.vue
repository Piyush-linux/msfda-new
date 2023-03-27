<template>
    <div class="m-5">
        <div class="group mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
            <!-- <a href="#" class="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
                <div class="group relative h-16 w-16 overflow-hidden rounded-lg">
                    <img src="/images/EC25KRDBo-K3w8GexNHSE.png" alt="" class="h-full w-full object-cover text-gray-700" />
                </div>
            </a> -->
            <NuxtLink :to="`/courses/${props.path}`" class="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
                <h3 class="text-sm text-gray-600">MSFDA</h3>
                <a href="#" class="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">
                    {{props.tit}}
                </a>
                <p class="overflow-hidden pr-7 text-sm">
                    {{props.desc.slice(0,150)}}...
                </p>
                <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                    <div class="">
                        Schedule:
                        <span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900"> 
                    {{props.date}}
                     </span>
                 </div>
                    <div class="">
                        Duration:
                        <span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                        {{ props.dur }}
                    </span>
                </div>
                    <div class="">
                        Mode:
                        <span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                        {{ props.mode }}
                    </span>
                </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        path:Number ,
        tit:String ,
        desc:String ,
        mode:String ,
        dur:String ,
        date:String ,
    })
</script>