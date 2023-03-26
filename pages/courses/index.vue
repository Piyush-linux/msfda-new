<template>
	<div class="">
		<div class="text-4xl font-bold text-center p-6">Courses</div>
		<!-- courses -->
		  <div class="lg:mx-20 mb-20">
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="p-3" v-for="co in data">
                    <uiCourseCard :tit="co.attributes.name" :uuid="co.id" :desc="co.attributes.about" :date="co.attributes.date" />
                </div>
            </div>
        </div>
	</div>
</template>	

<script setup>
const runtimeConfig = useRuntimeConfig()
let url = `${runtimeConfig.public.apiBase}/courses`
// let url = 'http://localhost:1337/api/courses'
// console.log(runtimeConfig)
console.log(runtimeConfig.public.apiBase)
// let {data} = await(await fetch(url)).json()

// let {data} = await(await fetch(url)).json()


let data=ref(null)
// let {data} = await useFetch(url)
onMounted(async()=>{
	let {data:cou} = await(await fetch(url)).json()
	data.value = cou
	// let {data} = await(await fetch(url)).json()
})
	
</script>