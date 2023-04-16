<template>
    <div class="m-10 h-screen">
        <div class="text-center text-3xl uppercase">Upcoming Courses</div>
        <div class="flex">
            
            <div class="w-2/3 p-10">
                <div id="scroll-container">
                    <div id="scroll-text">
                        <!-- <ul v-for="(i,index) in courses">
                            <li class="box m-2">
                                <a class="columns" :href="`/courses/${i.path}`">
                                    <div class="column is-2">
                                        {{ i.date }}
                                    </div>
                                    <div class="column">
                                        {{ i.name }}
                                    </div>
                                </a>
                            </li>
                        </ul> -->
                        <ul>
                            <li v-for="c in courses.attributes.courses.data">
                                <webUpcourse :tit="c.attributes.name" :path="c.id" :desc="c.attributes.about" :date="c.attributes.date" :dur="c.attributes.duration" :mode="c.attributes.mode" />
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- <a href="/cal" class="button mt-3 is-dark is-fullwidth txt-bold">View Calender</a> -->
            </div>

            <div class="w-1/3 p-10">
                <iframe id="calender" src="https://drive.google.com/file/d/1tG27kF1FfshAu14_2gdxcFq-fPOLG0Xc/preview" allow="autoplay"></iframe>
            </div>
        </div>
    </div>
</template>
<script setup>

const runtimeConfig = useRuntimeConfig()
let url= `${runtimeConfig.public.apiBase}/upcoming?populate=courses`
// console.log(runtimeConfig)
// let url= `http://localhost:1337/api/upcoming?populate=courses`
let data = await ( await fetch(url) ).json()
console.log(data)
// let courses = [{
//     name: "MSFDA-TISS Assessment and Learning",
//     path: "639a9b445dd54435c4eacb90",
//     date: "12 / 3 / 23"
// }, {
//     name: "MSFDA-Rotary Sanrachana - Creating Constructivist Classrooms",
//     path: "639c044c861be1446c325ab6",
//     date: "1 / 2 / 23"
// }, {
//     name: "Techno-Pedagogy and Andragogy, TAAL",
//     path: "63abe6dfcdf186fa5c1f51f6",
//     date: "2 / 5 / 23"
// }]
</script>
<style>
    #calender{
        width:100%;
        height:70vh;
    }
.carousel-img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
}


#scroll-container {
    border: 3px solid black;
    border-radius: 5px;
    height: 70vh;
    overflow: hidden;
}

#scroll-text:hover {
    animation-play-state: paused;
}

#scroll-text {
    height: 100%;
    text-align: center;

    /* animation properties */
    -moz-transform: translateY(100%);
    -webkit-transform: translateY(100%);
    transform: translateY(100%);

    -moz-animation: my-animation 10s linear infinite;
    -webkit-animation: my-animation 10s linear infinite;
    animation: my-animation 10s linear infinite;
}

/* for Firefox */
@-moz-keyframes my-animation {
    from {
        -moz-transform: translateY(100%);
    }

    to {
        -moz-transform: translateY(-100%);
    }
}

/* for Chrome */
@-webkit-keyframes my-animation {
    from {
        -webkit-transform: translateY(100%);
    }

    to {
        -webkit-transform: translateY(-100%);
    }
}

@keyframes my-animation {
    from {
        -moz-transform: translateY(100%);
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
    }

    to {
        -moz-transform: translateY(-100%);
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
    }
}
</style>