<template>
    <div class="my-20 mx-10">
        <!-- steps -->
        <div>
            <h2 class="sr-only">Steps</h2>
            <div>
                <p class="text-md font-medium text-gray-500"> {{activeStep}}/5 - PROGRESS</p>
                <div class="mt-4 overflow-hidden rounded-full bg-gray-200">
                    <!-- <div class="h-2 w-2/3 rounded-full bg-blue-500"></div> -->
                    <div v-show="activeStep == 1" class="h-2 w-1/6 rounded-full bg-blue-500"></div>
                    <div v-show="activeStep == 2" class="h-2 w-2/6 rounded-full bg-blue-500"></div>
                    <div v-show="activeStep == 3" class="h-2 w-3/6 rounded-full bg-blue-500"></div>
                    <div v-show="activeStep == 4" class="h-2 w-4/6 rounded-full bg-blue-500"></div>
                    <div v-show="activeStep == 5" class="h-2 w-full rounded-full bg-blue-500"></div>
                </div>
            </div>
        </div>
        <!-- step forward -->
        <!-- form -->
        <form @submit.prevent="submit">
            <div id="steps" class="text-center">
                <div class="flex w-full mt-20 justify-center">
                    <div class="w-full sm:w-1/2 text-left">
                        <!-- 1 -->
                        <div class="" v-show="activeStep == 1">
                            <!-- name -->
                            <div class="text-3xl font-bold">Course</div>
                            <!-- centre -->
                            <div class="field" style="visibility:collapse;display:table">
                                <div class="dummy mb-3">
                                    <label for="" class="label">Test : Course Name</label>
                                    <input type="text" class="input" :value="coursename" name="coursename">
                                    <!-- ID date -->
                                    <div class="field">
                                        <label class="label">
                                            Test : Date Selected !
                                        </label>
                                        <div class="control">
                                            <input type="text" class="input" :value="date" name="date" placeholder="date">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--  -->
                            <div class="mt-6">
                                <label for="" class="text-xs sm:text-lg font-medium text-gray-600">
                                    Centre
                                </label>
                                <select id="" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" name="centreid" required @input="helo1" ref="centreid">
                                    <option selected value="Select option">Select option</option>
                                    <option v-for="(val, index) in centreOption.data" :value="val.id" :key="index">
                                        {{ val.attributes.name }}
                                    </option>
                                </select>
                            </div>
                            <!-- course -->
                            <div class="mt-6">
                                <label for="" class="text-xs sm:text-lg font-medium text-gray-600">
                                    Course
                                </label>
                                <select id="" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" name="courseid" required @input="helo2" ref="courseid">
                                    <option selected value="Select option">Select option</option>
                                    <option v-for="(val, index) in coursenameOption.data" :value="val.attributes.courseid" :key="index">
                                        {{ val.attributes.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <!-- 2 -->
                        <div class="" v-show="activeStep == 2">
                            <div class="font-bold text-3xl"> Personal </div>
                            <!-- name -->
                            <uiInput names="name" label="Your name (as required on certificate) | तुमचे नाव (प्रमाणपत्रावर आवश्यकतेनुसार) " type="text" class="mt-3" placeholder="Last First Middle" v-model="name" />
                            <!-- email -->
                            <uiInput names="email" label="Your email | तुमचा ईमेल " type="email" placeholder="example@gmail.com" v-model="email" />
                            <!-- select -->
                            <uiSelect names="gender" label="Gender | लिंग " :options="['Male','Female','Other','Prefer not to say']" v-model="gender" />
                            <!-- number -->
                            <uiInput names="number" label="Your WhatsApp number | तुमचा WhatsApp नंबर " type="text" placeholder="123" v-model="number" max="10" />
                            <!-- age -->
                            <uiInput names="age" label="Age | वय (in years) " type="text" placeholder="age" v-model="age" max="2" />
                            <!-- District -->
                            <uiSelect names="district" label="District " :options="districtOption" v-model="district" />
                        </div>
                        <!-- 3 -->
                        <div class="" v-show="activeStep == 3">
                            <div class="font-bold text-3xl"> Professional </div>
                            <!-- Nature of work -->
                            <uiSelect names="work" label="Profile | कामाचे स्वरूप" :options="['Teacher','Non-teaching staff','Student','Management']" v-model="work" class="mt-3" />
                            <!-- student -->
                            <div v-if="work == 'Student'" class="mb-3">
                                <div v-if="stream != 'Other'">
                                    <uiSelect names="stream" label="Stream" :options="streamOption" v-model="stream" class="mt-3" />
                                </div>
                                <div v-else>
                                    <uiSelect label="Stream" :options="streamOption" v-model="stream" class="mt-3" />
                                    <uiInput names="stream" type="text" class="mt-2" placeholder="Specifiy Your Stream" v-model="streamOther" />
                                </div>
                                <uiSelect names="year" label="Year" :options="yearOption" v-model="year" class="mt-3" />
                            </div>
                            <!-- non-student -->
                            <div v-else>
                                <!-- Designation -->
                                <div v-if="designation != 'Other'">
                                    <uiSelect names="designation" label="Designation | पद" :options="['Assistant professor','Associate professor','Professor','Superintendent','Principal/Dean','Vice chancellor','Other']" v-model="designation" class="mt-3" />
                                </div>
                                <div v-else>
                                    <uiSelect label="Designation | पद" :options="['Assistant professor','Associate professor','Professor','Superintendent','Principal/Dean','Vice chancellor','Other']" v-model="designation" class="mt-3" />
                                    <uiInput names="designation" type="text" class="mt-2" placeholder="Specifiy Your Designation" v-model="designationOther" />
                                </div>
                                <!-- experience -->
                                <uiSelect names="experience" label="Number of years of teaching experience | अध्यापन अनुभवाच्या वर्षांची संख्या" :options="['Less than 1','1-2','3-5','5-10','More than 10','not applicable']" v-model="experience" class="mt-3" />
                                <!-- subject -->
                                <div v-if="work != 'Non-teaching staff' && work != 'Management'  ">
                                    <uiInput names="subject" label="Subject(s) you teach/ learn | विषय (तुम्ही शिकवता/ शिकता)" type="text" class="mt-2" v-model="subject" />
                                </div>
                                <!-- appointment -->
                                <uiSelect names="appointment" label="Nature of appointment | नियुक्तीचे स्वरूप" :options="['Permanent/ कायम','CHB','Ad-hoc','Other']" v-model="appointment" class="mt-3" />
                            </div>
                            <!-- next -->
                            <div class="is-block mt-3 txt-bold">
                                All Fields are mandatory !
                            </div>
                        </div>
                        <!-- 4 -->
                        <div class="" v-show="activeStep == 4">
                            <div class="font-bold text-3xl"> Institute </div>
                            <!-- college -->
                            <uiInput names="college" label="College Name | महाविद्यालयाचे नाव पिनकोडसह" type="text" class="mt-2" v-model="college" />
                            <!-- aided -->
                            <div v-if="aided != 'Other'">
                                <uiSelect names="aided" label="College: Aided/ unaided/autonomous |  महाविद्यालय: अनुदानित/विनाअनुदानित/स्वायत्त" :options="aidedOption" v-model="aided" class="mt-3" />
                            </div>
                            <div v-else>
                                <uiSelect label="College: Aided/ unaided/autonomous |  महाविद्यालय: अनुदानित/विनाअनुदानित/स्वायत्त" :options="aidedOption" v-model="aided" class="mt-3" />
                                <uiInput names="aided" type="text" class="mt-2" placeholder="Specifiy" v-model="aidedOther" />
                            </div>
                            <!-- address -->
                            <uiInput names="address" label="College address with pin code | पिन कोडसह महाविद्यालयाचा पत्ता" type="text" class="mt-2" v-model="address" max="100" />
                            <!-- university -->
                            <div v-if="university != 'Other'">
                                <uiSelect names="university" label="University affiliation | विद्यापीठ संलग्नता" :options="universityOption" v-model="university" class="mt-3" />
                            </div>
                            <div v-else>
                                <uiSelect label="University affiliation | विद्यापीठ संलग्नता" :options="universityOption" v-model="university" class="mt-3" />
                                <uiInput names="university" type="text" class="mt-2" placeholder="Specifiy Your University" v-model="universityOther" />
                            </div>
                            <!-- p_name -->
                            <uiInput names="p_name" label="Name of the Principal | प्राचार्य नाव" type="text" class="mt-2" v-model="p_name" />
                            <!-- p_email -->
                            <uiInput names="p_email" label="Email of the Principal | प्राचार्य ईमेल" type="email" class="mt-2" v-model="p_email" />
                            <!-- p_number -->
                            <uiInput names="p_number" label="Contact number of the Principal | प्राचार्य संपर्क नंबर" type="text" class="mt-2" v-model="p_number" max="10" />
                            <!-- next -->
                            <div class="is-block mt-3 txt-bold">
                                All Fields are mandatory !
                            </div>
                        </div>
                        <!-- 5 -->
                        <div class="w-full" v-show="activeStep == 5">
                            <div class="text-4xl font-bold mb-4">{{ coursename }}</div>
                            <div class="border-emerald-500">
                                <div class="border-2 rounded-md p-6 shadow-2xl mt-5">
                                    <div class="font-bold text-3xl mb-6">
                                        Personnel
                                    </div>
                                    <div class="content is-medium">
                                        <div class="font-bold mt-2">
                                            Name :
                                        </div>
                                        {{ name }}
                                        <div class="font-bold mt-2">
                                            Number :
                                        </div>
                                        {{ number }}
                                        <div class="font-bold mt-2">
                                            Email :
                                        </div>
                                        {{email}}
                                        <div class="font-bold mt-2">
                                            Gender :
                                        </div>
                                        {{gender}}
                                        <div class="font-bold mt-2">
                                            Age :
                                        </div>
                                        {{age}}
                                        <br>
                                        <div class="font-bold mt-2">
                                            District :
                                        </div>
                                        {{district}}
                                    </div>
                                </div>
                                <div class="border-2 rounded-md p-6 shadow-2xl mt-5">
                                    <div class="font-bold text-3xl mb-6">
                                        Institute
                                    </div>
                                    <div class="content is-medium">
                                        <div class="font-bold mt-2">
                                            College :
                                        </div>
                                        {{ college }}
                                        <div class="font-bold mt-2">
                                            Aided :
                                        </div>
                                        {{ aided }}
                                        <div class="font-bold mt-2">
                                            Address :
                                        </div>
                                        {{ address }}
                                        <div class="font-bold mt-2">
                                            University :
                                        </div>
                                        {{ (university != 'Other')? university : universityOther }}
                                        <div class="font-bold mt-2">
                                            Principal Name :
                                        </div>
                                        {{ p_name }}
                                        <div class="font-bold mt-2">
                                            Principal Email :
                                        </div>
                                        {{ p_email }}
                                        <div class="font-bold mt-2">
                                            Principal Number :
                                        </div>
                                        {{ p_number }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- next -->
                        <div class="buttons mt-6">
                            <button class="button m-1 is-dark p-2 px-4 font-medium rounded-md bg-gray-800 text-white" type="button" @click="back" v-show="activeStep != 1">B a c k</button>
                            <button class="button m-1 is-dark p-2 px-4 font-medium rounded-md bg-gray-800 text-white" type="button" @click="next" v-show="activeStep != 5">N e x t</button>
                            <button v-show="activeStep == 5" class="button m-1 is-dark p-2 px-4 font-medium rounded-md bg-gray-800 text-white" type="submit">S U B M I T</button>
                        </div>
                    </div>
                </div>
                <!-- nxt_back -->
            </div>
        </form>
        <!-- modal -->
        <!-- <div class="relative" v-show="form_submit"> -->
        <div v-show="notify_validate" class="relative flex justify-center bg-opacity-70">
            <div class="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform  rounded-lg rtl:text-right sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                        <div class="rounded-lg p-8 shadow-2xl bg-white">
                            <h2 class="text-lg font-bold">Please Fill All Details !</h2>
                            <p class="mt-2 text-sm text-gray-500">
                                Doing that could have cause some issues elsewhere, are you 100% sure it's
                                OK?
                            </p>
                            <div class="mt-4 flex gap-2">
                                <button type="button" class="rounded bg-rose-400 px-4 py-2 text-sm font-medium text-white" @click="notify_validate = false">
                                    Sure
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal_end -->
        <!-- notify -->
        <!-- <div v-show="form_submit" class="relative flex justify-center bg-opacity-70"> -->
        <div v-show="form_submit" class="relative flex justify-center bg-opacity-70">
            <div class="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                        <div>
                            <div class="flex items-center justify-center">
                                <!-- icon -->
                                <button class="button" @click="isOpen = false">
                                    <span class="iconify text-lime-500 h-9 w-9" data-icon="ic:round-library-add-check"></span>
                                </button>
                            </div>
                            <div class="mt-2 text-center">
                                <h3 class="text-2xl font-semibold leading-6 text-gray-800 capitalize" id="modal-title">
                                    Form Submitted
                                </h3>
                                <p class="mt-2 text-sm text-gray-500">
                                    Thank You !
                                </p>
                            </div>
                        </div>
                        <div class="mt-5 sm:flex sm:items-center sm:justify-evenly justify-center">
                            <button class="w-full px-4 py-2 mt-2 text-sm font-bold tracking-wide text-white bg-sky-500 rounded-md sm:w-auto sm:mt-0 hover:bg-sky-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                HOME
                            </button>
                            <button class="w-full px-4 py-2 mt-2 text-sm font-bold tracking-wide text-white bg-sky-500 rounded-md sm:w-auto sm:mt-0 hover:bg-sky-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                COURSES
                            </button>
                            <button class="w-full px-4 py-2 mt-2 text-sm font-bold tracking-wide text-white bg-sky-500 rounded-md sm:w-auto sm:mt-0 hover:bg-sky-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                ABOUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- notify_end -->
    </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig()

let isOpen = ref()


let centreOption = await(await fetch(`${runtimeConfig.public.apiBase}/centres`)).json()

// 0
let activeStep = ref(1)
// 1
let date = ref(null)
let centreid = ref(null);
let coursenameOption = ref('');
let courseid = ref('');
let coursename = ref(null);
let courseData = ref('');

let helo1 = async () => {
    console.log('---')
    let url = centreid.value.value
    try {
        let { data } = await (await fetch(`${runtimeConfig.public.apiBase}/centres/${url}?populate=courses`)).json()
        console.log(data)
        coursenameOption.value = data.attributes.courses;
        console.log(coursenameOption.value)

    } catch (e) {

        console.log(e);
    }
}
let courseNameNew = ref(null)
let helo2 = () => {
    // console.log(courseid.value.value)
    let sample = courseid.value.value
    courseNameNew.value = coursenameOption.value.data.filter((x) => x.attributes.courseid == sample  )
    coursename.value = courseNameNew.value[0].attributes.name
    // console.log('helo2')
    // console.log(sample)
    // console.log(courseNameNew.value)
    // console.log(courseNameNew.value)
    date.value  = courseNameNew.value[0].attributes.date
    // console.log("date : " + courseNameNew.value[0].attributes.date)
    console.log("Date + " + date.value)
}



let centreOption1 = [{
        centreID: "1",
        image: "https://www.swarnprastha.com/wp-content/uploads/2019/06/91283370-pedagogy-word-cloud-concept-.jpg",
        name: "Centre for Multidisciplinary Curriculum and Pedagogy",
        path: "/centre/1"
    },
    {
        centreID: "2",
        image: "https://guardian.ng/wp-content/uploads/2020/08/leadership-leaders-concept.jpg",
        name: "Centre for Leadership Development",
        path: "/centre/2"
    }, {
        centreID: "3",
        image: "https://i.pinimg.com/originals/39/b1/4b/39b14b29f6de96a3cef3b1f233f2a249.png",
        name: "Centre for Inclusion and Diversity",
        path: "/centre/3"
    }, {
        centreID: "4",
        image: "https://philmckinney.com/wp-content/uploads/2017/04/innovation-y-design.png",
        name: "Centre for Innovation and Cutting Edge Technology",
        path: "/centre/4"
    }, {
        centreID: "5",
        image: "https://www.virtualsig.org/wp-content/uploads/2020/06/resources-1-1.jpg",
        name: "Centre for Resources",
        path: "/centre/5"
    }, {
        centreID: "6",
        image: "https://d3kqdc25i4tl0t.cloudfront.net/articles/content/_498616_heroimage.jpg",
        name: "Centre for Networking",
        path: "/centre/6"
    }, {
        centreID: "7",
        image: "https://www.directive.com/images/easyblog_shared/January_2020/1-20-20/b2ap3_large_112329157_consulation_assessment_400.jpg",
        name: "Centre for Evaluation and Assessment",
        path: "/centre/7"
    }
]

// 2
let name = ref('')
let email = ref('')
let number = ref('')
let gender = ref('Male')
let age = ref('')
let district = ref('Ahmednagar')


// 3
let work = ref('Teacher')
// 3.1
let designation = ref('Assistant professor')
let designationOther = ref('')
let experience = ref('Less than 1')
let subject = ref('')
let appointment = ref('Other')
// 3.2 : student
let streamOption = [' Science', 'Humanities', 'Commerce', 'Management', 'Law', 'Fine Arts / Performance Arts', 'Engineering and Technology', 'Education', 'Architecture', 'Vocational', 'Other']
let stream = ref('')
let streamOther = ref('')
let year = ref('')
let yearOption = ['FY', 'SY', 'TY', 'Final Year']
// 4
let college = ref('')
let aidedOption = ['Government (affiliated) | शासकीय (संलग्न)', 'Government (autonomous) | शासकीय (स्वायत्त)', 'Private (aided) | खाजगी (अनुदानित)', 'Private (unaided) | खाजगी (विनाअनुदानित)', 'Private (autonomous) | खाजगी (स्वायत्त)', 'Other']
let aidedOther = ref('')

let aided = ref('')
let address = ref('')
let university = ref('---')
let universityOther = ref('')
let p_name = ref('')
let p_email = ref('')
let p_number = ref('')

// submit
let form_submit = ref(false)

let courseOption = ['A', 'B', 'C']

// let region = ref('Amravati')
// let regionOption = ['Amravati','Konkan','Nagpur','Nashik','Pune']
// let districtOption = {
//         Amravati: ["Akola", "Amravati", "Buldhana", "Yavatmal", "Washim"],
//         Aurangabad: [
//           "Aurangabad",
//           "Beed",
//           "Hingoli",
//           "Jalna",
//           "Latur",
//           "Nanded",
//           "Osmanabad",
//           "Parbhani",
//         ],
//         Konkan: [
//           "Mumbai",
//           "Mumbai Suburban District",
//           "Thane",
//           "Raigad",
//           "Ratnagiri",
//           "Sindhudurg",
//         ],
//         Nagpur: [
//           "Bhandara",
//           "Chandrapur",
//           "Gadchiroli",
//           "Gondia",
//           "Nagpur",
//           "Wardha",
//         ],
//         Nashik: ["Ahmednagar", "Dhule", "Jalgaon", "Nandurbar", "Nashik"],
//         Pune: ["Kolhapur", "Pune", "Sangli", "Satara", "Solapur"],
//       }

let districtOption = ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai city', 'Mumbai subarban', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Osmanabad', 'Palghar', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara', 'Sindhudurg', 'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal']

let universityOption = ['Karmaveer Bhaurao Patil University Satara', 'Savitribai Phule Pune University, Pune', 'Sant Gadge Baba Amravati University, Amravati', 'Dr. Babasaheb Ambedkar Marathwada University, Aurangabad', 'Rashtrasant Tukdoji Maharaj Nagpur University, Nagpur', 'Gondwana University, Gadchiroli', 'Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon', 'Kavi Kulguru Sanskrit Vishwavidyalaya, Ramtek', 'Swami Ramanand Teerth Marathwada University, Nanded', 'Shivaji University, Kolhapur', 'Mumbai University, Mumbai', "Smt. Nathibai Damodar Thakersey Women's University, Mumbai", "Punyashlok Ahilyadevi Holkar Solapur University, Solapur", "Maharashtra National Law University", "Homi Bhabha State University", "Other"]



let notify_validate = ref(false)

let notify = () => {
    notify_validate.value = true
    // alert('Please Fill All Filed Correctly !')
}

let validate = (val) => {
    if (val == 1) {
        // centreid , coursename 
        let cou1 = centreid.value.value != 'Select option' && coursename.value != 'Select option';
        // let cou2 = centreid.value.value != null && coursename.value.value != null ;
        console.log('Validating ... 1')
        // return (cou1 && cou2)
        return cou1

    } else if (val == 2) {
        // name , email , number , gender , age, district
        console.log('Validating ... 2')
        let num = number.value.length == 10 && /\d/.test(number.value);
        let ans = name.value != '' && email.value != '' && gender.value != '' && age.value != '' && num;
        console.log(name.value)
        console.log(email.value)
        console.log(gender.value)
        console.log(age.value)
        console.log(ans)
        return ans

    } else if (val == 3) {

        console.log('Validating ... 3')
        let ans;
        if (work.value == 'Student') {
            if (stream.value == 'Other') {
                ans = work.value != '' && streamOther.value != '';
                return ans
            } else {
                ans = work.value != '' && stream.value != '';
                return ans
            }
            return true
        } else {
            if (designation.value == 'Other') {
                ans = work.value != '' && designationOther.value != '' && experience.value != '' && appointment != '';
                return ans
            } else {
                ans = work.value != '' && designation.value != '' && experience.value != '' && appointment != '';
                return ans
            }
        }
        console.log(ans)

    } else if (val == 4) {
        // college, aided, address, university, universityOther, p_name, p_email, p_number
        // Other-university : specify
        console.log('Validating ... 4')
        let ans;
        let num = p_number.value.length == 10 && /\d/.test(p_number.value);
        if (university.value == 'Other') {
            ans = college.value != '' && address.value != '' && universityOther.value != '' && p_name.value != '' && p_email.value != '' && p_number.value != '';
            // && aided.value != ''
        } else {
            ans = college.value != '' && address.value != '' && university.value != '' && p_name.value != '' && p_email.value != '' && p_number.value != '';
            // && aided.value != ''
        }
        console.log(ans)
        return ans

    } else {
        console.log('fail in validation ...')
        return false
    }

}

let next = () => {
    switch (activeStep.value) {
        case 1:
            console.log('validate 1')
            if (validate(activeStep.value)) {
                // if (true) {
                activeStep.value += 1
            } else {
                notify()
            }
            break;
        case 2:
            console.log('validate 2')
            if (validate(activeStep.value)) {
                // if (true) {
                activeStep.value += 1
            } else {
                notify()
            }
            break;
        case 3:
            console.log('validate 3')
            if (validate(activeStep.value)) {
                // if (true) {
                activeStep.value += 1
            } else {
                notify()
            }
            break;
        case 4:
            console.log('validate 4')
            if (validate(activeStep.value)) {
                // if (true) {
                activeStep.value += 1
            } else {
                notify()
            }
            // activeStep.value += 1
            break;
        default:
            // statements_def
            console.log('no active step')
            break;
    }
    console.log(activeStep.value)

}

let back = () => {
    // back should not go more then 1
    activeStep.value -= 1
}

// Register hit api : /api/auth/reg
let register = async (dt) => {
    try {
        const { data: res } = await (await fetch('/api/auth/register', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dt)
        })).json()
        console.log('--RES--')
        console.log(res)
        if (res != 'fail') {
            form_submit.value = true;
        }
    } catch (e) {
        console.log(e);
    }
}

/*
- get form data
- register(data)
*/
let submit = async () => {
    let form_data = Object.fromEntries(new FormData(event.target))
    console.log('--FORM--')
    console.log(form_data)
    await register(form_data)
    console.log('submit form !')
}
</script>