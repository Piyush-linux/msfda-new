<template>
    <div class="">
        <header aria-label="Site Header" class="bg-white">
            <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a class="block text-teal-600" href="/">
                    <span class="sr-only">Home</span>
                    <img src="@/assets/favicon/bg.png" class="w-16">
                </a>
                <div class="flex flex-1 items-center justify-end md:justify-between">
                    <!-- Nav -->
                    <nav aria-label="Site Nav" class="hidden md:block">
                        <ul class="flex items-center gap-6 text-sm uppercase font-medium">
                            <li>
                                <NuxtLink class="text-gray-500 transition hover:text-gray-500/75" to="/">
                                    Home
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/courses" class="text-gray-500 transition hover:text-gray-500/75">
                                    Courses
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about" class="text-gray-500 transition hover:text-gray-500/75">
                                    About
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="text-gray-500 transition hover:text-gray-500/75" to="/blogs">
                                    Blog
                                </NuxtLink>
                            </li>
                            <!-- <li>
                                <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                                    Services
                                </a>
                            </li> -->
                            <!-- <li>
                                <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                                    Projects
                                </a>
                            </li> -->
                        </ul>
                    </nav>
                    <div class="flex items-center gap-4">
                        <!-- register -->
                        <div class="sm:flex sm:gap-4">
                            <NuxtLink class="block rounded-md bg-blue-400 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500" href="/register">
                                Register
                            </NuxtLink>
                            <NuxtLink class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-sky-600 transition hover:text-teal-600/75 sm:block" to="/admin/auth">
                                Admin
                            </NuxtLink>
                        </div>
                        <!-- toggle menu -->
                        <div class="">
                            <div v-show="mbl == false">
                                <button @click="toggle" class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                                    <span class="sr-only">Toggle menu</span>
                                    <span class="iconify h-5 w-5" data-icon="ion:menu"></span>
                                </button>
                            </div>
                            <div v-show="mbl == true">
                                <button @click="toggle" class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                                    <span class="sr-only">Toggle menu</span>
                                    <span class="iconify h-5 w-5" data-icon="charm:cross"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- menu -->
            <div v-show="mbl" class="bg-gray-100">
                <ul class="flex flex-col items-center gap-6 text-sm uppercase font-medium py-5">
                    <li>
                        <NuxtLink class="text-gray-500 transition hover:text-gray-500/75" to="/">
                            Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/courses" class="text-gray-500 transition hover:text-gray-500/75">
                            Courses
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="text-gray-500 transition hover:text-gray-500/75">
                            About
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="text-gray-500 transition hover:text-gray-500/75" to="/blogs">
                            Blog
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </header>
    </div>
</template>
<script setup>
let mbl = ref(false)
let toggle = () => {
    mbl.value = !mbl.value
}
</script>