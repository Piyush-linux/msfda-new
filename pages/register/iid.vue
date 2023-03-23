<template>
    <div class="section">
        <!-- form -->
        <form @submit.prevent="submit">
            <div class="columns is-multiline is-centered mt-6">
                <div class="column is-7" v-show="activeStep == 1">
                    <div class="title">Course</div>

                    <div class="field dummy" style="visibility:collapse;display:table">
                        <!-- ID date -->
                        <div class="field">
                            <label class="label">
                                Test : Date Selected !
                            </label>
                            <div class="control">
                                <input type="text" class="input" :value="date" name="date" placeholder="date">
                            </div>
                        </div>
                        <!-- ID Centre -->
                        <div class="field">
                            <div class="control is-expanded">
                                <label class="label">
                                    Test : Centre Selected !
                                </label>
                                <div class="select is-fullwidth is-danger">
                                    <select required name="centreid">
                                        <option :value="centreid">
                                            {{ centreid }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!-- ID Course -->
                        <div class="field">
                            <div class="control is-expanded">
                                <label class="label">
                                    Test : Course ID Selected !
                                </label>
                                <div class="select is-fullwidth is-danger">
                                    <select required name="courseid">
                                        <option :value="courseid">
                                            {{ courseid }}
                                        </option>
                                    </select>
                                </div>
                                <!-- <input type="text" class="input" :value="courseid" name="courseid"> -->
                            </div>
                        </div>
                        <hr>
                    </div>
                    <!-- course -->
                    <div class="field">
                        <div class="control is-expanded">
                            <label class="label">
                                Course Selected !
                            </label>
                            <!-- <input type="text" class="input" :value="coursename" name="coursename">                                 -->
                            <div class="select is-fullwidth is-danger">
                                <select required name="coursename">
                                    <option :value="coursename">
                                        {{ coursename }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <!-- date -->
                   <div class="field">
                        <label for="" class="label">
                            Select Date To Attend The Program .
                        </label>
                        <n-date-picker v-model:value="timestamp" type="date" />
                    </div> 
                    <button class="button is-dark" type="button" @click="next">Next</button>
                </div>
                <!-- 2 -->
                <div class="column is-7" v-show="activeStep == 2">
                    <div class="title"> Personnel </div>
                    <UIInput names="name" label="Your name (as required on certificate) | तुमचे नाव (प्रमाणपत्रावर आवश्यकतेनुसार)" type="text" class="mt-3" placeholder="Last First Middle" v-model="name" />
                    <!-- email -->
                    <UIInput names="email" label="Your email | तुमचा ईमेल " type="email" class="mt-3" placeholder="example@gmail.com" v-model="email" />
                    <!-- gender -->
                    <UISelect names="gender" label="Gender | लिंग " :options="['Male','Female','Other','Prefer not to say']" v-model="gender" class="mt-3" />
                    <!-- number -->
                    <UIInput names="number" label="Your WhatsApp number | तुमचा WhatsApp नंबर " type="text" placeholder="123" v-model="number" max="10" />
                    <!-- age -->
                    <UIInput names="age" label="Age | वय (in years)" type="text" class="mt-3" placeholder="age" v-model="age" max="2" />
                    <!-- District -->
                    <UISelect names="district" label="District" :options="districtOption" v-model="district" class="mt-3" />
                    <!-- next -->
                    <div class="is-block mt-3 txt-bold">
                        All Fields are mandatory !
                    </div>
                    <div class="is-block mt-3">
                        <button class="button is-dark" type="button" @click="back">Back</button>
                        <button class="button is-dark ml-2" type="button" @click="next">Next</button>
                    </div>
                </div>
                <!-- 3 -->
                <div class="column is-7" v-show="activeStep == 3">
                    <div class="title">Professional</div>
                    <!-- Nature of work -->
                    <UISelect names="work" label="Profile | कामाचे स्वरूप" :options="['Teacher','Non-teaching staff','Student','Management']" v-model="work" class="mt-3" />
                    <!-- student -->
                    <div v-if="work == 'Student'" class="mb-3">
                        <div v-if="stream != 'Other'">
                            <UISelect names="stream" label="Stream" :options="streamOption" v-model="stream" class="mt-3" />
                        </div>
                        <div v-else>
                            <UISelect label="Stream" :options="streamOption" v-model="stream" class="mt-3" />
                            <UIInput names="stream" type="text" class="mt-2" placeholder="Specifiy Your Stream" v-model="streamOther" />
                        </div>
                        <UISelect names="year" label="Year" :options="yearOption" v-model="year" class="mt-3" />
                    </div>
                    <!-- non-student -->
                    <div v-else>
                        <!-- Designation -->
                        <div v-if="designation != 'Other'">
                            <UISelect names="designation" label="Designation | पद" :options="['Assistant professor','Associate professor','Professor','Superintendent','Principal/Dean','Vice chancellor','Other']" v-model="designation" class="mt-3" />
                        </div>
                        <div v-else>
                            <UISelect label="Designation | पद" :options="['Assistant professor','Associate professor','Professor','Superintendent','Principal/Dean','Vice chancellor','Other']" v-model="designation" class="mt-3" />
                            <UIInput names="designation" type="text" class="mt-2" placeholder="Specifiy Your Designation" v-model="designationOther" />
                        </div>
                        <!-- experience -->
                        <UISelect names="experience" label="Number of years of teaching experience | अध्यापन अनुभवाच्या वर्षांची संख्या" :options="['Less than 1','1-2','3-5','5-10','More than 10','not applicable']" v-model="experience" class="mt-3" />
                        <!-- subject -->
                        <div v-if="work != 'Non-teaching staff' && work != 'Management'  ">
                            <UIInput names="subject" label="Subject(s) you teach/ learn | विषय (तुम्ही शिकवता/ शिकता)" type="text" class="mt-2" v-model="subject" />
                        </div>
                        <!-- appointment -->
                        <UISelect names="appointment" label="Nature of appointment | नियुक्तीचे स्वरूप" :options="['Permanent/ कायम','CHB','Ad-hoc','Other']" v-model="appointment" class="mt-3" />
                    </div>
                    <!-- next -->
                    <div class="is-block mt-3 txt-bold">
                        All Fields are mandatory !
                    </div>
                    <div class="is-block mt-3">
                        <button class="button is-dark" type="button" @click="back">Back</button>
                        <button class="button is-dark ml-2" type="button" @click="next">Next</button>
                    </div>
                </div>
                <!-- 4 -->
                <div class="column is-7" v-show="activeStep == 4">
                    <div class="title">Institute</div>
                    <!-- college -->
                    <UIInput names="college" label="College Name | महाविद्यालयाचे नाव पिनकोडसह" type="text" class="mt-2" v-model="college" />
                    <!-- aided -->
                    <div v-if="aided != 'Other'">
                        <UISelect names="aided" label="College: Aided/ unaided/autonomous |  महाविद्यालय: अनुदानित/विनाअनुदानित/स्वायत्त" :options="aidedOption" v-model="aided" class="mt-3" />
                    </div>
                    <div v-else>
                        <UISelect label="College: Aided/ unaided/autonomous |  महाविद्यालय: अनुदानित/विनाअनुदानित/स्वायत्त" :options="aidedOption" v-model="aided" class="mt-3" />
                        <UIInput names="aided" type="text" class="mt-2" placeholder="Specifiy" v-model="aidedOther" />
                    </div>
                    <!-- <UISelect names="aided" label="College: Aided/ unaided/autonomous |  महाविद्यालय: अनुदानित/विनाअनुदानित/स्वायत्त" :options="aidedOption" v-model="aided" class="mt-3" /> -->
                    <!-- address -->
                    <UIInput names="address" label="College address with pin code | पिन कोडसह महाविद्यालयाचा पत्ता" type="text" class="mt-2" v-model="address" max="100" />
                    <!-- university -->
                    <div v-if="university != 'Other'">
                        <UISelect names="university" label="University affiliation | विद्यापीठ संलग्नता" :options="universityOption" v-model="university" class="mt-3" />
                    </div>
                    <div v-else>
                        <UISelect label="University affiliation | विद्यापीठ संलग्नता" :options="universityOption" v-model="university" class="mt-3" />
                        <UIInput names="university" type="text" class="mt-2" placeholder="Specifiy Your University" v-model="universityOther" />
                    </div>
                    <!-- p_name -->
                    <UIInput names="p_name" label="Name of the Principal | प्राचार्य नाव" type="text" class="mt-2" v-model="p_name" />
                    <!-- p_email -->
                    <UIInput names="p_email" label="Email of the Principal | प्राचार्य ईमेल" type="email" class="mt-2" v-model="p_email" />
                    <!-- p_number -->
                    <UIInput names="p_number" label="Contact number of the Principal | प्राचार्य संपर्क नंबर" type="text" class="mt-2" v-model="p_number" max="10" />
                    <!-- next -->
                    <div class="is-block mt-3 txt-bold">
                        All Fields are mandatory !
                    </div>
                    <div class="is-block mt-3">
                        <button class="button is-dark" type="button" @click="back">Back</button>
                        <button class="button is-dark ml-2" type="button" @click="next">Next</button>
                    </div>
                </div>
                <!-- 5 -->
                <div class="column is-7" v-show="activeStep == 5">
                    <div class="title is-2">Review</div>
                    <div class="subtitle">
                        {{ coursename }}
                    </div>
                    <div class="columns">
                        <div class="column">
                            <div class="box p-6">
                                <div class="subtitle txt-bold is-3 mb-1">
                                    Personnel
                                </div>
                                <div class="content is-medium">
                                    <span class="txt-bold">
                                        Name :
                                    </span>
                                    {{ name }}
                                    <br>
                                    <span class="txt-bold">
                                        Number :
                                    </span>
                                    {{ number }}
                                    <br>
                                    <span class="txt-bold">
                                        Email :
                                    </span>
                                    {{email}}
                                    <br>
                                    <span class="txt-bold">
                                        Gender :
                                    </span>
                                    {{gender}}
                                    <br>
                                    <span class="txt-bold">
                                        Age :
                                    </span>
                                    {{age}}
                                    <br>
                                    <span class="txt-bold">
                                        District :
                                    </span>
                                    {{district}}
                                </div>
                                <div class="subtitle txt-bold is-3 mb-1">
                                    Institute
                                </div>
                                <div class="content is-medium">
                                    <span class="txt-bold">
                                        College :
                                    </span>
                                    {{ college }}
                                    <br>
                                    <span class="txt-bold">
                                        Aided :
                                    </span>
                                    {{ aided }}
                                    <br>
                                    <span class="txt-bold">
                                        Address :
                                    </span>
                                    {{ address }}
                                    <br>
                                    <span class="txt-bold">
                                        University :
                                    </span>
                                    {{ (university != 'Other')? university : universityOther }}
                                    <br>
                                    <span class="txt-bold">
                                        Principal Name :
                                    </span>
                                    {{ p_name }}
                                    <br>
                                    <span class="txt-bold">
                                        Principal Email :
                                    </span>
                                    {{ p_email }}
                                    <br>
                                    <span class="txt-bold">
                                        Principal Number :
                                    </span>
                                    {{ p_number }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- next -->
                    <div class="is-block mt-3">
                        <button class="button is-dark" type="button" @click="back">Back</button>
                        <button class="button is-success ml-2" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </form>
        <!-- modal -->
        <div class="modal" :class="{ 'is-active': form_submit }" ref="formSubmit">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="container">
                    <div class="has-text-centered box">
                        <center class="icon-text">
                            <span class="has-text-weight-bold content is-large pt-3">
                                form successfully submitted
                            </span>
                            <div class="icon is-medium">
                                <img src="@/assets/check.gif" alt="" />
                            </div>
                        </center>
                        <hr />
                        <div style="display: flex; justify-content: center">
                            <!-- abt -->
                            <!-- <NuxtLink class="is-large has-text-primary" to="/about">
                                <div class="icon is-large">
                                    <span class="iconify" data-icon="uim:document-layout-left"></span>
                                </div>
                                <br />
                                <span class="has-text-weight-bold">About</span>
                            </NuxtLink> -->
                            <!--  -->
                            <NuxtLink class="is-large has-text-info mx-3" to="/">
                                <div class="icon is-large">
                                    <span class="iconify" data-icon="uim:clinic-medical"></span>
                                </div>
                                <br />
                                <span class="has-text-weight-bold">Home</span>
                            </NuxtLink>
                            <!-- courses -->
                            <NuxtLink class="is-large has-text-danger mx-3" to="courses">
                                <div class="icon is-large">
                                    <span class="iconify" data-icon="uim:dialpad"></span>
                                </div>
                                <br />
                                <span class="has-text-weight-bold">Courses</span>
                            </NuxtLink>
                            <!-- payment -->
                            <!-- Payment -->
                            <a href="https://easypay.axisbank.co.in/easyPay/makePayment?mid=NTkwNzQ%3D" class="is-large has-text-primary mx-3">
                                <div class="icon is-large">
                                    <span class="iconify" data-icon="fluent:payment-28-filled"></span>
                                </div>
                                <br />
                                <span class="has-text-weight-bold">Payment</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <button class="modal-close is-large" aria-label="close"></button> -->
        </div>
        <!-- modal-error -->
        <div class="modal" :class="{ 'is-active': notify_validate }" ref="formSubmit">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="container">
                    <div class="has-text-centered box">
                        <center class="icon-text">
                            <span class="has-text-weight-bold content is-large pt-3">
                                Please Fill All Fields Correctly !
                            </span>
                        </center>
                    </div>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="notify_validate = false"></button>
        </div>
    </div>
</template>
<script setup>
import { NSpace, NStep, NSteps, NDatePicker } from 'naive-ui'
// import { NSpace, NStep, NSteps } from 'naive-ui'

const route = useRoute()
const { id } = route.params
const { coursename, centreid, courseid } = route.query

let timestamp = ref(null)
let date = computed(() => {
    return new Date(timestamp.value)
})
// const route = useRoute()
// let = route.params.id 
// console.log(route)
// const notification = useNotification()

// 1

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
let subject = ref('-')
let appointment = ref('Other')

// 3.2 : student
let streamOption = [' Science', 'Humanities', 'Commerce', 'Management', 'Law', 'Fine Arts / Performance Arts', 'Engineering and Technology', 'Education', 'Architecture', 'Vocational', 'Other']
// let aidedOption = ['Aided | अनुदानित','Unaided | विनाअनुदानित','Autonomous | स्वायत्त','']
let aidedOption = ['Government (affiliated) | शासकीय (संलग्न)', 'Government (autonomous) | शासकीय (स्वायत्त)', 'Private (aided) | खाजगी (अनुदानित)', 'Private (unaided) | खाजगी (विनाअनुदानित)', 'Private (autonomous) | खाजगी (स्वायत्त)', 'Other']
let aidedOther = ref('')

let stream = ref('')
let streamOther = ref('')
let year = ref('')
let yearOption = ['FY', 'SY', 'TY', 'Final Year']
// 4
let college = ref('')
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

let activeStep = ref(1)

let notify_validate = ref(false)
let notify = (mess) => {
    // alert(mess)
    alert('Please Fill All Filed Correctly !')
    // console.log(mess)
}

let validate = (val) => {

    if (val == 1) {
        let cou = centreid.value != '' && coursename.value != '';
        console.log('Validating ... 1')
        return true

    } else if (val == 2) {

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
                ans = work.value != '' && designationOther.value != '' && experience.value != '' && subject != '' && appointment != '';
                return ans
            } else {
                ans = work.value != '' && designation.value != '' && experience.value != '' && subject != '' && appointment != '';
                return ans
            }
        }
        console.log(ans)

    } else if (val == 4) {

        console.log('Validating ... 4')
        let ans;
        let num = p_number.value.length == 10 && /\d/.test(p_number.value);
        if (university.value == 'Other') {
            let ans = college.value != '' && address.value != '' && universityOther.value != '' && p_name.value != '' && p_email.value != '' && p_number.value != '';
            // aided.value != '' &&
        } else {
            let ans = college.value != '' && address.value != '' && university.value != '' && p_name.value != '' && p_email.value != '' && p_number.value != '';
            // && aided.value != ''
        }
        console.log(ans)
        return true

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
                activeStep.value += 1
            } else {
                notify()
            }
            break;
        case 2:
            console.log('validate 2')
            if (validate(activeStep.value)) {
                activeStep.value += 1
            } else {
                notify()
            }
            break;
        case 3:
            console.log('validate 3')
            if (validate(activeStep.value)) {
                activeStep.value += 1
            } else {
                notify()
            }
            break;
        case 4:
            console.log('validate 4')
            activeStep.value += 1
            break;
        default:
            // statements_def
            console.log('no active step')
            break;
    }
    console.log(activeStep.value)

}

let back = () => {
    activeStep.value -= 1
}

let register = async (data) => {
    try {
        const { data: res } = await useFetch('/api/auth/register', { method: 'POST', body: data })
        console.log()
        if (res.value != 'fail') {
            // let paymentUrl = "https://easypay.axisbank.co.in/easyPay/makePayment?mid=NTkwNzQ%3D"
            // await navigateTo(paymentUrl,{external:true})
            form_submit.value = true;
        }

    } catch (e) {
        // statements
        console.log(e);
    }
}

/*
- get form data
*/
let submit = async () => {
    let form_data = Object.fromEntries(new FormData(event.target))
    console.log(form_data)
    await register(form_data)

    console.log('submit form')
}
</script>