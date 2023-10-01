<script setup>
import { computed } from 'vue';

const props = defineProps({
    label: { type: String, default: '' },
    variant: { type: String, default: 'primary' },
    type: { type: String, default: 'button', validator: val => ['button', 'submit'].includes(val) },
})

const buttonStyle = computed(() => `base-button--${props.variant}`)
</script>

<template>
    <button class="base-button" :class="buttonStyle" :type="props.type">
        <slot>{{ props.label }}</slot>
    </button>
</template>

<style lang="scss">
.base-button {
    padding: 10px 35px;
    border-radius: 24px;
    font-size: $-s-text-small;

    @media (min-width: $-s-desktop) {
        font-size: $-s-text-small-desktop;
    }
}

.base-button--primary {
    color: $-c-white;
    background: var(--primary);
}
</style>