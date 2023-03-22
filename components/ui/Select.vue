<!-- 
USAGE : <UISelect label="Course" :options="[1,2,3,4]" v-model="course" names="" /> 
 -->
<template>
    <div class="mt-6">
        <label v-if="props.label" for="" class="text-xs sm:text-lg font-medium text-gray-600">
            {{ props.label }}
        </label>
        <select id="" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" :value="props.modelValue" @input="event => emits('update:modelValue', event.target.value)" :name="names" required>
            <option selected>Select a option</option>
            <option v-for="(val, index) in props.options" :value="val" :key="index">
                {{ val }}
            </option>
        </select>
    </div>
</template>
<script setup>
const emits = defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true,
        default: ['please provide data']
    },
    label: {
        type: String,
        default: "label",
        required: true
    },
    names: {
        type: String,
        required: true
    }
})
</script>