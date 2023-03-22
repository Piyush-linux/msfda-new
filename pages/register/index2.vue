<template>
    <div class="section">
        
        <!-- form -->
        <form @submit.prevent="submit">
            <div class="columns is-multiline is-centered mt-6">
                <!-- 1 -->
                <div class="column is-7" v-show="activeStep == 1">
                    <!-- name -->
                    <div class="title">Course</div>
                    <!-- centre
                     -->
                    <div class="field" style="visibility:collapse;display:table">
                        <div class="dummy mb-3">
                            <label for="" class="label">Test : Course Name</label>
                            <input type="text" class="input" :value="coursename" name="coursename">
                            <input type="text" class="input" :value="date" name="date">
                        </div>
                    </div>
                    
                    <div class="field">
                        <div class="control is-expanded">
                            <label class="label">
                                Centre
                            </label>
                            <div class="select is-fullwidth">
                                <select name="centreid" @input="helo1" ref="centreid">
                                    <!-- <select name="centreid"  v-model="centreid" @input="helo(event)" required ref="centreid"> -->
                                    <option value="Select option">Select option</option>
                                    <option v-for="(val, index) in centreOption" :value="val.centreID" :key="index">
                                        {{ val.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <!-- course -->
                    <div class="field">
                        <div class="control is-expanded">
                            <label class="label">
                                Course
                            </label>
                            <div class="select is-fullwidth">
                                <!-- <select name="centreid" @input="helo" required ref="centreid"> -->
                                <select name="courseid" @input="helo2" ref="courseid">
                                    <option value="Select option">Select option</option>
                                    <option v-for="(val, index) in coursenameOption" :value="val.courseid" :key="index">
                                        {{ val.name }}
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
                        <hr>
                    </div>
                    <!-- <UISelect names="coursename" label="Centre Selected !" :options="coursenameOption" v-model="coursename" class="mt-3" /> -->
                    <!-- {{ coursenameOption }} -->
                    <button class="button is-dark" type="button" @click="next">Next</button>
                </div>
                <!-- 2 -->
                <!-- 3 -->
                <!-- 4 -->

                <!-- 5 -->
                
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
                            <!-- <NuxtLink class="is-large has-text-primary mx-3" to="/about">
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
// import { NSpace, NStep, NSteps } from 'naive-ui'
import { NSpace, NStep, NSteps, NDatePicker } from 'naive-ui'

let timestamp = ref(null)
let date = computed(()=>{
    return new Date(timestamp.value)
})


// 1
// centreid
// coursename
let centreid = ref(null);
let coursenameOption = ref('');
let courseid = ref('');
let coursename = ref(null);
let courseData = ref('');

let helo1 = async () => {
    console.log('---')
    // console.log(centreid.value)
    let url = centreid.value.value

    // let { data: res } = await useFetch(`/api/centre/${url}`)
    let res = await fetch(`/api/centre/${url}`)
    let ans = await res.json()
    console.log(ans)
    coursenameOption.value = ans;
    // courseData.value = res.value ;
    // console.log( res.value )
    // console.log( coursenameOption )
    // console.log(centreid.value.value)
}

let helo2 = () => {
    // 
    console.log('.')
    let sample = courseid.value.value
    let cousreNameNew = coursenameOption.value.filter((x) => x.courseid == sample)
    coursename.value = cousreNameNew[0].name
    // console.log(sample)
    // console.log(cousreNameNew)
    console.log(sample)
    console.log(cousreNameNew[0].name)
    console.log(coursename.value)
}



let centreOption = [{
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

let activeStep = ref(1)

let notify_validate = ref(false)

let notify = () => {
    alert('Please Fill All Filed Correctly !')
    // notify_validate.value = true;
}

let validate = (val) => {
    if (val == 1) {
        // centreid , coursename 
        let cou = centreid.value.value != 'Select option' && coursename.value.value != 'Select option';
        console.log('Validating ... 1')
        console.log(centreid.value.value)
        return cou

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
            let ans = college.value != '' && address.value != '' && universityOther.value != '' && p_name.value != '' && p_email.value != '' && p_number.value != '';
            // && aided.value != ''
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

/*
- next
    - validate()
    - T : +1
    - F : alert
- back : -1

*/

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

// Register hit api : /api/auth/reg
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
        console.log(e);
    }
}

/*
- get form data
- register(data)
*/
let submit = async () => {
    let form_data = Object.fromEntries(new FormData(event.target))
    console.log(form_data)
    await register(form_data)

    console.log('submit form')
}
</script>