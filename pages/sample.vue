<template>
    <div class="bg-white-100 w-full p-10">
        <div class="w-max mx-auto mt-8 max-w-screen-lg px-2">
            <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
                <p class="flex-1 text-base font-bold text-gray-900">Latest Payments</p>
                <div class="mt-4 sm:mt-0">
                    <div class="flex items-center justify-start sm:justify-end">
                        <div class="flex items-center">
                            <label for="" class="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"> Sort by: </label>
                            <select name="" class="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm">
                                <option class="whitespace-no-wrap text-sm">Date</option>
                            </select>
                            <select name="" class="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm">
                                <option class="whitespace-no-wrap text-sm">Course</option>
                            </select>
                        </div>
                        <button type="button" class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
                            <svg class="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" class=""></path>
                            </svg>
                            Export to CSV
                        </button>
                    </div>
                </div>
            </div>
            <div class="mt-6 overflow-hidden rounded-xl border shadow overflow-y-scroll h-96">
                <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
                    <thead class="hidden border-b lg:table-header-group">
                        <tr class="">
                            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Name</td>
                            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Email</td>
                            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Number</td>
                            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td>
                            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">View</td>
                        </tr>
                    </thead>
                    <tbody class="lg:border-gray-300">
                        <!-- list -->
                    <!--     <tr class="" v-for="p in list">
                            <td class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                {{p.name}}
                            </td>
                            <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                {{ p.email }}
                            </td>
                            <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                123
                            </td>
                            <td class="whitespace-no-wrap py-4 text-gray-500 sm:px-6 lg:table-cell">
                                <div v-show="p.status" class="inline-flex items-center font-bold rounded-full bg-emerald-400 py-2 px-3 text-xs text-white">
                                Active
                                </div>
                                <div v-show="!p.status" class="inline-flex items-center font-bold rounded-full bg-rose-400 py-2 px-3 text-xs text-white">
                                Inactive
                                </div>
                            </td>
                            <td class="whitespace-no-wrap py-4 text-gray-500 sm:px-6 lg:table-cell">
                                <button class="w-full text-center button font-bold rounded-md bg-sky-400 py-2 px-3 text-xs text-white">v i e w</button>
                            </td>
                        </tr> -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: "admin",
});

const { find } = useStrapi()

// let url = "http://localhost:3000/api/list"
// let data = await ( await fetch(url) ).json()
// let {data:list} = await useFetch('/api/list')
try {
    const res = await find("blogs")
    console.log('---blog')
    console.log(res)
    // statements
} catch(e) {
    // statements
    console.log(e);
}

// console.log($auth.$storage.setLocalStorage('key', '123'))
// console.log($auth.$storage.getLocalStorage('key'))
// console.log(data)
</script>