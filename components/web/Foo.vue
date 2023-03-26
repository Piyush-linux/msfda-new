<template>

    <footer aria-label="Site Footer" class="bg-gray-100 mt-10">
    	<hr>
        <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="flex justify-center text-teal-600">
                <img src="@/assets/favicon/bg.png" alt="" class="h-20">
            </div>
            <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
               Maharashtra State Faculty Development Academy (MSFDA), 412-B, Bhamburda, Bahirat Patil Chowk, Model Colony, Shivajinagar, Pune - 411016. 
            </p>
            <nav aria-label="Footer Nav" class="mt-12">
                <ul class="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <li>
                        <NuxtLink to="/" class="text-gray-700 transition hover:text-gray-700/75 hover:underline tracking-widest">
                            Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="text-gray-700 transition hover:text-gray-700/75 hover:underline tracking-widest">
                            About
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/courses" class="text-gray-700 transition hover:text-gray-700/75 hover:underline tracking-widest">
                            Courses
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blogs" class="text-gray-700 transition hover:text-gray-700/75 hover:underline tracking-widest">
                            Blogs
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/register" class="text-gray-700 transition hover:text-gray-700/75 hover:underline tracking-widest">
                            Register
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <ul class="mt-12 flex justify-center gap-6 md:gap-8">
                <li>
                    <a href="https://www.linkedin.com/company/msfda/" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75">
                        <span class="sr-only">linkdin</span>
                        <span class="iconify h-7 w-7" data-icon="mdi:linkedin"></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/MSFDA.Official/" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75">
                        <span class="sr-only">Facebook</span>
                        <span class="iconify h-7 w-7" data-icon="mdi:facebook"></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/msfda_official/?hl=en" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75">
                        <span class="sr-only">Instagram</span>
                        <span class="iconify h-7 w-7" data-icon="mdi:instagram"></span>
                        
                    </a>
                </li>
                <li>
                    <a href="https://mobile.twitter.com/msfda_official" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75">
                        <span class="sr-only">Twitter</span>
                        <span class="iconify h-7 w-7" data-icon="mdi:twitter"></span>
                        
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@msfda4213" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75">
                        <span class="sr-only">Youtube</span>
                        <span class="iconify h-7 w-7" data-icon="mdi:youtube"></span>
                    </a>
                </li>
                <li>
                    <a href="https://goo.gl/maps/7ncpCenJ6jYmpWCQ6" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75">
                        <span class="sr-only">location</span>
                        <span class="iconify h-7 w-7" data-icon="mdi:map-marker"></span>
                        
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>