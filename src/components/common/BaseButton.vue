<script setup>
import { computed } from 'vue';

const props = defineProps({
    label: { type: String, default: '' },
    variant: { type: String, default: 'primary' },
    type: { type: String, default: 'button', validator: val => ['button', 'submit'].includes(val) },
    center: { type: Boolean, default: false },
})

const buttonStyle = computed(() => `base-button--${props.variant}`)
const centered = computed(() => props.center ? 'base-button--center' : '')
</script>

<template>
    <button class="base-button" :class="[buttonStyle, centered]" :type="props.type">
        <slot>{{ props.label }}</slot>
    </button>
</template>

<style lang="scss">
.base-button {
    display: flex;
    align-items: center;
    padding: 10px 35px;
    border-radius: 24px;
    font-weight: 700;
    line-height: 150%;
    font-size: $-s-text-small;

    @media (min-width: $-s-desktop) {
        font-size: $-s-text-small-desktop;
    }
}

.base-button--center {
    margin: auto;
}

.base-button--primary {
    color: $-c-white;
    background: $-c-primary;

    @media (prefers-color-scheme: dark) {
        color: $-c-black;
        background: $-c-white-soft;
    }
}
.base-button--outlined {
    color: $-c-primary;
    border: 1px solid $-c-primary;
    padding: 9px 35px;

    @media (prefers-color-scheme: dark) {
        color: $-c-white-soft;
        border: 1px solid $-c-white-soft;
    }
}
</style>