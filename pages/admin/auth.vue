--------
<template>
    <div class="my-20">
        <div class="flex mx-10 justify-center">
            <div class="w-1/2">
                <img src="@/assets/hero.png" alt="" class="mx-auto">
            </div>
            <div class="w-1/2">
                <div class="flex flex-col shadow-2xl p-6 m-6 rounded-2xl">
                    <div class="text-2xl font-bold">Admin Panel</div>
                    <uiInput names="username" label="username" type="text" class="mt-3" placeholder="username" v-model="username" />
                    <uiInput names="password" label="password" type="text" class="mt-3" placeholder="password" v-model="password" />
                    <button class="button w-full bg-rose-500 mt-6 p-3 text-white font-bold uppercase" @click="submitAdmin">
                        submit
                    </button>
                </div>
            </div>
            <!--  -->
            <!-- <div class="modal" :class="{ 'hidden': form_submit }"> -->
            <div class="relative" v-show="form_submit">
                <div class="modal fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                        <div class="flex p-10 h-screen w-full bg-gray-100 flex-col items-center">
                          <div class="">
                            <img src="https://ouch-cdn2.icons8.com/eaQUPhS0khcGoYtrmLbPMRoyQdtvr1yCV96chhh5a0o/rs:fit:912:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjY1/L2RhMjM0OGM5LWEw/N2YtNGE4YS05Y2Yw/LWExY2IxMzkxODNk/Zi5zdmc.png" class="mx-auto h-96" />
                          </div>
                            <a :href="`/api/programs?username=${user.username}&password=${user.password}`" download="programs.xlsx" class="mt-6 bg-orange-600 p-3 text-white font-bold">Download!</a>
                        </div>
                </div>
            </div>
            <!--  -->
        </div>
    </div>
</template>
<script setup>
let username = ref("")
let password = ref("")
let user = ref('')
let form_submit = ref(false)
let fileData;
let submitAdmin = async () => {
    //- check username & pasw
    // chk
    try {
        let adminData = { username: username.value, password: password.value }
        const { data: res } = await useFetch('/api/auth/admin', { method: 'POST', body: adminData })
        console.log(res)
        if (res.value != 'fail') {
            user.value = res.value;
            form_submit.value = true;
        } else {
            console.log('fail')
        }
        fileData = res.value;
        console.log(res.value);

    } catch (e) {
        // statements
        console.log(e);
    }
    // then provide the require export file
}

/*const downloadFile = () => {
        console.log(fileData)
         const link = document.createElement("a");
         const file = new Blob([fileData], { type: 'text/plain' });
         link.href = URL.createObjectURL(file);
         link.download = "sample.xlsx";
         link.click();
         URL.revokeObjectURL(link.href);
      };*/
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400&display=swap");


.admin .button {
    font-family: "Roboto Mono";
    background-color: #e74c3c;
    color: ghostwhite;
    font-weight: bolder;
}

.admin .label {
    color: #e74c3c;
}

.admin .tabs li :hover {
    color: #57606f;
}

.admin .tabs .is-active {
    /*background-color: #1e272e;*/
    border-bottom: ghostwhite 3px solid;
}

.admin .tabs .is-active a {
    color: #f1f2f6;
}
</style>