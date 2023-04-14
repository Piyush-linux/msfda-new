<template>
    <div class="">
        <section class="bg-gray-50">
            <div class="px-4 py-20 mx-auto max-w-7xl">
                <a href="/" title="MSFDA" class="flex items-center justify-start sm:justify-center">
                    <span class="text-3xl">MSFDA</span>
                    <span class="sr-only">msfda</span>
                </a>
                <div class="w-full px-0 pt-5 pb-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:px-6 sm:mt-8 sm:mb-5">
                    <div class="pb-1 space-y-4">
                        <label class="block">
                            <span class="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
                            <input v-model="eml" class="form-input border-b-2 border-b-black w-full p-3 focus:outline-none" type="email" placeholder="Ex. james@bond.com" required />
                        </label>
                        <label class="block">
                            <span class="block mb-1 text-xs font-medium text-gray-700">Your Password</span>
                            <input v-model="psw" class="form-input border-b-2 border-b-black w-full p-3 focus:outline-none" type="password" placeholder="••••••••" required />
                        </label>
                        <div class="flex items-center justify-between">
                            <button @click="submit" class="mt-5 btn w-full bg-emerald-500 p-3 text-white font-bold">L O G I N</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
const { login } = useStrapiAuth()

let eml = ref('')
let psw = ref('')

const submit = async () => {
    try {
        await login({ identifier: eml.value, password: psw.value })
        navigateTo('/admin/profile')
    } catch (e) {
        console.log(e.error)
        // router.push('/auth')
    }
}
</script>