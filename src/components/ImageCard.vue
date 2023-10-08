<script setup>
import { computed } from 'vue';

const props = defineProps({
    text: { type: String },
    imageSrc: { type: String },
})

const background = computed(() => ({ 'background-image': `url(${props.imageSrc})`}))
</script>

<template>
    <div class="image-card" :style="background">
        <span class="image-card__text">{{text}}</span>
    </div>
</template>

<style lang="scss">
    .image-card {
        display: flex;
        align-items: flex-end;
        width: 300px;
        height: 300px;
        padding: 24px;
        border-radius: 30px;
        transition: $-e-base-transition;
        background-size: cover;
        background-position: center;

        &__text {
            color: $-c-white;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 100%;
        }


        &:hover {
            width: 340px;
            height: 340px;
        }

        @media(min-width: $-s-desktop) {
            width: 350px;
            height: 350px;

            &:hover {
                width: 400px;
                height: 400px;
            }
        }
    }
</style>