<template>
	<!-- <a :href="`/centre/${uuid}`" class="group relative block bg-black"> -->
    <NuxtLink :to="`/centre/${uuid}`" class="group relative block bg-black">
            <img alt="Developer" :src="image" class="absolute inset-0 h-96 w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
            <div class="relative p-4 sm:p-6 lg:p-8">
                <!-- <p class="text-sm font-medium uppercase tracking-widest text-white">
                    Centre 7
                </p> -->
                <p class="text-xl font-bold text-white sm:text-2xl">{{ props.tit }}</p>
                <div class="mt-20">
                    <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p class="text-sm text-white">
                            {{ props.desc }}
                        </p>
                    </div>
                </div>
            </div>
        </NuxtLink>
</template>

<script setup>
	const props = defineProps({
		uuid:Number ,
		tit:String ,
		desc:String ,
		image:String 
	})
</script>