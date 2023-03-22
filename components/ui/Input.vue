<!-- 
USAGE : <UIInput label="Username" type="text" class="mt-2" placeholder="username" v-model="username" names="name" />
 -->
<template>
    <div class="mt-6">
        <div class="w-full space-y-1">
            <label v-if="props.label" for="" class="text-xs sm:text-lg font-medium text-gray-600">
                {{ props.label }}
            </label>
            <input id="basic" class="block p-2 w-full rounded-md border-2 border-gray-500 text-sm transition disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" :value="props.modelValue" @input="event => emits('update:modelValue', event.target.value)" :type="props.type" :placeholder="props.placeholder" :name="props.names" :maxlength="props.max" required>
        </div>
    </div>
</template>

<script setup>
const emits = defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text',
    },
    label: {
        type: String,
        default: null
    },
    names: {
        type: String,
        default: ''
    },
    max: {
        type: String,
        default: '40'
    }

})
</script>