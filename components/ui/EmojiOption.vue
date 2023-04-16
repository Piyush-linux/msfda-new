<template>
    <div class="">
        <div>
            <input class="peer sr-only" id="option3" type="radio" tabindex="-1" name="q1" />
            <label for="option3" class="block w-full rounded-lg border border-gray-200 p-1 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white" tabindex="0">
                <span class="text-sm font-medium">
                    <span class="iconify mx-auto h-10 w-10" :data-icon="props.emoji"></span>
                </span>
            </label>
        </div>
    </div>
</template>

<script setup>
	let props = defineProps({
		emoji: String ,
		name: String
	})
</script>