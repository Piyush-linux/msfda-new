<template>
    <div class="">
        <!-- hero -->
        <!-- <div class="container mx-auto h-screen">
            <div class="flex w-full justify-center mt-6">
                <img src="@/assets/bg.png" alt="" class="w-1/2">
            </div>
            <div class="buttons w-full text-center mt-5 space-x-2">
                <button class="btn text-white bg-blue-500 p-2 rounded-2xl px-4 shadow-lg">Courses</button>
                <button class="btn text-white bg-lime-500 p-2 rounded-2xl px-4 shadow-lg">Registration</button>
                <button class="btn text-white bg-amber-500 p-2 rounded-2xl px-4 shadow-lg">Knowleage</button>
                <button class="btn text-white bg-rose-500 p-2 rounded-2xl px-4 shadow-lg">Upcoming</button>
            </div>
        </div> -->
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 pt-10 lg:py-24 items-center justify-center flex-col">
                <img class="lg:w-1/2 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="@/assets/bg.png">
                <div class="text-center lg:w-2/3 w-full">
                    <!--  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
                    <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p> -->
                    <!-- <div class="flex justify-center">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div> -->
                    <div class="buttons flex justify-center mt-1">
                        <NuxtLink to="/courses" class="m-1 btn text-white bg-blue-500 p-2 rounded-2xl px-4 shadow-lg">Courses</NuxtLink>
                        <NuxtLink to="/register" class="m-1 btn text-white bg-lime-500 p-2 rounded-2xl px-4 shadow-lg">Registration</NuxtLink>
                        <NuxtLink to="#partner" class="m-1 btn text-white bg-amber-500 p-2 rounded-2xl px-4 shadow-lg">Knowleage</NuxtLink>
                        <NuxtLink to="#upcoming" class="m-1 btn text-white bg-rose-500 p-2 rounded-2xl px-4 shadow-lg">Upcoming</NuxtLink>
                    </div>
                </div>
            </div>
        </section>
        <!-- centre -->
        <section class="bg-white">
            <div class="container px-6 py-12 mx-auto">
                <hr>
                <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl my-8 text-center">C E N T R E</h1>
                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-6">
                    <div class="" v-for="(cen ,i) in centre">
                        <webHovercard :tit="cen.title" :desc="cen.desc" :uuid="cen.id" :image="cen.image" class="h-96" />
                    </div>
                </div>
            </div>
        </section>
        <!-- upcoming courses -->
        <div id="upcoming">
            <webUpcoming />
        </div>
        <!-- vision -->
        <section>
            <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div class="bg-rose-500 p-8 md:p-12 lg:px-16 lg:py-24">
                        <div class="mx-auto max-w-xl text-center">
                            <h2 class="text-2xl font-bold text-white md:text-3xl">
                                V I S I O N
                            </h2>
                            <p class="hidden text-white/90 sm:mt-4 sm:block text-justify ">
                                The Vision of MSFDA is "Transforming higher educational landscape, through continuos professional development of teachers in Higher Education Institutes (HEIs) of Maharashtra "
                                <br>
                                MSFDA is in a unique position to influence reforms in the higher education as envisaged by the NEP 2020 by engaging with and motivating the faculty. The focus of trainings and the USP of MSFDA is development of holistic learning and overall development as a human being. This will be critical for societal change.
                            </p>
                            <div class="mt-4 md:mt-8">
                                <NuxtLink to="/about" class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-rose-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400">
                                    Know us better
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                        <img alt="Student" src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80" class="h-40 w-full object-cover sm:h-56 md:h-full" />
                        <img alt="Student" src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="h-40 w-full object-cover sm:h-56 md:h-full" />
                    </div>
                </div>
            </div>
        </section>
        <!-- feature -->
        <section class="bg-white">
            <div class="container px-6 py-10 mx-auto">
                <hr>
                <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl mt-8">Approaches</h1>
                <!-- <p class="mt-4 text-gray-500 xl:mt-6 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                </p> -->
                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    <!-- approaches -->
                    <div class="p-8 space-y-3 border-2 border-blue-400 rounded-md" v-for="apr in approaches">
                        <span class="iconify h-9 w-9 inline-block text-blue-400" :data-icon="apr.icon"></span>
                        <h1 class="text-xl font-semibold text-gray-700 capitalize">
                            {{apr.tit}}
                        </h1>
                        <p class="text-gray-500 ">
                            {{apr.desc}}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- sponsore -->
        <div class="">
            <section id="partner">
                <div class=" px-5 py-24 mx-auto lg:px-16">
                    <div class="mx-auto text-center">
                        <hr>
                        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl mt-8">Knowledge Partner</h1>
                        <div class="grid grid-cols-3 gap-4 lg:space-y-10  mx-auto lg:grid-cols-4">
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/dec.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/FLAME.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/HBSU.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/ICT.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/IEEE.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/IISER.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/IOC.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/HP.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/iph.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/jj.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/KKSU.png" alt="Figma">
                            </div>
                            <div>
                                <img class="mh-20 mx-auto lg:h-28" src="@/assets/logos/MNLU.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/NFB.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/NIRMAN.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/PPT.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/pt.jpg" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/RI.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/RID.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/SANT.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/siu.png" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/SNDT.jpg" alt="Figma">
                            </div>
                            <div>
                                <img class="h-20 mx-auto lg:h-28" src="@/assets/logos/TI.png" alt="Figma">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script setup>
import c1 from "@/assets/img/centre/c1.jpg";
import c2 from "@/assets/img/centre/c2.jpg";
import c3 from "@/assets/img/centre/c3.jpg";
import c4 from "@/assets/img/centre/c4.jpg";
import c5 from "@/assets/img/centre/c5.jpg";
import c6 from "@/assets/img/centre/c6.jpg";
import c7 from "@/assets/img/centre/c7.jpg";

let centre = [{
    id: 1,
    image: c1,
    title: "Centre for multidiciplinary",
    desc: "The Centre will carry out trainings in learning opportunities with a multi-disciplinary approach. In line with the NEP, 2020, the Centre will enable institutions and faculty to provide open, creative, and critical learning opportunities by inter-connecting various streams of arts and science."
}, {
    id: 2,
    image: c2,
    title: "Centre for Leadership Development",
    desc: "This Centre will focus on training of senior faculty of HEIs who are in leadership positions or are likely to assume leadership positions. The various aspects of NEP, 2020 will be discussed with them and they will be motivated to translate the policy features into actuality within their institutions."
}, {
    id: 3,
    image: c3,
    title: "Centre for Inclusion and Diversity",
    desc: "The Centre will sensitize the faculty, students and HEIs to diversity and inclusion as a non-negotiable value."
}, {
    id: 4,
    image: c4,
    title: "Centre for Innovation and Cutting Edge Technology",
    desc: "The Centre will foster innovation culture in HEIs. It will develop tools and methodologies to nurture innovation, incubation and entrepreneurial ecosystem and impart trainings in this field. It will focus on research and analysis and strengthen the participant’s understanding as an entrepreneur, leader and/or explorer in new fields and ideas."
}, {
    id: 5,
    image: c5,
    title: "Centre for Resources",
    desc: "The Centre will be developed as a studio hosting a library, an audio-visual room, a performance space with required technical and other resources and provision for regular updating of resources like books, journals, periodicals, films, audio files, etc."
}, {
    id: 7,
    image: c7,
    title: "Centre for Evaluation and Assessment",
    desc: "The Centre is aimed at complementing and enhancing the working of other Centres and to build capacities in the system for higher quality in assessment and evaluation."
}]

// let approac
let approaches = [{
    icon: "uim:object-ungroup",
    tit: "Experiential learning, creativity and innovation",
    desc: "The faculty will be encouraged to adopt pedagogies that promote discovery, questioning and experiential learning by the students. This approach, which is also being focused in school education, will enable development of creative individuals who are intelligent, confident, sensitive and are able to address problems."
}, {
    icon: "uim:rocket",
    tit: "Learning beyond knowledge",
    desc: "Knowledge can lead to intelligence, but by itself is not intelligence. The educators will be nudged towards appreciating this fact, so that they assume the right roles within the overarching purpose of ‘learning’. The HEIs will be encouraged to promote a congenial learning environment, which is free from fear and promotes critical thinking, discussion and co- learning among teachers and students."
}, {
    icon: "uim:dialpad",
    tit: "Multidisciplinary Education",
    desc: "A multidisciplinary approach will promoted. The HEIs will be encouraged to recognize and promote creative arts at par with science and management subjects. Also, the training will promote integration with vocational education as envisaged in the NEP 2020 and work towards correcting the social status hierarchy associated with vocational education."
}, {
    icon: "uim:chart-pie",
    tit: "Scientific and rational thinking",
    desc: "The NEP 2020 envisions discovery-based style of learning with emphasis on scientific method and critical thinking. Article 51 of the Constitution inter alia mentions that it shall be the fundamental duty of every citizen to develop scientific temper, humanism and spirit of enquiry and reform. MSFDA will promote training which is focused on rational thinking."
}, {
    icon: "uim:signal-alt-3",
    tit: "Networking with practitioners, expert institutions, HEIs",
    desc: "Recognizing the strength and importance of experiential and hands-on learning, the MSFDA will work as a collaborative institute that will not only provide training to faculty, but will also serve as facilitative platform to connect the HEIs with best practicing individuals, practitioners, institutions, and resources."
}, {
    icon: "uim:star-half-alt",
    tit: "Diversity and inclusion",
    desc: "The NEP 2020 envisions increased access, equity and inclusion in higher education by creating greater opportunities. The MSFDA will promote diversity and inclusion as a non-negotiable fundamental principal in all aspects of higher education. The training accordingly, will focus on sensitizing faculty towards this aspect and skilling them with comprehensive understanding of diversity and inclusion ."
}]
</script>