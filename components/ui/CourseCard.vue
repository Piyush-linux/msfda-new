<template>

    <NuxtLink :href="`/courses/${uuid}`" class="relative block overflow-hidden rounded-lg border-2 shadow-lg border-gray-200 p-4 sm:p-6 lg:p-8 h-full">
        <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-300  to-lime-300"></span>
        <div class="sm:flex sm:justify-between sm:gap-4">
            <div>
                <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    {{ props.tit }}
                </h3>
                <!-- <p class="mt-1 text-xs font-medium text-gray-600">By John Doe</p> -->
            </div>
            <!-- <div class="hidden sm:block sm:shrink-0">
                <img alt="Paul Clapton" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" class="h-16 w-16 rounded-lg object-cover shadow-sm" />
            </div> -->
        </div>
        <div class="mt-4">
            <p class="max-w-[40ch] text-sm text-gray-500 text-justify">
                {{ props.desc.slice(0,100) }}...
            </p>
        </div>
        <dl class="mt-6 flex gap-4 sm:gap-6">
            <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">Published</dt>
                <dd class="text-xs text-gray-500">{{ props.date }}</dd>
            </div>
            <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">Reading Time</dt>
                <dd class="text-xs text-gray-500">3 minute</dd>
            </div>
        </dl>
    </NuxtLink>
</template>

<script setup>
	const props = defineProps({
        uuid:Number ,
		tit:String ,
        desc:String ,
		date:String 
		// pub:String ,
		// path:String 
	})
</script>